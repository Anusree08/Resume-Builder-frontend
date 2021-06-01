import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

    personaldetails={ 
        firstname:'',
        lastname:'',
        address:'',
        city:'',
        zipcode:'',
        state:'',
        email:'',
        phone:''
    }
    personaldata={ 
        firstname: String,
        lastname: String,
        address: String,
        city: String,
        zipcode: String,
        state: String,
        email: String,
        phone: String
    };

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.personaldata = JSON.parse(localStorage.getItem('personal'));
  }

  personalform= this.fb.group(
    { 
      firstname:['',[Validators.required]],
        lastname:['',[Validators.required]],
        address:['',[Validators.required]],
        city:['',[Validators.required]],
        zipcode:['',[Validators.required]],
        state:['',[Validators.required]],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        phone:['',[Validators.required,Validators.maxLength(10)]]
    }
  );

  addpersonal(){
        localStorage.setItem('personal',JSON.stringify(this.personaldetails));
        document.getElementById('saved').innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
  }
}
