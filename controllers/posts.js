const fs = require('fs');
const User = require("../models/user");
const Post = require("../models/post");
/**********************************************************************
            Request method  :  POST
            Route           :  /api/posts/add
            Description     :  Add post
**************************************************************************/
exports.createPost = (req, res, next) => {

  const title = JSON.parse(JSON.stringify(req.body.title));
  const content = JSON.parse(JSON.stringify(req.body.content));
  const creator_id = JSON.parse(JSON.stringify(req.body.creator_id));

  const newPost = new Post({
    title,
    content,
    creator_id,
    imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  });
  newPost.save()
  .then(post =>{
    User.findOne({ _id: post.creator_id },(err , user)=>{
        if(user){
            user.posts.push(post);
            user.save();
            res.json({ message: 'post created!' })
        }
    })
 })
  .catch(error => {
    res.status(500).json({
      message: "Creating a post failed!"
    });
  });
};

/*************************************************************************
            Request method  :  PUT
            Route           :  api/posts/update/:id
            Description     :  Modify post 
**************************************************************************/
exports.updatePost = (req, res, next) => {
  const postUpdate =
    {
      title: JSON.parse(JSON.stringify(req.body.title)),
      content: JSON.parse(JSON.stringify(req.body.content)),
      creator_id: JSON.parse(JSON.stringify(req.body.creator_id)),
      imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    } ;
  Post.updateOne({ _id: req.params.id }, { ...postUpdate, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

/*************************************************************************
            Request method  :  DELETE
            Route           :  api/posts/delete/:id
            Description     :  Delete post 
**************************************************************************/
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/uploads/')[1];
      fs.unlink(`uploads/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error })); 
};

