import { model, Schema } from 'mongoose';

// const gallerySchema = new Schema({
//   thumb: { type: String, required: true },
//   original: { type: String, required: true },
// });

// const reviewSchema = new Schema({
//   reviewer_name: { type: String, required: true },
//   reviewer_rating: { type: Number, required: true, min: 1, max: 5 },
//   comment: { type: String, required: true },
// });

const truckSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    form: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    tank: {
      type: String,
      required: true,
    },
    consumption: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    AC: {
      type: Boolean,
      required: true,
    },
    bathroom: {
      type: Boolean,
      required: true,
    },
    kitchen: {
      type: Boolean,
      required: true,
    },
    TV: {
      type: Boolean,
      required: true,
    },
    radio: {
      type: Boolean,
      required: true,
    },
    refrigerator: {
      type: Boolean,
      required: true,
    },
    microwave: {
      type: Boolean,
      required: true,
    },
    gas: {
      type: Boolean,
      required: true,
    },
    water: {
      type: Boolean,
      required: true,
    },
    gallery: [
      {
        thumb: {
          type: String,
          required: true,
        },
        original: {
          type: String,
          required: true,
        },
      },
    ],
    reviews: [
      {
        reviewer_name: {
          type: String,
          required: true,
        },
        reviewer_rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const trucksCollection = model('truck', truckSchema);
