// verify if user role is admin

const verifyAdmin = async (req, res, next) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(401).json({ msg: "You are not authorized" });
  }
  next();
};

export default verifyAdmin;