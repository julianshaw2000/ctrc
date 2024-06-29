import { Component } from '@angular/core';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FooterComponent } from '../about/footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ChatListComponent, ChatWindowComponent,
    CommonModule, FooterComponent, MatCardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  selectedChat: any;

  onChatSelected(chat: any) {
    this.selectedChat = chat;
  }

}



