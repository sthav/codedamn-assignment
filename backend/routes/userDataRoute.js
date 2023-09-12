const express = require("express");
const router = express.Router();

const User = require("../models/userDataModel");


router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// router.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const singleUser = await User.findById({ _id: id });

//         res.status(200).json(singleUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// router.post("/", async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, req.body, {
//             new: true,
//         });
//         res.status(200).json(updatedUser);

//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// });



// router.patch("/:id", async (req, res) => {
//     const { id } = req.params;
//     console.log("get body", req.body);
//     console.log("get id", id);
//     const { name, about, profession, dob, gender } = req.body;
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, req.body, {
//             new: true,
//         });
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

router.patch('/:userId', async (req, res) => {
    try {
        const updatedData = req.body;
        const userId = req.params.userId;
        // const userId = updatedData._id; // Assuming "_id" is the user's ID field

        // Find and update the user by ID
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
            new: true, // Return the updated user document
        });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;