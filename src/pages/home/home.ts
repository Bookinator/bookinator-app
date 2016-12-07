import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  books = [
    'Harry Potter et le prisonnier d\'azkaban',
    'La communauté de l\'anneau',
    'Les deux tours'
  ];
  bookSelected(book: string) {
    console.log("Selected Book", book);
  }
}
