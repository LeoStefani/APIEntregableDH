const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController")

router.get('/', moviesController.getAll);
router.get('/detail/:id', moviesController.getById);
router.post('/create', moviesController.create);



module.exports = router;