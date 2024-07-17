import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageModel } from 'types/message';

@WebSocketGateway({ cors: true })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  handleDisconnect() {
    console.log('Client disconnected');
  }
  handleConnection() {
    console.log('Client connected');
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() id: string, @ConnectedSocket() client: Socket) {
    console.log(`User ${client} joined ${id}`);
    client.join(id);
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: MessageModel,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(data);
    client.to(data.roomId).emit('message', data.message);
  }
}
