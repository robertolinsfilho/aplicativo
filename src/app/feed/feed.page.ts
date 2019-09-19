import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:string = "Roberto Lins"
  constructor() { 

  }
public somaDoisNumeros(): void {
    alert("5 + 10");
}
  ngOnInit() {
  this.somaDoisNumeros; 
  
  }

}
