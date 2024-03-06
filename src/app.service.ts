import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private totalTime: number = 0;

  addTime(time: number): void {
    this.totalTime += time;
  }

  getTotalTime(): number {
    return this.totalTime;
  }

  resetTotalTime(): void {
    this.totalTime = 0;
  }

  getHello(): string {
    return 'Hello World!';
  }
}