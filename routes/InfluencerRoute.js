const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const Influencer = require("../models/InfluencerModel");
const paginatedResults = require("../middleware/paginatedResults");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const myLogger = require("../middleware/temp");

// Get all Influencer
router.get(
  "/influencers",
  auth,
  paginatedResults(Influencer),
  async (req, res) => {
    try {
      const influencers = await Influencer.find().sort({ date: -1 });
      res.json(influencers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//Get a influencer
router.get("/influencers/:id", auth, async (req, res) => {
  try {
    const influencer = await Influencer.findById(req.params.id);
    res.json(influencer);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});
// Create a Influencer

router.post("/influencer", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    age,
    occupation,
    address,
    phoneNumber,
    profession,
    whyInfluencer,
    workedPromotional,
    usedTheApp,
    knowledgeAboutApp,
    partOfTeam,
    timeForMusic,
    favMusicGenre,
    favSocialMedia,
    verifiedSocialMedia,
    verifiedSocialMediaName,
    socialMedia,
    specialTalents,
    canPromotePosts,
    shareRefCode,
  } = req.body;

  try {
    const influencer = new Influencer(req.body);

    const result = await influencer.save();

    res.status(201).json({
      status: "succes",
      data: {
        influencer: result,
      },
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//admin panel authentication

router.post("/admin/auth", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (
      username === process.env.ADMIN_PANEL_ACCESS_USERNAME &&
      password === process.env.ADMIN_PANEL_ACCESS_PASSWORD
    ) {
      const payload = {
        user: username,
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
  } catch (err) {
    console.log(err);

    res.status(500).send("ServerError");
  }
});

router.get("/admin/auth", auth, async (req, res) => {
  try {
    res.json({ user: "Admin" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/emails", async (req, res) => {
  const { email } = req.query;
  try {
    let influencer = await Influencer.findOne({ email });
    if (influencer) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    return res.status(200).json({ status: "succes" });
  } catch (err) {
    console.log(err.message);

    res.status(500).send("Server error");
  }
});
module.exports = router;
