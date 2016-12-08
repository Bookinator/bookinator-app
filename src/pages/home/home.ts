import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  books = [
    ['1', 'Harry Potter et le prisonnier d\'azkaban'],
    ['2', 'La communauté de l\'anneau'],
    ['3', 'Les deux tours']
  ];
  bookSelected(book: string) {
    console.log("Selected Book :", book);
    this.navCtrl.push(BookPage, {
        id: book[0],
        name: book[1]
    });
  }
}
