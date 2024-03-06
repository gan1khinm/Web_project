import { Controller, Get, Post, Render, Res } from "@nestjs/common";
import { AppService } from './app.service';
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('timeToRender')
  sendInterceptorTime() {
    const time = this.appService.getTotalTime();
    this.appService.resetTotalTime()
    return time;
  }

  @Get(':pageName')
  pagesRender(@Res() res: Response) {
    const pageName = res.req.params.pageName;
    return res.render(pageName);
  }
}