const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { MongoClient, ServerApiVersion } = require('mongodb');
// Replace the uri string with your connection string.
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecatedErrors: true
  }
});

app.use(async (req, res, next) => {
  try {
    await client.connect();
    const database = client.db('blog2');
    req.posts = await database.collection('posts');
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

/*app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/

app.use(require('cors')({
  origin: 'http://localhost:3000'
}));

app.route('/')
  .get(async function (req, res, next) {
    try {
      const thePosts = await req.posts.find().toArray();
      res.send(thePosts);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    req.body.author = 'Joe Biden';
    req.body.date = new Date();
    try {
      const result = await req.posts.insertOne(req.body);

      if (!result.insertedId) {
        return next(new Error('oops, failed to add post?'));
      }

      res.status(201)
        //.location()
        .send(req.body);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

app.use(function (req, res, next) {
  const error = new Error('No such endpoint');
  error.statusCode = 404;
  next(error);
});

app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500);
  res.send(err.message);
});

app.listen(8080);
