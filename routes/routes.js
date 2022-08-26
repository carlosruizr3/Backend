import express from "express";
import { userController } from '../controllers/user.controller.js';
import { aboutController } from "../controllers/about.controller.js";
import { educationController } from "../controllers/education.controller.js";
import { experienceController } from "../controllers/experience.controller.js";
import { validateToken } from "../middlewares/accessToken.middleware.js"


export class Routes {

  routes(app = express.application) {
    app.get('/', (req, res) => {
      res.send(" hola mundo")
    });

    //Users
    app.post('/data,', userController.processData);
    app.route('/register_user').post([validateToken.validateJWT], userController.registro);
    app.route('/find_user').post([validateToken.validateJWT], userController.find);
    app.route('/delete_user').delete([validateToken.validateJWT], userController.delete);
    app.route('/find_user').post([validateToken.validateJWT], userController.find);
    app.route('/update_user').put([validateToken.validateJWT], userController.update);
    app.post('/login', userController.login);
    
    // About
    app.post('/create_about', aboutController.createAbout);
    app.delete('/delete_about/:id', aboutController.deleteAbout);
    app.get('/find_about', aboutController.findAbout);
    app.route('/update_about/:id').put(aboutController.updateAbout);
    app.route('/findone_about/:id').get(aboutController.findOneAbout);

    // Education
    app.post('/create_education', educationController.createEducation);
    app.delete('/delete_education/:id', educationController.deleteEducation);
    app.get('/find_education', educationController.findEducation);
    app.route('/update_education/:id').put(educationController.updateEducation);
    app.route('/findone_education/:id').get(educationController.findOneEducation);

    // Experience
    app.post('/create_experience', experienceController.createExperience);
    app.delete('/delete_experience/:id', experienceController.deleteExperience);
    app.get('/find_experience', experienceController.findExperience);
    app.route('/update_experience/:id').put(experienceController.updateExperience);
    app.route('/findone_experience/:id').get(experienceController.findOneExperience);
  }
}