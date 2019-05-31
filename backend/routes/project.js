"use strict"

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

//Middleware -- metodo que se ejecuta antes de que se ejecute el metodo
var multipart = require('connect-multiparty');
var multipartMiddleware  = multipart({ uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject); 
router.get("/projects", ProjectController.getProjects);
router.delete("/project/:id", ProjectController.deleteProject);
router.post("/upload-image/:id",multipartMiddleware, ProjectController.uploadImage);

module.exports = router;
