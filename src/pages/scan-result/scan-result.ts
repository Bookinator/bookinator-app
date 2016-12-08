import {NavController, NavParams} from "ionic-angular";
import { Component } from '@angular/core';


@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html'
})

export class ScanResultPage{
  public scannedText: string;
    constructor(private _params: NavParams){
    }

    onPageLoaded() {
      this.scannedText = this._params.get("scannedText");
    }
}




