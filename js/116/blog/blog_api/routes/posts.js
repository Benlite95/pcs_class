const express = require('express');
const router = express.Router();

router.use(async (req, res, next) => {
  req.posts = await req.database.collection('posts');
  next();
});

router.route('/')
  .get(async function (req, res, next) {
    try {
      const thePosts = await req.posts.find().toArray();
      res.send(thePosts);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    req.body.author = req.session.username;
    req.body.date = new Date();
    try {
      const result = await req.posts.insertOne(req.body);

      if (!result.insertedId) {
        return next(new Error('oops, failed to add post?'));
      }

      req.socketIo.emit('post', req.body);

      res.status(201)
        //.location()
        .send(req.body);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
