let cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: process.env.CloudName,
    api_key: process.env.ApiKey,
    api_secret: process.env.ApiSecret
})


async function UploadCloud(img) {
    try {
        let data = await cloudinary.uploader.upload(img, {
            resource_type: "auto"
        })
        return data
    } catch (error) {
        return error
    }
}




async function DeleteCloud(imgId) {
    try {
        console.log("id ");
        console.log(imgId);
        let data = await cloudinary.uploader.destroy(imgId)
        console.log("data");
        console.log(data);
        return data
    } catch (error) {
        return error
    }
}
async function DeletCloudMany(imgIds) {
    try {
        let data = await cloudinary.v2.api.delete_resources(imgIds)
        return data
    } catch (error) {
        throw new Error("cloudinary error")
    }
}
module.exports = {
    UploadCloud,DeleteCloud,DeletCloudMany
}