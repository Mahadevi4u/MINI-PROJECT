import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  
  submitted1 = false;
  onSubmit(){
    this.submitted1 = true;
  }

}
