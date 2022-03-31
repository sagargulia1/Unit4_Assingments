const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb:/localhost:27017/library");
};

// section schema and model
const sectionSchema = new mongoose.Schema(
  {
    bookTitle: { type: "string", required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const section = mongoose.model("section", sectionSchema);
// book schema and model

const bookSchema = new mongoose.Schema(
  {
    bookTitle: { type: "string", required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Book = mongoose.model("book", bookSchema);

// author schema and model
const authorSchema = new mongoose.Schema(
  {
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: false },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

// CRUD OPERATION
app.get("/book", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();

    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();

    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//   Author CRUD
app.get("/author", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();

    return res.status(200).send({ author: author });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.post("/author", async (req, res) => {
  try {
    const author = await Author.create(req.body);

    return res.status(201).send(author);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/author/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id)
      .populate({ path: "bookId", select: ["bookTitle"] })
      .lean()
      .exec();

    return res.status(200).send(author); 
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.listen(4000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 4000");
});
