import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnails: {
      type: String, // cloudinary url
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: "number",
      required: true,
    },

    views: {
        type: Number,
        default: 0,

        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
  },
  {
    timestamps: true,
  }
);

videoSchema 

export const Video = mongoose.model("Video", videoSchema);
