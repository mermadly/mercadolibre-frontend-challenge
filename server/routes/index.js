const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();

app.use(cors());

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({
    nombre: "Victoria",
    apellido: "Echavarria",
    edad: 28,
  });
});

module.exports = router;
