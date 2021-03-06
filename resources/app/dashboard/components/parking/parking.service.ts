import { environment } from '../../../../environments/environment';
import { IRequestShortcutConfig } from 'angular';

export class ParkingService {
  static NAME = 'ParkingService';
  private config: IRequestShortcutConfig;
  url = environment.url;

  constructor(
    private $http: ng.IHttpService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer
  ) {
    'ngInject';

    this.config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  getAll() {
    return this.$http
      .get(this.url + '/parking')
      .then((response) => response.data);
  }

  async getAllParking() {
    const response = await this.$http.get(this.url + '/parking');

    return response.data;
  }

  get(id) {
    return this.$http
      .get(this.url + '/parking/' + id)
      .then((response) => response.data);
  }

  rentSpace(data) {
    return this.$http
      .post(
        this.url + '/parking/rent',
        this.$httpParamSerializerJQLike(data),
        this.config
      )
      .then((response) => response.data);
  }

  static factory() {
    return ($http, $httpParamSerializerJQLike) => {
      'ngInject';
      return new ParkingService($http, $httpParamSerializerJQLike);
    };
  }
}
