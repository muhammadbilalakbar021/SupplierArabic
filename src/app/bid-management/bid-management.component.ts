import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-management',
  templateUrl: './bid-management.component.html',
  styleUrls: ['./bid-management.component.css']
})
export class BidManagementComponent implements OnInit {
  public loadmore: boolean = false
  public showVar : string = "Show More"
  constructor() { }

  ngOnInit(): void {
  }

  show() {
    if (this.loadmore) {
      this.showVar = "Hide";
    } else {
      this.showVar = "Show More";
    }
    this.loadmore = !this.loadmore;
    console.log("Show More",this.loadmore);
  }
}
