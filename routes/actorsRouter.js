const express = require("express");
const router = express.Router();
const actorsController = require("../controllers/actorsController")

router.get('/', actorsController.getAll);
router.get('/detail/:id', actorsController.getById);
router.post('/create', actorsController.create);



module.exports = router;