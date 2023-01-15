import User from "../models/User.js";

const UserController = {};

// GET ALL USERS
UserController.getAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

// get user by name
UserController.getByName = async (req, res) => {
  try {
    const user = await User.findOne({name: req.params.name});

    return res.status(200).json({
      success: true,
      message: "Get user succsessfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

// delete user by name
UserController.delete = async (req, res) => {
  try {
    const deletedOne = await User.deleteOne({name: req.params.name});
    res.json({
      message: `${req.params.name} DELETED`,
      data: deletedOne,
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
}

// delete user by id
UserController.delete = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({_id: req.params.id});
    res.json({
      message: `User ${req.params.id} DELETED`,
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

// Actualizar peliculas de un usuario 
UserController.updateUserMovies = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $push: {movies: req.body} }
    );
    res.json({
      message: `User ${req.params.id} UPDATED`,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export default UserController;