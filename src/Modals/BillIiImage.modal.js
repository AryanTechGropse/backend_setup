import mongoose, { schema } from "mongoose";


const billImage = new Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String, //cloudinary url
      required: true,
    },
    Mobileno:{
        type: Number,
        required: true,
        unique: true,
    }
  },
  { timestamps: true }
);

export const Bill = mongoose.modal("BillImage", billImage);
