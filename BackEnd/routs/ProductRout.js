const router = require("express").Router(); // تصحيح في استدعاء الدالة Router()
let expressAH = require("express-async-handler");
let path = require("path");
const { UploadCloud, DeleteCloud } = require("../middelWeres/Cloudinary");
const { ProductModel, validationcreateProduct, validationPutProduct } = require("../mudels/productModel");
const { verifytoken, verifytokenAndHimSelf, verifytokenAndHimSelfAndAdmin } = require("../middelWeres/verifytoken");
const validateObjectId = require("../middelWeres/validateObjectId");

const storage = require("../middelWeres/uploudImg");

router.post("/CreateProduct", verifytoken, storage.single("img"), expressAH(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "no file provided" })
    }
    let { error } = validationcreateProduct(req.body);
    console.log("error -validationcreateProduct",error);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    let imgpath = path.join(__dirname, `../images/${req.file.filename}`)
    let result = await UploadCloud(imgpath)
    let NewProduct = await ProductModel.create({
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        new_price: req.body.new_price,
        BasicImage: {
            URL: result.secure_url,
            PublicId: result.public_id,
        }
    })
    res.status(200).json(NewProduct)
}))

router.get("/GetAllProducts", expressAH(async (req, res) => {
    let { PageNumber , category} = req.query
    console.log(PageNumber);
    let productPerpage = 2
    let Products;
    if(PageNumber) {
        Products = await ProductModel.find().skip((PageNumber - 1) * productPerpage).limit(productPerpage)
    }else if(category){
         Products = await ProductModel.find({category})
    }else{
        Products = await ProductModel.find()
    }
    res.json(Products)
}))

router.get("/GetProduct/:id", validateObjectId, expressAH(async (req, res) => {
    let Product = await ProductModel.findById(req.params.id)
    if (!Product) {
        return res.status(401).json({ message: "Product not found" })
    }
    res.json(Product)
}))

router.put("/UpdateProduct/:id", validateObjectId, verifytokenAndHimSelfAndAdmin, expressAH(async (req, res) => {
    let { error } = validationPutProduct(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    let oldProduct = await ProductModel.findById(req.params.id)

    let UpdatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            category: req.body.category,
            desc: req.body.desc,
            new_price: req.body.new_price,
            old_price:oldProduct.new_price
        }
    }, { new: true })
    res.json(UpdatedProduct)
}))


router.put("/UpdateProductImage/:id", storage.single("img"), validateObjectId, verifytokenAndHimSelfAndAdmin, expressAH(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "no file provided" })
    }
    let Product = await ProductModel.findById(req.params.id)

    if(!Product){
        return res.status(400).json({message : "Product Not Found"})
    }

    await DeleteCloud(Product.BasicImage.PublicId)

    let imgpath = path.join(__dirname, `../images/${req.file.filename}`)
    let result = await UploadCloud(imgpath)

    let UpdatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
        $set: {
            BasicImage: {
                URL: result.secure_url,
                PublicId: result.public_id,
            }
        }
    }, { new: true })
    res.json(UpdatedProduct)
}))



router.delete("/DeleteProduct/:id", validateObjectId,verifytokenAndHimSelfAndAdmin, expressAH(async (req, res) => {
    let Product = await ProductModel.findByIdAndDelete(req.params.id)
    if (!Product) {
        return res.status(401).json({ message: "Product not found" })
    }
    await DeleteCloud(Product.BasicImage.PublicId)

    res.status(200).json({message : "Product Deleted"})
}))

module.exports = router