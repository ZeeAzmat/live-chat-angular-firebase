import { ChatService } from 'src/app/services/chat.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss']
})

export class ChatFeedComponent implements OnInit, OnChanges {
  chatFeed: any;

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatFeed = this.chatService.getMessages().valueChanges();
  }

  ngOnChanges() {
    this.chatFeed = this.chatService.getMessages().valueChanges();
  }
}
