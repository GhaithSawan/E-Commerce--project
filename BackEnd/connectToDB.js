const mongoose = require("mongoose");

module.exports = async () => {
    try {
        // استبدل 'test' باسم قاعدة البيانات التي ترغب في استخدامها
        const dbURI = 'mongodb+srv://ghaithx1x2x3:XnW6akfYx0OdsgqYEW@cluster0.11picll.mongodb.net/storeProject?retryWrites=true&w=majority&appName=Cluster0';
        
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected successfully");
    } catch (error) {
        console.log("DB connection error:", error);
    }
};
