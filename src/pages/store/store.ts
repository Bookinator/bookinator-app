import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Store page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StorePage Page');
  }

}
