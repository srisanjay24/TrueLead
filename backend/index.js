const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer'); // Import multer for handling file uploads
const getImages = require('./utils/imageData');

dotenv.config();

const app = express();
const port = process.env.PORT || 5173;

// Enable CORS
app.use(cors());

// Set up multer to handle file uploads
const upload = multer();

// POST route for processing the uploaded image
app.post('/process_image', upload.single('image'), async (req, res) => {
    // Access the uploaded image data from req.file
    const image = req.file;

    // Check if image data exists
    if (!image) {
        return res.status(400).json({ error: "No image provided" });
    }

    // Call getImages function with the image data
    const result = await getImages(image.buffer);

    // Send the result back to the client
    res.json(result);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
