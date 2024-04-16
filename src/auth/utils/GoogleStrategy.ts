import {PassportStrategy} from '@nestjs/passport';
import {Strategy, Profile} from 'passport-google-oauth20';
import {Inject, Injectable} from "@nestjs/common";
import {AuthService} from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService,) {
        super({
            clientID: '1090676733619-n6ou2k6jb2jmbb3ueerccgdm3iuc1ktp.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile){
        console.log(profile);
        const user = await this.authService.validateUser({
            email: profile.emails[0].value,
            login: profile.displayName,
        })
        console.log(user);
        return user || null;
    }
}
