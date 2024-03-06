import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AppService } from "./app.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly appService: AppService) {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => {
                    const elapsedTime = Date.now() - now;
                    this.appService.addTime(elapsedTime);
                    console.log(elapsedTime);
                })
            );
    }
}