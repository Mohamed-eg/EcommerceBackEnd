const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dzfftbfde",
  api_key: "983815788533856",
  api_secret: "oh9O_OxeZr2hm8soW9m_auj-2dQ",
});
// Set up storage (in memory or on disk)
const storage = new multer.memoryStorage();// or use multer.diskStorage()

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}
const upload = multer({ storage }); //instad of multer({ storage : storage });

module.exports = { upload, imageUploadUtil };
