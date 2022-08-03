import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  constructor(private route_: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route_.navigate(['./finance'], { relativeTo: this.route });
  }

  loadComponent(componentName: string) {
    console.log(componentName);
    this.route_.navigate([`${componentName.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }
}
