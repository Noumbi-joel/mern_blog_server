import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("")[1];

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.SECRET_JWT);

      req.userId = decodedData?.id;
      req.role = decodedData?.role;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;