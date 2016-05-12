import angular from 'angular';

//Import OUr COntroller(s)
import { MainController } from './controllers/main.controller';

angular
  .module('app', [])
  .controller('MainController', MainController)
  ;
