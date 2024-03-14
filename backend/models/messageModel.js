const mongoose = require("mongoose");

const MeaasgeModle = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

const Meaasge = mongoose.model("Message", MeaasgeModle);
module.exports = Meaasge;
