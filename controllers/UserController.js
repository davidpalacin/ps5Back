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
    const user = await User.findOne({ name: req.params.name });

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

// delete user by id
UserController.deleteById = async (req, res) => {
  try {
    const deletedOne = await User.deleteOne({ _id: req.params.id });
    res.json({
      message: `${req.params.id} DELETED`,
      data: deletedOne,
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

// Actualizar peliculas de un usuario
UserController.updateUserMovies = async (req, res) => {
  try {
    // comprobar primero que el usuario no tenga ya esa película
    const user = await User.findById(req.params.id);
    const movie = req.body;
    const match = user.movies.find((m) => m._id == movie._id);

    if (match) {
      // Si no ha sido modificado devolver un json con el mensaje de que ya tiene esta película
      res.json({
        message: "User already have this movie",
        inserted: false,
      });
    } else {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $push: { movies: req.body } }
      );
      res.json({
        message: "User movies updated successfully",
        data: updatedUser,
        inserted: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Marcar película como vista o no vista.
UserController.checkAsViewed = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id, "movies._id": req.params.movieId },
      { $set: { "movies.$.viewed": req.body.viewed } }
    );
    //Enviar una respuesta exitosa al cliente
    res.json({ message: "view status updated", data: updatedUser });
  } catch (error) {
    //Enviar una respuesta de error al cliente
    res.status(500).json({ message: error.message });
  }
};

// Eliminar pelicula del usuario
  UserController.deleteMovie = async (req, res) => {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $pull: { movies: { _id: req.params.movieId } } }
      );
      //Enviar una respuesta exitosa al cliente
      res.json({ message: "Movie removed", data: updatedUser, removed: true });
    } catch (error) {
      //Enviar una respuesta de error al cliente
      res.status(500).json({ message: error.message, removed: false });
    }
  };


export default UserController;
