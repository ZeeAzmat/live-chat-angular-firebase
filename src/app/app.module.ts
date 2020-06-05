import { appRoutes } from './routes';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { ChatService } from './services/chat.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { ChatFeedComponent } from './chat/chat-feed/chat-feed.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    ChatFeedComponent,
    ChatMessageComponent,
    NavbarComponent,
    UserListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
