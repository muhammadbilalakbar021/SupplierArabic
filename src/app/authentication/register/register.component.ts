import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigate() {
    this.router.navigate(['/login'])
  }

  onNavigateToHome() {
    this.router.navigate([''])
  }

  addToken(){
    localStorage.setItem("login", "true")
  }
}
