import { runBlock } from './index.run';
import { NavbarDirective } from './directives/navbar.directive';
import { HomeService } from './services/home.service';
import { HomeController } from './controllers/home.controller';
import { ImageController } from './controllers/image.controller';

angular.module('dummy-app', ['ngAnimate', 'toastr'])
  .service('homeService', HomeService)
  .directive('mainNavbar', NavbarDirective)
  .controller('homeController', HomeController)
  .controller('imageController', ImageController)
  .run(runBlock);
