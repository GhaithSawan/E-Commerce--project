const jwt = require("jsonwebtoken");

function verifytoken(req, res, next) {
    let authtoken = req.headers.authorization;
    
    console.log("authtoken");
    console.log(authtoken);
    if (authtoken) {
        let token = authtoken.split(" ")[1];
        console.log("token");
        console.log(token);
        try {
            const decodedPayload = jwt.verify(token, "SecretKey");
            req.user = decodedPayload;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid Token", error: error.message });
        }
    } else {
        return res.status(401).json({ message: "No token provided" });
    }
}

function verifytokenAndHimSelf(req, res, next) {
    verifytoken(req, res, () => {
        if (req.user.id == req.params.id) {
            next();
        } else {
            return res.status(403).json({ message: "Not allowed" });
        }
    });
}
function verifytokenAndHimSelfAndAdmin(req, res, next) {
    verifytoken(req, res, () => {
        if (req.user.id == req.params.id || req.user.IsAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "Not allowed" });
        }
    });
}
function verifytokenAndAdmin(req, res, next) {
    verifytoken(req, res, () => {

        console.log(req.user.IsAdmin);
        if (req.user.IsAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "Not admin" });
        }
    });
}

module.exports = {
    verifytokenAndAdmin,
    verifytoken,
    verifytokenAndHimSelf,
    verifytokenAndHimSelfAndAdmin
};
