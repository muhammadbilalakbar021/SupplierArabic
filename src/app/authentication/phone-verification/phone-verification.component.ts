import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  onNavigateToLogin() {
    this.router.navigate(['/login'])
  }
  
  onNavigateToRegister() {
    this.router.navigate(['/register'])
  }

  onNavigateToHome() {
    this.router.navigate([''])
  }

  addToken(){
    sessionStorage.setItem("login", "true")
  }

}
