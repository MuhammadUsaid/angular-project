import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goals = [];
  goalText: string = "";
  totalCount: number;
  constructor() { }

  ngOnInit() {
    this.totalCount = this.goals.length
  }
  addItem(){
    if(this.goalText != ""){
      this.goals.push(this.goalText);
      this.goalText = "";
      this.totalCount = this.goals.length;
    }
  }
  removeItem(i){
    this.goals.splice(i,1);
    this.totalCount = this.goals.length;
  }

}
