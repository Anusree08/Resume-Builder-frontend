import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    experiencedetails={ 
        employer:'',
        jobtitle:'',
        city:'',
        state:'',
        startdate:'',
        enddate:''
    }
    experiencedata={ 
        employer: String,
        jobtitle: String,
        city: String,
        state: String,
        startdate: String,
        enddate: String
    };

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.experiencedata = JSON.parse(localStorage.getItem('experience'));
  }
  experienceform= this.fb.group(
    { 
        employer:['',[Validators.required]],
        jobtitle:['',[Validators.required]],
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        startdate:['',[Validators.required]],
        enddate:['',[Validators.required]]
    }
  );

  addexperience(){
        localStorage.setItem('experience',JSON.stringify(this.experiencedetails));
        document.getElementById('saved').innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
  }

}
