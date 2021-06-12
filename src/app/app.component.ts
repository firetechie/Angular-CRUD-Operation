import { CommonService } from './common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  allUser : any;
  isEdit = false;
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  }

  constructor(private CommonService:CommonService){
  }
  ngOnInit(){
    this.getLatestUser();
  }
  addUser(formObj: any){
    console.log(formObj);
    this.CommonService.createUser(formObj).subscribe((response) =>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.CommonService.getAllUser().subscribe((response) =>{
      this.allUser = response;
    })
  }
  editUser(user:any){
    this.isEdit = true;
    this.userObj = user;
  }
  deleteUser(user:any){
    this.CommonService.deleteUser(user).subscribe(() =>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.CommonService.updateUser(this.userObj).subscribe(() =>{
      this.getLatestUser();
    })
}
}
