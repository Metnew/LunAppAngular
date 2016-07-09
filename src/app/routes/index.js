import {UserBasicInfoController} from './UserBasicInfo/UserBasicInfo.controller';
import {UserSvc} from './UserBasicInfo/UserBasicInfo.service';
import {UserPetController} from './UserPet/UserPet.controller';
import {UserGeoController} from './UserGeo/UserGeo.controller';
import {UserSummaryController} from './UserSummary/UserSummary.controller';
import {UserSocialController} from './UserSocial/UserSocial.controller';

export default angular.module('AppRoutes', [])
    .service('UserSvc', UserSvc)
    .controller('UserPetController', UserPetController)
    .controller('UserGeoController', UserGeoController)
    .controller('UserBasicInfoController', UserBasicInfoController)
    .controller('UserSummaryController', UserSummaryController)
    .controller('UserSocialController', UserSocialController)
