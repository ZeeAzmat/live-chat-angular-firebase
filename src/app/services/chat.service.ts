import { Injectable } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({ providedIn: 'root' })

export class ChatService {
  chatMessage: ChatMessage;
  chatMessages: AngularFireList<any>;

  constructor(
    private afdb: AngularFireDatabase,
  ) {}

  sendMessage(message: string): void {
    const timestamp = this.getTimestamp();
    const username = 'NextGen Portal';
    const email = 'zeeshan.azmat@emergitel.com';
    // const email = 'nextgenportal@emergitel.com';

    this.chatMessages = this.getMessages();

    this.chatMessages.push({
      email,
      message,
      username,
      timestamp,
    });

    console.log('called sendmessage!!!');
  }

  getMessages(): AngularFireList<any> {
    return this.afdb.list('messages');

    // return this.afdb.list('messages', {
    //   query: {
    //     limitToLast: 25,
    //     orderByKey: true,
    //   }
    // });
  }

  private getTimestamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}/${now.getUTCMinutes() + 1}/${now.getUTCSeconds()}`;

    return `${date} : ${time}`;
  }
}
