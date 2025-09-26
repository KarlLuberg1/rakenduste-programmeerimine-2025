const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/todos", adminController.readAll);

router.patch("/todos/:id/toggle", adminController.toggleDeleted);

module.exports = router;
