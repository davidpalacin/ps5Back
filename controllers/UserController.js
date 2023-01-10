import User from "../models/User.js";

const UserController = {};

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

UserController.create = async (req, res) => {

  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "user",
    };
    const result = User.insertMany(newUser);

    res.json({message: 'User inserted', inserted: newUser});
  } catch (error) {
    res.status(500).json({error: "internal server error"})
  }
  
}

export default UserController;