import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    adult: {
      type: Boolean,
      required: false,
    },
    backdrop_path: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    genre_ids: {
      type: Array
    },
    id: {
      type: Number
    },
    original_language: {
      type: String
    },
    original_title: {
      type: String
    },
    overview: {
      type: String
    },
    popularity: {
      type: String
    },
    poster_path: {
      type: String
    },
    release_date: {
      type: Date
    },
    title: {
      type: String
    },
    video: {
      type: Boolean
    },
    vote_average: {
      type: Number
    },
    vote_count: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movies", MovieSchema);

export default Movie;
