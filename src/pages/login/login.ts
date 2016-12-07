import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
            username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])]
        });
  }
  save(){
    this.submitAttempt = true;

    if(!this.loginForm.valid){
        console.log("error!")
    }
    else {
        console.log("success!")
        this.navCtrl.setRoot(TabsPage);
    }
  }

  login = {}
  logForm(){
    var username = this.login[username];
    var password = this.login[password];
    console.log(this.login);
    if (!username && !password) {
      this.navCtrl.setRoot(TabsPage);
    }
  }
}
