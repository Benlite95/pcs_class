var express = require('express');
var router = express.Router();

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

//let posts;
router.use(async (req, res, next) => {
  try {
    await client.connect();
    const database = client.db('blog2');
    //const posts = await database.collection('posts').find().toArray();
    //console.log(posts);
    req.posts = await database.collection('posts');
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

/* GET home page. */
router.get('/', async function (req, res, next) {
  //console.log(await req.posts.find().toArray());
  const thePosts = await req.posts.find().toArray();
  res.render('layout', {
    subTitle: 'Welcome to my Blog',
    thePosts,
    partials: {
      content: 'index'
    }
  });
});

router.route('/addPost')
  .get((req, res, next) => {
    res.render('layout', {
      subTitle: 'Add Post',
      partials: {
        content: 'addPost'
      }
    });
  })
  .post(async (req, res, next) => {
    req.body.author = 'Joe Biden';
    req.body.date = new Date();
    try {
      const result = await req.posts.insertOne(req.body);

      console.log(result);
      if (! result.insertedId) {
        return next('oops, failed to add post?');
      }

      res.redirect('/');
    } catch(err) {
      console.error(err);
      next(err);
    }
  });


module.exports = router;
