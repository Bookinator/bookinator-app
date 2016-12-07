import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   constructor(public navCtrl: NavController) {}
  //  ionViewLoaded() {
  //    this.login = this.formBuilder.group({
  //      username: ['', Validators.required],
  //      password: ['', Validators.required],
  //    });
  //  }
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
