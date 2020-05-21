const express = require("express");
const router = express.Router();
const post = require("../models/posts");

//posts route

//get all the post from the database
router.get("/api/v1/books", async (req, res) => {
  try {
    const posts = await post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//create a post
router.post("/api/v1/books", async (req, res) => {
  const posts = new post({
    name: req.body.name,
    isbn: req.body.isbn,
    authors: req.body.authors,
    country: req.body.country,
    number_of_pages: req.body.number_of_pages,
    publisher: req.body.publisher,
    released_date: req.body.released_date,
  });
  try {
    const sbook = await posts.save();
    res.json(sbook);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a post by an id and update
router.get("/post/:Id", async (req, res) => {
  try {
    const savedPost = await post.findById(req.params.Id);
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update method
router.put("/api/v1/books/:Id", async (req, res) => {
  try {
    const UpdatedPost = await post.findByIdAndUpdate(req.params.Id, {
      name: req.body.name,
      isbn: req.body.isbn,
      authors: req.body.authors,
      country: req.body.country,
      number_of_pages: req.body.number_of_pages,
      publisher: req.body.publisher,
      released_date: req.body.released_date,
    });
    res.json(UpdatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete method
router.delete("/api/v1/books/:Id", async (req, res) => {
  try {
    const postDelete = await post.findByIdAndRemove(req.params.Id);
    res.json(postDelete);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
