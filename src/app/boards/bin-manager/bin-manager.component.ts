
import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-bin-manager',
  templateUrl: './bin-manager.component.html',
  styleUrls: ['./bin-manager.component.css']
})
export class BinManagerComponent implements OnInit {

  private socket$: WebSocketSubject<Message>
  image = "";
  show = false;

  constructor() {

    this.socket$ = new WebSocketSubject('ws://192.168.8.138:1337');

    this.socket$
      .subscribe(
        (message: any) => {

          // console.log(`messge received ${JSON.stringify(message)}`)


          this.image = `data:image/JPEG;base64,${message.msg.img}`
          // console.log(this.image)
          this.show = true;
        },
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
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
