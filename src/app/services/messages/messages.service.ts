import { Injectable } from '@angular/core';
import { Message } from '../../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = [];

  constructor() { }

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
