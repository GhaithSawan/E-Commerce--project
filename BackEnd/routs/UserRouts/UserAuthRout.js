const router = require("express").Router(); // تصحيح في استدعاء الدالة Router()
let expressAH = require("express-async-handler");
const { validationRegister, UserModel, validationLogin } = require("../../mudels/UserModel");
let jwt = require("jsonwebtoken")

router.post("/Register", expressAH(async (req, res) => {
    let { error } = validationRegister(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    let user = await UserModel.findOne({ email: req.body.email }).lean();

    if (user) {
        return res.status(401).json({ message: "User already exists" });
    }

    let isAdmin = false;

    const adminEmails = ['admin@example.com']; 
    if (adminEmails.includes(req.body.email)) {
        isAdmin = true;
    }

    let newUser = await UserModel.create({
        Username: req.body.Username,
        email: req.body.email,
        IsAdmin : isAdmin,
        Password: req.body.Password,
    });

   

    let token = jwt.sign({ id: newUser.id, IsAdmin: newUser.IsAdmin }, process.env.SecretKey);

    // تحويل كائن Mongoose إلى كائن JavaScript عادي باستخدام `lean`
    let userResponse = newUser.toObject();
    delete userResponse.Password;
    userResponse.token = token;

    res.json(userResponse);
}));

router.post("/Login", expressAH(async (req, res) => {

    let { error } = validationLogin(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message }); // استخدام return للخروج من الدالة
    }

    let user = await UserModel.findOne({ email: req.body.email })
    console.log(user);
    if(!user){
       return res.status(401).json({message:"user is not  exist"})
       
    }

    // let ispasswordMatch = await bcrypt.compare(req.body.password, user.password)

    if(user.Password != req.body.Password ){
       return res.status(401).json({message:"password is not corrct"})
    }

    let token = jwt.sign({ id: user.id, IsAdmin: user.IsAdmin }, process.env.SecretKey)
    

    res.status(201).json({
        id: user.id,
        Username: user.Username,
        IsAdmin: user.IsAdmin,
        ProfilePhoto: user.ProfilePhoto,
        token
    })

}))

module.exports = router