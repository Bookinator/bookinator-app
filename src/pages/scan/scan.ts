import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import { BarcodeScanner } from 'ionic-native';
//Custom imports
import {ScanResultPage} from "../scan-result/scan-result.ts";



@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})


export class ScanPage{

  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;

  constructor(public navCtrl: NavController, navParams: NavParams) {
  
  }

   public scan() {
      this.buttonText = "Loading..";
      this.loading = true;

      BarcodeScanner.scan().then((barcodeData) => {
        if (barcodeData.cancelled) {
          console.log("User cancelled the action!");
          this.buttonText = "Scan";
          this.loading = false;
          return false;
        }
        console.log("Scanned successfully!");
        console.log(barcodeData);
        this.goToResult(barcodeData);
      }, (err) => {
        console.log(err);
      });
    }

  private goToResult(barcodeData) {
    this.navCtrl.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
  }

  private checkPass(data) {
    }

}


