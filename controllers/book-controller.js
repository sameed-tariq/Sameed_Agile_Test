const Book = require("../models/book-model");

const getAll = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description, publishedYear, isbn } = req.body;
    const bookExist = await Book.findOne({ title: title });
    if (bookExist) {
      return res.status(400).json({ message: "Book already exist!" });
    } else {
      const book = await Book.create({
        title: title,
        author: author,
        description: description,
        publishedYear: publishedYear,
        isbn: isbn,
      });
      res
        .status(200)
        .json({ data: book, message: "Book created Successfully!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      res.status(200).json({ data: book });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, author, description, publishedYear, isbn } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        title,
        author,
        description,
        publishedYear,
        isbn,
      },
      { new: true }
    );

    if (updatedBook) {
      res
        .status(200)
        .json({ data: updatedBook, message: "Book updated successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (deletedBook) {
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};
