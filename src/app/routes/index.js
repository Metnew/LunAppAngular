import {UserPet} from './UserPet/UserPet.controller';
import {UserGeo} from './UserGeo/UserGeo.controller';
import {UserBasicInfo} from './UserBasicInfo/UserBasicInfo.controller';
import {UserSummary} from './UserSummary/UserSummary.controller';
import {UserSocial} from './UserSocial/UserSocial.controller';


export default angular.module('AppRoutes', [])
    .controller('UserPet', UserPet)
    .controller('UserGeo', UserGeo)
    .controller('UserBasicInfo', UserBasicInfo)
    .controller('UserSummary', UserSummary)
    .controller('UserSocial', UserSocial)
