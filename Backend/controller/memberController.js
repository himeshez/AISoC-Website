const mongoose = require("mongoose"); 

const Members = require("../models/Members") ;


exports.getMembers = async (req, res) =>{
  try {
    const members = await Members.find({});

    // Convert binary image data to URLs
    const membersWithUrls = members.map((member) => ({
      _id: member._id,
      name: member.name,
      role: member.role,
      socialMedia: member.socialMedia,
      imageUrl: `data:image/jpeg;base64,${member.image.toString('base64')}`, // Convert image Buffer to base64 URL
    }));

    res.json(membersWithUrls);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Error fetching members' });
  }
    };

    
    exports.addMember = async (req, res) => {
      try {
        const { name, role, socialMedia } = req.body;
        const image = req.file;

        console.log(image.buffer )
    
        // Create a new member instance
        const newMember = new Members({
          name,
          role,
          socialMedia,
          image: image.buffer, // Assuming you want to store the image buffer
        });
    
        // Save the member to the database
        const savedMember = await newMember.save();
    
        res.json(savedMember);
      } catch (error) {
        console.error('Add member error:', error);
        res.status(500).json({ error: 'Failed to add member' });
      }
    };
    
    