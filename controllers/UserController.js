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

// Create user
UserController.create = async (req, res) => {
  try {
    // TODO: hashear la contraseña y guardar el hash
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "user",
    };
    await User.insertMany(newUser);

    res.json({message: 'User inserted', inserted: newUser});
  } catch (error) {
    res.status(500).json({error: "internal server error"});
  }
}

// delete user by name
UserController.delete = async (req, res) => {
  try {
    await User.deleteOne({name: req.params.name});
    res.json({message: `${req.params.name} DELETED`});
  } catch (error) {
    res.status(500).send("internal server error");
  }
}

export default UserController;