const router = require("express").Router(); // تصحيح في استدعاء الدالة Router()
const validateObjectId = require("../../middelWeres/validateObjectId");
const { verifytokenAndAdmin, verifytokenAndHimSelf, verifytokenAndHimSelfAndAdmin } = require("../../middelWeres/verifytoken");
const { UserModel, validationUpdate } = require("../../mudels/UserModel");
let expressAH = require("express-async-handler");


router.get("/GetAllUsers", verifytokenAndAdmin, expressAH(async (req, res) => {
    let Users = await UserModel.find().select("-Password")
    res.json(Users)
}))
router.get("/GetUser/:id", validateObjectId, expressAH(async (req, res) => {
    let Users = await UserModel.findById(req.params.id).select("-Password")
    if (!Users) {
        return res.status(401).json({ message: "User not found" })
    }
    res.json(Users)
}))

router.put("/UpdateUser/:id", validateObjectId, verifytokenAndHimSelf, expressAH(async (req, res) => {
    let { error } = validationUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    // hash password

    let UpdatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
        $set: {
            Username: req.body.Username,
            Password: req.body.Password
        }
    }, { new: true }).select("-Password")
    res.json(UpdatedUser)
}))

router.delete("/DeleteUser/:id", validateObjectId,verifytokenAndHimSelfAndAdmin, expressAH(async (req, res) => {
    let Users = await UserModel.findByIdAndDelete(req.params.id)
    if (!Users) {
        return res.status(401).json({ message: "User not found" })
    }
    res.json("Users Deleted")
}))

module.exports = router