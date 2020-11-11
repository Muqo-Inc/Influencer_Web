const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfluencerSchema = new Schema({
  region: {
    type: String,
    enum: ["north_america", "international"],
    required: true,
  },
  influencerType: {
    type: String,
    required: true,
  },

  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
  },
  age: {
    type: Number,
  },
  occupation: { type: String, trim: true },
  address: [
    {
      street: {
        type: String,
      },
      city: {
        type: String,
      },

      state: {
        type: String,
      },
      country: {
        type: String,
      },
      zip: {
        type: String,
      },
    },
  ],
  phoneNumber: {
    type: Number,
  },
  profession: { type: String, trim: true },
  whyInfluencer: { type: String },
  workedPromotional: { type: Boolean, default: false },
  usedTheApp: { type: Boolean, default: false },
  knowledgeAboutApp: { type: String },
  partOfTeam: { type: Boolean, default: false },
  timeForMusic: { type: String },
  favMusicGenre: { type: Array },
  favSocialMedia: { type: Array },
  verifiedSocialMedia: { type: Boolean, default: false },
  verifiedSocialMediaName: { type: String },

  instagramName: {
    type: String,
  },
  instagramFollowers: {
    type: Number,
  },
  youtubeName: {
    type: String,
  },
  youtubeFollowers: {
    type: Number,
  },

  tiktokName: {
    type: String,
  },
  tiktokFollowers: {
    type: Number,
  },

  specialTalents: { type: String },
  canPromotePosts: { type: String },
  shareRefCode: { type: String },

  date: {
    type: Date,
    default: Date.now,
  },
});

//supporting functions

module.exports = mongoose.model("Influencer", InfluencerSchema);
