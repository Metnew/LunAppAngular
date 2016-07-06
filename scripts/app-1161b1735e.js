/******/!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var o=r(1);r(7),r(13),angular.module("LunTest",["AppRoutes","AppComponents","ui.router"]).config(o.AppConfig).config(o.AppRoutes).run(o.AppRun).controller("AppController",o.AppController).controller("AppService",o.AppService)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AppRoutes=t.AppService=t.AppConfig=t.AppController=t.AppRun=void 0;var n=r(2),s=o(n),l=r(3),c=o(l),a=r(4),i=o(a),u=r(5),p=o(u),d=r(6),f=o(d);t.AppRun=c["default"],t.AppController=p["default"],t.AppConfig=s["default"],t.AppService=f["default"],t.AppRoutes=i["default"]},function(e,t){"use strict";function r(e){"ngInject";e.debugEnabled(!0)}r.$inject=["$logProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t){"ngInject";e.debug("runBlock end"),e.debug("Metnew deals with it."),t.finishedSteps=[]}r.$inject=["$log","$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t,r){"ngInject";t.otherwise("/"),r.html5Mode(!0),e.state("basic",{url:"/",templateUrl:"app/routes/UserBasicInfo/UserBasicInfo.html",controller:"UserBasicInfoController",controllerAs:"ctrl",data:{pageTitle:"Basic Info",state:1},resolve:{}}).state("geo",{url:"/geo",templateUrl:"app/routes/UserGeo/UserGeo.html",controller:"UserGeoController",controllerAs:"ctrl",data:{pageTitle:"Geo Info",state:2},resolve:{}}).state("social",{url:"/social",templateUrl:"app/routes/UserSocial/UserSocial.html",controller:"UserSocialController",controllerAs:"ctrl",data:{pageTitle:"Social Info",state:3},resolve:{}}).state("pet",{url:"/pet",templateUrl:"app/routes/UserPet/UserPet.html",controller:"UserPetController",controllerAs:"ctrl",data:{pageTitle:"Pet Info",state:4},resolve:{}}).state("summary",{url:"/summary",templateUrl:"app/routes/UserSummary/UserSummary.html",controller:"UserSummaryController",controllerAs:"ctrl",data:{pageTitle:"Summary",state:5},resolve:{}})}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t,r){"ngInject";var o=r.$on("$stateChangeStart",function(e,t){r.currentState=t.data,r.finishedSteps.push(r.currentState.step)});r.$on("$destroy",o)}r.$inject=["$scope","$log","$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e){"ngInject";return{}}r.$inject=["$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),n=r(9),s=r(10),l=r(11),c=r(12);t["default"]=angular.module("AppRoutes",[]).service("UserSvc",s.UserSvc).controller("UserPetController",o.UserPetController).controller("UserGeoController",n.UserGeoController).controller("UserBasicInfoController",s.UserBasicInfoController).controller("UserSummaryController",l.UserSummaryController).controller("UserSocialController",c.UserSocialController)},function(e,t){"use strict";function r(e,t){"ngInject";var r=this;r.selectStep=function(){},r.finishStep=function(e){UserSvc.saveUser(e)}}r.$inject=["$scope","$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserPetController=r},function(e,t){"use strict";function r(e,t){"ngInject";var r=this;r.finishStep=function(e){UserSvc.saveUser(e)}}r.$inject=["$scope","$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserGeoController=r},function(e,t){"use strict";function r(e,t,r){"ngInject";var o=this;o.finishStep=function(e){r.saveUser(e)}}function o(e){"ngInject";return{setUserValue:function(t,r){e.user[t]=r},saveUser:function(t){angular.merge(e.user,t)},getUser:function(){return e.user}}}r.$inject=["$scope","$rootScope","UserSvc"],o.$inject=["$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserBasicInfoController=r,t.UserSvc=o},function(e,t){"use strict";function r(e,t,r){"ngInject";var o=this;e.user=r.getUser(),o.restartQuiz=function(e){UserSvc.saveUser(null)}}r.$inject=["$scope","$rootScope","AppService"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserSummaryController=r},function(e,t){"use strict";function r(e,t){"ngInject";var r=this;r.finishStep=function(e){UserSvc.saveUser(e)}}r.$inject=["$scope","$rootScope"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserSocialController=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(14);t["default"]=angular.module("AppComponents",[]).controller("HeaderController",o.HeaderController)},function(e,t){"use strict";function r(e){"ngInject";console.log("header is invisible; VOODOO")}r.$inject=["$scope"],Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderController=r}]),angular.module("lunTest").run(["$templateCache",function(e){e.put("app/routes/UserBasicInfo/UserBasicInfo.html",'<div class="flex column column-center"><div class=steps-container><label class="step btn" ng-repeat="step in [1,2,3,4]"><span class=step-content ng-class="{\'finished\': currentState.step < step, \'active\': currentState.step === step}">{{step}}</span></label><span class=step-description>{{currentStep.description}}</span></div><form ng-submit=ctrl.finishStep()><input type=text class=text-input ng-model=user.name ng-pattern="\'w+\'" maxlength=30 ng-class="" placeholder=Name> <input type=email class=text-input ng-model=user.email placeholder=Email></form><div class=action-panel><button class="btn white">Previous</button> <button class="btn white">Next</button></div></div>'),e.put("app/routes/UserPet/UserPet.html",""),e.put("app/routes/UserGeo/UserGeo.html",""),e.put("app/routes/UserSocial/UserSocial.html",""),e.put("app/routes/UserSummary/UserSummary.html",'<div class=card><div class=card-content><span class=card-title>{{user.name}} </span><span class=card-subtitle>{{user.email}}</span><p>{{user.city}}, {{user.country}}</p><div class=card-image><img ng-src={{user.pet}}></div><div class=card-links><a ng-repeat="(key, value) for contact in user.contacts"><span class=text-grey>{{key}}:</span> {{value}}</a></div></div></div><div class=actions-panel><button class="yellow btn" ng-click=ctrl.restartQuiz()>Restart Quiz</button></div>'),e.put("app/components/header/header.html","<header><div class=header-inner><span class=header-title>{{currentRoute.pageTitle}}</span></div></header>")}]);
//# sourceMappingURL=../maps/scripts/app-1161b1735e.js.map
