export class ImageController {

  constructor($log, homeService, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.query = undefined;
    this.requesting = false;
    this.userEmail = undefined;
    this.homeService = homeService;
    this.$log.debug("in home");
    
  }

}
