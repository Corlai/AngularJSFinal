(function (angular) {
  'use strict';

  angular
    .module('app', [
      'app.authors',
      'app.users',
      'app.books',
      'ngRoute'
    ]);
})(window.angular);
