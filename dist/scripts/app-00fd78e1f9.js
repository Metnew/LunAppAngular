/******/!function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var s=r(1);r(7),r(8),r(14),angular.module("LunTest",["AppRoutes","AppComponents","ui.router","LocalStorageModule","AppEnums"]).config(s.AppConfig).config(s.AppRoutes).controller("AppController",s.AppController).controller("AppSvc",s.AppService).run(s.AppRun)},function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AppController=t.AppRoutes=t.AppService=t.AppConfig=t.AppRun=void 0;var n=r(2),a=s(n),o=r(3),c=s(o),l=r(4),i=s(l),u=r(5),p=s(u),d=r(6),m=s(d);t.AppRun=c["default"],t.AppConfig=a["default"],t.AppService=m["default"],t.AppRoutes=i["default"],t.AppController=p["default"]},function(e,t){"use strict";function r(e){"ngInject";e.debugEnabled(!0)}r.$inject=["$logProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t,r){"ngInject";e.debug("runBlock end"),e.debug("Metnew deals with it.");var s=r.get("finishedSteps");s&&s.length>0?t.finishedSteps=s:t.finishedSteps=[0];var n=r.get("user");n?t.user=n:t.user={},t.steps={1:"basic",2:"geo",3:"social",4:"pet",5:"summary"}}r.$inject=["$log","$rootScope","localStorageService"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t,r){"ngInject";t.otherwise("/"),r.html5Mode(!0),e.state("basic",{url:"/",templateUrl:"app/routes/UserBasicInfo/UserBasicInfo.html",controller:"UserBasicInfoController",controllerAs:"ctrl",data:{pageTitle:"Basic Info",state:1,description:"1. Insert your name and email"},resolve:{}}).state("geo",{url:"/geo",templateUrl:"app/routes/UserGeo/UserGeo.html",controller:"UserGeoController",controllerAs:"ctrl",data:{pageTitle:"Geo Info",state:2,description:"2. Select your country and city"},resolve:{}}).state("social",{url:"/social",templateUrl:"app/routes/UserSocial/UserSocial.html",controller:"UserSocialController",controllerAs:"ctrl",data:{pageTitle:"Social Info",state:3,description:"3. Select your social networks"},resolve:{}}).state("pet",{url:"/pet",templateUrl:"app/routes/UserPet/UserPet.html",controller:"UserPetController",controllerAs:"ctrl",data:{pageTitle:"Pet Info",state:4,description:"4. Select your favorite cat"},resolve:{}}).state("summary",{url:"/summary",templateUrl:"app/routes/UserSummary/UserSummary.html",controller:"UserSummaryController",controllerAs:"ctrl",data:{pageTitle:"Summary",state:5},resolve:{}})}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(e,t,r,s,n){"ngInject";var a=s.$on("$stateChangeStart",function(e,a){s.currentState=a.data,r.debug(s.finishedSteps),s.finishedSteps=s.finishedSteps||n.get("finishedSteps");var o=s.currentState.state,c=s.finishedSteps.sort(function(e,t){return t-e})[0];r.debug(c);var l=c+1;l===o?(r.debug("Go to step "+l),n.set("finishedSteps",s.finishedSteps)):l>o?r.debug("Go to step "+o):o>l&&(r.debug("Go to step "+o+", but unable, so you go to "+l),e.preventDefault(),t.go(s.steps[l]))});s.$on("$destroy",a)}r.$inject=["$scope","$state","$log","$rootScope","localStorageService"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";function r(){"ngInject";return{}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=angular.module("AppEnums",[]).service("EnumsSvc",["$rootScope","$http",function(e,t){"ngInject";var r="/assets/data";return{getCountries:function(e,s){t.get(r+"/countries.json").then(e,s)},getCities:function(e,s){t.get(r+"/cities.json").then(e,s)}}}])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(9),n=r(10),a=r(11),o=r(12),c=r(13);t["default"]=angular.module("AppRoutes",[]).service("UserSvc",a.UserSvc).controller("UserPetController",s.UserPetController).controller("UserGeoController",n.UserGeoController).controller("UserBasicInfoController",a.UserBasicInfoController).controller("UserSummaryController",o.UserSummaryController).controller("UserSocialController",c.UserSocialController)},function(e,t){"use strict";function r(e,t,r,s,n){"ngInject";var a=this;a.currentState=s.current,a.currentStateNumber=a.currentState.data.state,e.user=r.getUser(),e.user.pet={type:null,url:null},e.haveNoPet=!1,a.isStepFinished=function(e){var r=t.finishedSteps.indexOf(e)>-1;return r},a.isDisabledStep=function(){return!1},a.pets=[{url:"/assets/images/cat1.jpg",type:"cat"},{url:"/assets/images/cat2.jpg",type:"cat"},{url:"/assets/images/cat3.jpg",type:"cat"},{url:"/assets/images/dog4.jpg",type:"dog"}],a.selectPet=function(t){e.haveNoPet=!1,e.user.pet=t},a.isSelected=function(t){return angular.equals(e.user.pet,t)},a.isCat=function(){return"cat"!==e.user.pet.type&&e.user.pet.type?!1:!0},a.goToStep=function(o){n.debug(o);var c=a.currentState.data.state;if(o>c){var l=angular.copy(e.user);if(!l.pet.url||!a.isCat())return void(e.haveNoPet=!0);r.saveUser(l),t.finishedSteps.push(c)}s.go(t.steps[o])}}r.$inject=["$scope","$rootScope","UserSvc","$state","$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserPetController=r},function(e,t){"use strict";function r(e,t,r,s,n,a,o){"ngInject";var c=this;c.currentState=t.current,c.currentStateNumber=c.currentState.data.state,e.user=a.getUser(),c.isStepFinished=function(e){var t=r.finishedSteps.indexOf(e)>-1;return t},c.isDisabledStep=function(t){var s=c.isStepFinished(t),n=r.finishedSteps.sort(function(e,t){return t-e})[0],a=c.currentStateNumber>n?c.currentStateNumber:n,o=e.user.city&&e.user.city.value,l=e.user.country&&e.user.country.value,i=a+1===t&&o&&l;return!(s||i||t===c.currentStateNumber)},n.getCities(function(t){c.cities=t.data,n.getCountries(function(t){c.countries=t.data,e.user.country||(e.user.country={},e.user.city={}),e.user.city&&e.user.city.name&&o(function(){c.selectCountry(e.user.country.value)})})}),c.selectCountry=function(){var t=e.user.country.value;e.user.country.name=c.countries[t],c.avaliableCities=c.getAvaliableCities(t),e.user.city&&e.user.city.country==e.user.country.value||(e.user.city=c.avaliableCities[0]),s.debug(e.user,c.avaliableCities)},c.getAvaliableCities=function(e){var t=[];s.debug(e);for(var r in c.cities){var n=c.cities[r];n.value=Number(r),n.country===Number(e)&&t.push(n)}return t},c.goToStep=function(n){if(s.debug(n),c.currentStateNumber<n){var o=angular.copy(e.user);if(!(o.city&&o.city.value&&o.country&&o.country.value))return;c.isStepFinished(c.currentStateNumber)||r.finishedSteps.push(c.currentStateNumber),a.saveUser(o)}t.go(r.steps[n])}}r.$inject=["$scope","$state","$rootScope","$log","EnumsSvc","UserSvc","$timeout"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserGeoController=r},function(e,t){"use strict";function r(e,t,r,s,n){"ngInject";var a=this;a.currentState=s.current,a.currentStateNumber=a.currentState.data.state,e.user=n.getUser(),a.isStepFinished=function(e){var r=t.finishedSteps.indexOf(e)>-1;return r},a.isDisabledStep=function(r){var s=a.isStepFinished(r),n=e.user.name&&e.user.email,o=t.finishedSteps.sort(function(e,t){return t-e})[0],c=a.currentStateNumber>o?a.currentStateNumber:o,l=c+1==r&&n;return!(s||l||r===a.currentStateNumber)},a.goToStep=function(r){if(r>a.currentStateNumber){var o=angular.copy(e.user);if(!o.email||!o.name)return;a.isStepFinished(a.currentStateNumber)||t.finishedSteps.push(a.currentStateNumber),n.saveUser(o)}s.go(t.steps[r])}}function s(e,t){"ngInject";return{setUserValue:function(t,r){e.user[t]=r},saveUser:function(r){r&&(angular.merge(e.user,r),t.set("user",e.user))},getUser:function(){return e.user},removeUser:function(){e.user={},t.set("user",{})}}}r.$inject=["$scope","$rootScope","$log","$state","UserSvc"],s.$inject=["$rootScope","localStorageService"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserBasicInfoController=r,t.UserSvc=s},function(e,t){"use strict";function r(e,t,r,s,n){"ngInject";var a=this;e.user=s.getUser(),a.convertSocialNetworkKey=function(e){var t=void 0;switch(e){case"fb":t="Facebook";break;case"vk":t="Vkontakte";break;case"ok":t="Odnoklassniki";break;case"tw":t="Twitter"}return t+":"},a.restartQuiz=function(){n.set("finishedSteps",[]),r.finishedSteps=[0],s.removeUser(),t.go("basic")}}r.$inject=["$scope","$state","$rootScope","UserSvc","localStorageService"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserSummaryController=r},function(e,t){"use strict";function r(e,t,r,s,n){"ngInject";var a=this;a.currentState=s.current,a.currentStateNumber=a.currentState.data.state,e.user=r.getUser();var o={tw:"twitter.com",vk:"vk.com",fb:"fb.com",ok:"ok.ru"};if(a.getRegexUrl=function(e){return"http://"+o[e]+"/"},a.isMatchRegexp=function(e){return n.debug(e.match(o[e])),null!==e.match(o[e])},e.user.contacts)for(var c in e.user.contacts){var l=e.user.contacts[c];l===a.getRegexUrl(c)&&(e["userHave"+c.toUpperCase()]=!1,l=null),(null!==l||l!==a.getRegexUrl(c))&&(e["userHave"+c.toUpperCase()]=!0)}else e.user.contacts={tw:null,vk:null,fb:null,ok:null};a.addHttpToUrl=function(t){var r=a.getRegexUrl(t);e.user.contacts[t]&&-1!==e.user.contacts[t].indexOf(r)||(e.user.contacts[t]=r)},e.$watch("user.contacts",function(t){if(t){var r=angular.copy(t);for(var s in t)r[s]&&r[s]!==a.getRegexUrl(s)||delete r[s];e.haveSocialNetworks=!angular.equals({},r)}},!0),a.isStepFinished=function(e){var r=t.finishedSteps.indexOf(e)>-1;return r},a.isDisabledStep=function(r){var s=a.isStepFinished(r),n=t.finishedSteps.sort(function(e,t){return t-e})[0],o=a.currentStateNumber>n?a.currentStateNumber:n,c=o+1===r&&e.haveSocialNetworks;return!(s||c||r==a.currentStateNumber)},a.goToStep=function(o){if(n.debug(o),a.currentStateNumber<o){var c=angular.copy(e.user.contacts);for(var l in c)c[l]&&e["userHave"+l.toUpperCase()]&&c[l]!==a.getRegexUrl(l)||(c[l]=null);if(!e.haveSocialNetworks)return void n.debug("HAVE NO NETWORKS");a.isStepFinished(a.currentStateNumber)||t.finishedSteps.push(a.currentStateNumber),n.debug(c),r.saveUser(c)}s.go(t.steps[o])}}r.$inject=["$scope","$rootScope","UserSvc","$state","$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.UserSocialController=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(15);t["default"]=angular.module("AppComponents",[]).controller("HeaderController",s.HeaderController)},function(e,t){"use strict";function r(e){"ngInject";e.debug("header is optional")}r.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderController=r}]),angular.module("lunTest").run(["$templateCache",function(e){e.put("app/components/header/header.html","<header><div class=header-inner><span class=header-title>{{currentRoute.pageTitle}}</span></div></header>"),e.put("app/routes/UserBasicInfo/UserBasicInfo.html",'<div class="flex md-column sm-column column-center"><div class=steps-container><label class="step btn" ng-repeat="step in [1,2,3,4]" ng-class="{\'finished\': ctrl.isStepFinished(step), \'current\': ctrl.currentState.data.state === step}" ng-disabled=ctrl.isDisabledStep(step) ng-click=ctrl.goToStep(step)><span class=step-content>{{step}}</span></label><span class=step-description>{{ctrl.currentState.data.description}}</span></div><form class="flex align-center md-column sm-column" name=Uform ng-submit="ctrl.goToStep(ctrl.currentState.data.state + 1)" novalidate><div class=input-group><!-- <div class="col-md-9"> --> <input type=text name=name ng-class="{\'error\': Uform.$submitted && Uform.name.$error.required}" class=text-input ng-model=user.name placeholder=Name required><!-- </div>\n            <div class="col-md-3"> --> <span ng-show="Uform.name.$error.required && !Uform.name.$pristine && Uform.name.$touched || (Uform.name.$invalid && Uform.$submitted)" class=input-error>- Name is required!</span> <span ng-show="" class=input-error>- Name is required!</span><!-- </div> --></div><div class=input-group><!-- <div class="col-md-9"> --> <input type=email ng-class="{\'error\': Uform.$submitted && Uform.email.$error.required}" class=text-input name=email ng-model=user.email placeholder=Email required><!-- </div> --><!-- <div class="col-md-3"> --> <span class=input-error ng-show="Uform.email.$invalid && !Uform.email.$pristine && Uform.email.$touched || Uform.$submitted && Uform.email.$invalid">- Email is invalid!</span></div><!-- </div> --><div class="action-panel flex"><button ng-click="ctrl.goToStep(ctrl.currentState.data.state - 1)" disabled class="btn white"><i class="fa fa-chevron-left"></i> <span>Previous</span></button> <button type=submit ng-click="ctrl.goToStep(ctrl.currentState.data.state + 1)" class="btn white"><span>Next</span> <i class="fa fa-chevron-right"></i></button></div></form></div>'),e.put("app/routes/UserGeo/UserGeo.html",'<div class="flex md-column sm-column column-center"><div class=steps-container><label class="step btn" ng-repeat="step in [1,2,3,4]" ng-class="{\'finished\': ctrl.isStepFinished(step), \'current\': ctrl.currentState.data.state === step}" ng-disabled=ctrl.isDisabledStep(step) ng-click=ctrl.goToStep(step)><span class=step-content>{{step}}</span></label><span class=step-description>{{ctrl.currentState.data.description}}</span></div><form class="flex align-center md-column sm-column" name=Uform ng-submit="ctrl.goToStep(ctrl.currentState.data.state + 1)" novalidate><div class=input-group><select class=text-input name=country ng-model=user.country.value ng-options="key as value for (key, value) in ctrl.countries" ng-change=ctrl.selectCountry() ng-class=""><option value>Select your country</option></select><span ng-show="(!Uform.country.$pristine || Uform.$submitted) && !user.country.value" class=input-error>Please, select your country</span></div><div class=input-group><select class=text-input name=city ng-model=user.city.value ng-options="city.value as city.name for city in ctrl.avaliableCities" ng-change="ctrl.selectCity(city, $index)" ng-disabled=!user.country.value><option value>Select your city</option></select><span ng-show="(!Uform.city.$pristine || Uform.$submitted) && !user.city.value" class=input-error>Please, select your city</span></div><div class="action-panel flex column-center"><button ng-click="ctrl.goToStep(ctrl.currentState.data.state - 1)" class="btn white"><i class="fa fa-chevron-left"></i> <span>Previous</span></button> <button type=submit ng-click="ctrl.goToStep(ctrl.currentState.data.state + 1)" class="btn white"><span>Next</span> <i class="fa fa-chevron-right"></i></button></div></form></div>'),e.put("app/routes/UserPet/UserPet.html",'<div class="flex md-column sm-column column-center"><div class="steps-container column-center align-center md-column sm-column flex"><div><label class="step btn" ng-repeat="step in [1,2,3,4]" ng-class="{\'finished\': ctrl.currentState.data.state > step, \'current\': ctrl.currentState.data.state === step}" ng-click=ctrl.goToStep(step)><span class=step-content>{{step}}</span></label></div><span class=step-description>{{ctrl.currentState.data.description}}</span></div><div class="img-container sm-column align-center flex"><div class=img-cell ng-repeat="pet in ctrl.pets" ng-class="{\'selected\': ctrl.isSelected(pet)}" ng-model=user.pet ng-click=ctrl.selectPet(pet) style="background-image: url({{pet.url}})"></div></div><span ng-show=!ctrl.isCat() class=text-red>You chose dog. But you need to choose a cat.</span> <span ng-show="haveNoPet && user.pet.type == null" class=text-red>Please, choose a cat.</span><div class="action-panel flex column-center"><button ng-click="ctrl.goToStep(ctrl.currentState.data.state - 1)" class="btn white"><i class="fa fa-chevron-left"></i> <span>Previous</span></button> <button ng-click="ctrl.goToStep(ctrl.currentState.data.state + 1)" class="btn white"><span>Next</span> <i class="fa fa-chevron-right"></i></button></div></div>'),e.put("app/routes/UserSummary/UserSummary.html",'<div class="flex md-column sm-column column-center"><div class="card flex md-row sm-column"><div class=card-content><span class=card-title>{{user.name}} </span><span class=card-subtitle>{{user.email}}</span><p class=text-grey>{{user.city.name}}, {{user.country.name}}</p><div class=card-links><span ng-repeat="(key, value) in user.contacts" ng-if=value>{{ctrl.convertSocialNetworkKey(key)}} <a ng-href={{value}}>{{value}}</a> </span><span ng-if="user.contacts.length == 0">User haven\'t got social networks :(</span></div></div><div class="card-image flex md-column sm-column align-center"><div class=img-cell style="background-image: url({{user.pet.url}})"></div></div></div><div class="actions-panel flex column-center"><button class="yellow btn" ng-click=ctrl.restartQuiz()>Restart Quiz</button></div></div>'),e.put("app/routes/UserSocial/UserSocial.html",'<div class="flex md-column sm-column column-center"><div class="steps-container column-center align-center md-column sm-column flex"><div><label class="step btn" ng-repeat="step in [1,2,3,4]" ng-class="{\'finished\': ctrl.currentStateNumber > step, \'current\': ctrl.currentStateNumber === step}" ng-disabled="ctrl.currentStateNumber < step" ng-click=ctrl.goToStep(step)><span class=step-content>{{step}}</span></label></div><span class=step-description>{{ctrl.currentState.data.description}}</span></div><form class="md-column sm-column flex" name=Uform ng-submit="ctrl.goToStep(ctrl.currentState.data.state + 1)" novalidate><div class="input-group checkbox-group flex baseline"><div><input type=checkbox ng-model=userHaveFB ng-checked="user.contacts.fb.length > 0"><label>Facebook</label></div><input class=input-fixed ng-keydown="ctrl.addHttpToUrl(\'fb\', $event)" type=url class=text-input name=fb ng-show=userHaveFB ng-model=user.contacts.fb placeholder="Your account link"></div><div class="input-group checkbox-group flex baseline"><div class=sm-row><input type=checkbox ng-model=userHaveVK><label>Vkontakte</label></div><input class=input-fixed ng-keydown="ctrl.addHttpToUrl(\'vk\', $event)" type=url class=text-input name=vk ng-show=userHaveVK ng-model=user.contacts.vk placeholder="Your account link"></div><div class="input-group checkbox-group flex baseline"><div class=sm-row><input type=checkbox ng-model=userHaveTW><label>Twitter</label></div><input class=input-fixed ng-keydown="ctrl.addHttpToUrl(\'tw\', $event)" type=url class=text-input name=tw ng-show=userHaveTW ng-model=user.contacts.tw placeholder="Your account link"></div><div class="input-group checkbox-group flex baseline"><div class=sm-row><input type=checkbox ng-model=userHaveOK><label>Odnoklassniki</label></div><input class=input-fixed ng-keydown="ctrl.addHttpToUrl(\'ok\', $event)" type=url class=text-input name=ok ng-show=userHaveOK ng-model=user.contacts.ok placeholder="Your account link"></div><span ng-show="Uform.$submitted && !haveSocialNetworks" class=text-red>Please, submit at least one social network profile.</span> <span ng-show="Uform.fb.$invalid && ctrl.isMatchUrlRegexp(\'fb\')" class=text-red>Please, check your Facebook profile link.</span> <span ng-show="Uform.vk.$invalid && ctrl.isMatchUrlRegexp(\'vk\')" class=text-red>Please, check your Vkontakte profile link.</span> <span ng-show="Uform.tw.$invalid && ctrl.isMatchUrlRegexp(\'tw\')" class=text-red>Please, check your Twitter profile link.</span> <span ng-show="Uform.ok.$invalid && ctrl.isMatchUrlRegexp(\'ok\')" class=text-red>Please, check your Odnoklassniki profile link.</span><div class="action-panel flex column-center"><button ng-click="ctrl.goToStep(ctrl.currentStateNumber - 1)" class="btn white"><i class="fa fa-chevron-left"></i> <span>Previous</span></button> <button type=submit ng-click="ctrl.goToStep(ctrl.currentStateNumber + 1)" class="btn white"><span>Next</span> <i class="fa fa-chevron-right"></i></button></div></form></div>')}]);
//# sourceMappingURL=../maps/scripts/app-00fd78e1f9.js.map
