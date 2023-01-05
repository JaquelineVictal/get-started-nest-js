import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBreeds(): string[] {
    return [
      'Abyssinian Cat',
      'American Bobtail Cat',
      'American Curl',
      'Birman',
      'Egyptian Mau',
    ];
  }
}
