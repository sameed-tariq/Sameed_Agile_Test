const express = require("express");
const bookController = require("../controllers/book-controller");
const router = express.Router();
const bookSchema = require("../validators/bookValidator");
const validate = require("../middlewares/validateMiddleware");

router.get("/", bookController.getAll);
router.post("/create", validate(bookSchema), bookController.createBook);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBookById);
router.delete("/:id", bookController.deleteBookById);

module.exports = router;
