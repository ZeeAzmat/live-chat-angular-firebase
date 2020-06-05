import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})

export class ChatMessageComponent implements OnInit {
  isOwnMessage: boolean;

  @Input() chatMessage: ChatMessage;

  constructor() {}

  ngOnInit() {
    this.isOwnMessage = this.chatMessage.email === 'zeeshan.azmat@emergitel.com';
    // this.isOwnMessage = this.chatMessage.email === 'nextgenportal@emergitel.com';
  }
}
