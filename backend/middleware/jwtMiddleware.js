import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("bearer", "");
  if (!token) {
    return res.status(401).json({ msg: "no token found, auth denied" });
  }
  try {
    const decoded = jwt.verify(token, "you_jwt_secret");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
export default auth