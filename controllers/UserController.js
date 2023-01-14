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
    await User.deleteOne({name: req.params.name});
    res.json({message: `${req.params.name} DELETED`});
  } catch (error) {
    res.status(500).send("internal server error");
  }
}

UserController.update = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}


export default UserController;