import Movie from '../models/Movie.js';

const MovieController = {};

// GET ALL USERS
MovieController.getAll = async (req, res) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({
      success: true,
      message: "Get all movies retrieved succsessfully",
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

export default MovieController;
