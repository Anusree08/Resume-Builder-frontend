import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import { LoginService } from '../service/login.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    hide = true;
    user={
        username:'', 
        email:'',
        password:''
    }

  constructor(private fb : FormBuilder,private signup: LoginService) { }

  ngOnInit(): void {
  }

    signupForm= this.fb.group(
        {   
            username:['',Validators.required],
            email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
            password:['',[Validators.minLength(6),Validators.required]]
        }
    );

    loginUser(){
        this.signup.signupUser(this.user).subscribe(
            res=>{
                console.log(res)
            },
            err => {
                if(err.status == 401){
                    document.getElementById('alert').innerHTML="<div class=alert&#32;alert-danger role=alert>Already SignUp with this Email id.</div>";
                    this.signupForm.reset();
                }
                else{
                    document.getElementById('reset').innerHTML="<div class=successimg><img src=/assets/images/success.png></div> <div class=alert&#32;alert-success role=alert>Succesfully Signed up</div> <div><a class=buttoncont href=/signin>Continue</a></div>";
                }
              }
        )
    }
}
