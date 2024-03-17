//JUST RUN ONCE TO PUSH PICTURES INTO MONGO DB

const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const Members = require("../model/Members") ; 

const dbConnect = require("../config/db");
dbConnect();


// Path to the folder containing images
const folderPath = '../images/'; // Replace this with your image folder path

// Read files from the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Loop through the files
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Read image file as binary data
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      // Create a new image document
      const newMember = new Member({
        name: file,
        image: data, // Image data as Buffer
      });

      // Save the image to MongoDB
      newImage.save((err, savedImage) => {
        if (err) {
          console.error('Error saving image:', err);
        } else {
          console.log('Image saved to MongoDB:', savedImage);
        }
      });
    });
  });
});
