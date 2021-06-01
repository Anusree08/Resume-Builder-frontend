import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

    usersign={
        id: String,
        username: String,
        email: String,
        password: String
    };

  constructor(private user : UserdataService) { 
}

  ngOnInit(): void {
    this.usersign = JSON.parse(localStorage.getItem('data'));
    this.user.checkuser(this.usersign).subscribe(res=>{
        localStorage.setItem('personal',JSON.stringify(res.userr.personal))  
        localStorage.setItem('education',JSON.stringify(res.userr.education))  
        localStorage.setItem('experience',JSON.stringify(res.userr.experience))  
        localStorage.setItem('skill',JSON.stringify(res.userr.skill)) 
        localStorage.setItem('value',JSON.stringify(res.userr._id)) 
        document.getElementById('userhome').innerHTML="<div class=col-md-3> <a class=nav-link href=/selecttemplate> <img src=/assets/images/file.png > </a> <h1>Previously saved Resume</h1> </div> <div class=col-md-3> <a class=nav-link href=/personalinfo onclick=deleteuser()> <img src=/assets/images/newfile.png > </a> <h1>new resume</h1> </div>"     
    },
    err=>{
        if(err.status == 401){
            console.log('welcome')
        }
    });
    }

    deletedata(){
        localStorage.removeItem("data");
        localStorage.removeItem("token");
        localStorage.removeItem("personal");
        localStorage.removeItem("experience");
        localStorage.removeItem("education");
        localStorage.removeItem("skill");
        localStorage.removeItem("login");
        localStorage.removeItem("value");
    }
}
