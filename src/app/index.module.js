import {
    AppController,
    AppRun,
    AppConfig,
    AppRoutes,
    AppService
} from './app.core';
import './routes';
import './components';

angular.module('LunTest', ['AppRoutes', 'AppComponents', 'ui.router'])
    .config(AppConfig)
    .config(AppRoutes)
    .run(AppRun)
    .controller('AppController', AppController)
    .controller('AppService', AppService)
