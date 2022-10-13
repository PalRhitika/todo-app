var express = require('express');
var router = express.Router();
const Todos=require('../models/Todos');
// var todos=require('../resource/todo');;
// console.log(todos);


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Rhitika' });// dictionary
// });

/* GET home page. */
router.get('/',async function(req, res, next) {
  const todos =await Todos.find();

  res.render('home', {todosList: todos })
 
});

router.get('/add-todo', function(req, res, next) {
  res.render('addTodo', {title: "Add To-Do"});
});

router.post('/save-todo', async function(req,res,next){
  // const todo=new Todos({
  //   title:req.body.title,
  //   description: req.body.description
  // });
  // await todo.save();


  //Todos.insertMany({ title : req.body.title, description: req.body.description}).then(()=> console.log("todo inserted successfully")).catch((e)=>console.log('error',e));
  await Todos.insertMany({ title : req.body.title, description: req.body.description});
  
  // todos.push({...req.body, _id:`00${todos.length}`});
  res.redirect('/');

});
router.get('/delete-todo/:id',async function(req,res,next){

  await Todos.remove({_id: req.params.id});
  // console.log(req.params._id)
  // const index=todos.findIndex(todo =>todo._id === req.params.id);
  // todos.splice(index,1);
  res.redirect('/');

});

router.get('/update-todo/:id', async function(req, res, next) {
  const totodo= await Todos.findOne({_id: req.params.id}); 
  // const totodo=todos.find(todo =>todo._id === req.params.id);
  res.render('updateTodo', {todo :totodo});
});

router.post('/edit-todo/:id',async function(req,res,next){
  // console.log(req.body);
  // console.log(req.params);
  // const index= todos.findIndex(todo => todo._id === req.params.id);
  // todos.splice(index,1,{...req.body, _id:req.params.id});

  await Todos.updateOne({_id: req.params.id}, {$set:{title:req.body.title, description:req.body.description}});
  res.redirect('/');

});

module.exports = router;
