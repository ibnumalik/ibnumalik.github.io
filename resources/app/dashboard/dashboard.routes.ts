import { UrlRouterProvider, StateProvider } from '@uirouter/angularjs';
import { ParkingReceiptComponent } from './components/parking/receipt/receipt.component';
import { ParkingPaymentComponent } from './components/parking/payment/payment.component';
import { SeminarComponent } from './components/seminar/seminar.component';
import { ParkingComponent } from './components/parking/parking.component';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from "./dashboard.component";
import { TranscriptComponent } from './components/transcript/transcript.component';
import { TranscriptPaymentComponent } from './components/transcript/payment/payment.component';

export const routing =
($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      abstract: true,
      component: DashboardComponent.NAME
    })
    .state('app.dashboard.student', {
      url: '/student',
      component: StudentComponent.NAME
    })
    .state('app.dashboard.parking', {
      url: '/parking',
      component: ParkingComponent.NAME
    })
    .state('app.dashboard.parkingPayment', {
      url: '/parking/payment/:parkingId',
      component: ParkingPaymentComponent.NAME,
      resolve: {
        parking: resolveParkingPayment
      }
    })
    .state('app.dashboard.parkingReceipt', {
      url: '/parking/receipt',
      component: ParkingReceiptComponent.NAME,
      params: { receipt: null }
    })
    .state('app.dashboard.seminar', {
      url: '/seminar',
      component: SeminarComponent.NAME
    })
    .state('app.dashboard.transcript', {
      url: '/transcript',
      component: TranscriptComponent.NAME
    })
    .state('app.dashboard.transcriptPayment', {
      url: '/transcript/payment',
      component: TranscriptPaymentComponent.NAME
    });

  $urlRouterProvider.otherwise('/app');
}

function resolveParkingPayment(ParkingService, $transition$) {
  'ngInject';
  return ParkingService.get($transition$.params().parkingId);
}