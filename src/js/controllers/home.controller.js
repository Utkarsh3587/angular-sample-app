export class HomeController {
    constructor($log, homeService, $http, toastr) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
        this.toastr = toastr;
        this.query = undefined;
        this.requesting = false;
        this.user = {};
        this.homeService = homeService;
        this.toastr.success('Hello to Home Controller.');
    }

    register() {
        this.getStats();
    }

    getStats() {
        this.homeService.getStats()
            .then((data) => {
                //logic
                console.log(data);
            }, (error) => {
                this.$log.error("Error while requesting", error);
            });
    }

}
