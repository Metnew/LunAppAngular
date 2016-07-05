import {AppController, AppRun, AppConfig} from './app.core/index';
import './routes';
import './components';


angular.module('LunTest', ['AppRoutes', 'AppComponents'])
  .config(AppConfig)
  .run(AppRun)
  .controller('AppController', AppController)
