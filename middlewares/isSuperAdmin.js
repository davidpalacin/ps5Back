const isSuperAdmin = (req, res, next) => {
  try {
    if (req.user_role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Dont have user permission",
      });
    } 

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Dont have user permission",
    });
  }
};

export default isSuperAdmin;
