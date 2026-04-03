const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Không cho trùng email
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Tự động tạo thời gian CreatedAt và UpdatedAt
  },
);

module.exports = mongoose.model("Customer", customerSchema);
