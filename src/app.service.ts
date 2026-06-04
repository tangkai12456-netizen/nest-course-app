import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'phupa is noob!';
  }

  getName(): string{
    return 'Tang';
  }
  getLove(): string{
    return 'some one';
}
  getJson(): object {
    return{
    name: 'arigato',
    surname:'koniciwa',
    age : 67
    };
    }
    getJson2() {
  return {
    name: 'papaya',
    lastname: 'salad',
    age: 67,
  };
}
}
