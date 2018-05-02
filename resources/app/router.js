(function() {
  'use strict';

  /* Router for app */
  angular
    .module('studentPortals')

    .config( function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('parking', {
            url: '/parking',
            templateUrl: 'pages/parking.html',
            controller: 'ParkingCtrl as park',
          })
          .state('seminar', {
            url: '/seminar',
            templateUrl: 'pages/seminar.html'
          })
          .state('transcript', {
            url: '/transcript',
            templateUrl: 'pages/transcript.html',
            controller: 'TranscriptCtrl',
          })
          .state('parking-payment', {
            url: '/payment/:number',
            templateUrl: 'pages/payment.html',
            controller: 'PaymentCtrl as pay'
          })
          .state('transcript-payment', {
            url: '/payment',
            templateUrl: 'pages/payment.html',
            controller: 'PaymentCtrl as pay'
          })
          .state('success', {
            url: '/payment.success',
            templateUrl: 'pages/payment.success.html',
            controller: 'PaymentCtrl as pay'
          });
      });

})();