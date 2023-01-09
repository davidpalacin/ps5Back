import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "No authorization token was found",
      });
    }

    const token = authorization.split(" ")[1];

    var decoded = jwt.verify(token, process.env.JWT_SECRET);

    // pasar datos a la siguiente funcion
    req.user_id = decoded.user_id;
    req.user_role = decoded.user_role;

    next();
  } catch (error) {}
};

export default verifyToken;
