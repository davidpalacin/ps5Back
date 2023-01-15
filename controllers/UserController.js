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

// delete user by name
UserController.delete = async (req, res) => {
  try {
    const deletedOne = await User.deleteOne({ name: req.params.name });
    res.json({
      message: `${req.params.name} DELETED`,
      data: deletedOne,
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

// delete user by id
UserController.delete = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.json({
      message: `User ${req.params.id} DELETED`,
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
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

// Marcar película como vista
UserController.checkAsViewed = async (req, res) => {
  try {
    // Buscar el documento del usuario
    const user = await User.findOne({ _id: req.params.id });
    // Encontrar la película dentro del array de películas del usuario
    const movieIndex = user.movies.findIndex(
      (movie) => movie._id == req.params.movieId
    );
    // Actualizar el estado "viewed" de la película a true
    user.movies[movieIndex].viewed = req.body.viewed;
    // Guardar los cambios en la base de datos
    await user.save();
    // Enviar una respuesta exitosa al cliente
    res.json({ message: "View state updated", data: user });
  } catch (error) {
    // Enviar una respuesta de error al cliente
    res.status(500).json({ message: error.message });
  }
};

export default UserController;
