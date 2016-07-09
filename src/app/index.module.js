import {
    AppController,
    AppRun,
    AppConfig,
    AppRoutes,
    AppService
} from './app.core';
import './app.core/app.enums';
import './routes';
import './components';

angular.module('LunTest', ['AppRoutes', 'AppComponents', 'ui.router', 'LocalStorageModule', 'AppEnums'])
    .config(AppConfig)
    .config(AppRoutes)
    .controller('AppController', AppController)
    .service('AppSvc', AppService)
    .run(AppRun)
