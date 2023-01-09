import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const AuthController = {};

AuthController.register = async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, password } = req.body;

    // PASSWORD CODE VALIDATION
    if (password.length < 6) {
      return res.status(500).json({
        success: false,
        message: "Password is shorter than 6 characters",
      });
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword,
    };

    await User.create(newUser);

    return res.status(200).json({
      success: true,
      message: "Create user successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error?.message || error,
    });
  }
};

AuthController.login = async (req, res) => {
  console.log(req.headers);

  try {
    const { email, password } = req.body;

    //Validación de lo que me llega por body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email: email });

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Bad Credentials",
      });
    }

    const token = jwt.sign(
      { user_id: user._id, user_role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "20m" }
    );

    return res.status(200).json({
      success: true,
      message: `User Logged as ${user.role.toUpperCase()}`,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Login failed",
    });
  }
};

export default AuthController;