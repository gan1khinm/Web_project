import {MiddlewareConsumer, Module} from '@nestjs/common';
import {authController} from "./auth.controller";
import {GoogleStrategy} from "./utils/GoogleStrategy";
import {AuthService} from "./auth.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {SessionSerializer} from "./utils/Serializer";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [authController],
    providers: [
        GoogleStrategy,
        SessionSerializer,
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService,
        }
    ],
})
export class AuthModule {

}
