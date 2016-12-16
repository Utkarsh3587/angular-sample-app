export class HomeService {
  constructor($log, $http) {
    'ngInject';
    
    this.$log = $log;
    this.$http = $http;
  }

  getStats() {
      let url = 'http://search.walkover.com/';
      return this.$http.get(url)
          .then((data) => {
              return data.data;
          }, (error) => {
              let msg = {error: "not able to get"};
              return msg;
          });
  }

  
}
