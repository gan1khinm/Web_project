import {Controller, Get, Req, Res, UseGuards} from "@nestjs/common";
import {GoogleAuthGuard} from "./utils/Guards";
import {ApiOAuth2} from "@nestjs/swagger";
import { Request } from 'express';

@Controller('auth')
export class authController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return{msg: 'Google authentication'};
    }

    // @Get('google/redirect')
    // @ApiOAuth2(["google:read"])
    // @UseGuards(GoogleAuthGuard)
    // async handleRedirect(@Req() req: Request, @Res() res) {
    //     res.redirect("http://localhost:3000/index")
    // }

    @Get('google/redirect')
    @ApiOAuth2(["google:read"])
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(@Req() req: Request, @Res() res) {

        res.redirect(`http://localhost:3000/index?email=${req.user["email"]}&login=${req.user["login"]}`);
        //return req.user;
    }


}