import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import {Injectable, Logger} from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import {CreateMessageDto} from "./message/create-message.dto";

@Injectable()
@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class AppGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    private logger: Logger = new Logger('AppGateway');

    async handleMessageCreated(message: CreateMessageDto): Promise<void> {
        try {
            this.server.emit('newMessage', { message });
            //console.log(message.content);
        } catch (error) {
            console.error(error);
        }
    }

    afterInit(server: Server) {
        this.logger.log('Init');
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
    }
}