import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatListModule],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  chats = [
    { name: 'Alice', lastMessage: 'Hello!', messages: [{ text: 'Hello!', sent: false }] },
    { name: 'Bob', lastMessage: 'How are you?', messages: [{ text: 'How are you?', sent: false }] }
  ];

  @Output() chatSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectChat(chat: any) {
    this.chatSelected.emit(chat);
  }
}
