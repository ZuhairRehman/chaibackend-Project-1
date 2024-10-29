import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import { v2 as cloudinary } from "cloudinary";

(async function () {
  //  Cloudinary Configuration for FILE upload
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
  });
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File upload successful
    console.log(`file upload successful`, response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved file on server as the upload operation has  failed
    return null;
  }
};

export { uploadOnCloudinary };
