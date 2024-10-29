const router = require("express").Router();

const Car = require("./carRouter");
const Auth = require("./authRouter");

// const Product = require("./productRouter");
// const Shop = require("./shopRouter");
// const Auth = require("./authRouter");
// const User = require("./userRouter");

router.use("/cars", Car);
router.use("/auth", Auth);

// router.use("/products", Product);
// router.use("/shops", Shop);
// router.use("/auth", Auth);
// router.use("/users", User);

module.exports = router;
