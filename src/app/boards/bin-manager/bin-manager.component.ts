
import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-bin-manager',
  templateUrl: './bin-manager.component.html',
  styleUrls: ['./bin-manager.component.css']
})
export class BinManagerComponent implements OnInit {


  constructor() {


  }
  ngOnInit(): void {

  }



  // 	constructor(private chatService: ChatService) {
  // 		chatService.messages.subscribe((msg: any) => {

  // 	  console.log("Response from websocket: " + JSON.stringify(msg));


  // 		});
  // 	}
  //   ngOnInit(): void {
  //   }
  //   private message = {
  // 		author: 'tutorialedge',
  // 		message: 'this is a test message'
  // 	}

  //   sendMsg() {
  // 		console.log('new message from client to websocket: ', this.message);
  // 		this.chatService.messages.next(this.message);
  // 		this.message.message = '';
  // 	}



}
