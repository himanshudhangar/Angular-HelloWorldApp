import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  imgUrl="";
  ngOnInit():void{
    this.title="Hello from Bridgelabz"
    this.imgUrl="/assets/Bridgelabzz.jpg";
  }
}
