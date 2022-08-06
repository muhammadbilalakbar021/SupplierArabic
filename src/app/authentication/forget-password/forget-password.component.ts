import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  onNavigateToLogin() {
    this.router.navigate(['/login'])
  }
  
  onNavigateToRegister() {
    this.router.navigate(['/register'])
  }

  onNavigateToPhoneVerification() {
    this.router.navigate(['/phone-verification'])
  }

  addToken(){
    sessionStorage.setItem("login", "true")
  }
}
