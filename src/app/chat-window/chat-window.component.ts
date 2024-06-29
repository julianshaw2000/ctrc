import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input() selectedChat: any;
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.selectedChat.messages.push({ text: this.newMessage, sent: true });
      this.newMessage = '';
    }
  }
}
