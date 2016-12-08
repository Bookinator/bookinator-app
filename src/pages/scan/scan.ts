import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';



@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(public navCtrl: NavController) {
  	
  }

  scan(){
  	BarcodeScanner.scan().then((barcodeData) => {
		console.log("YES WE CAN");
	}, (err) => {
	    console.log("NOT POSSIBLE");
	});
  }
}