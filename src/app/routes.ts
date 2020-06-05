import { Routes } from '@angular/router';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';

export const appRoutes: Routes = [
  { path: 'chat', component: ChatRoomComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' }
];
