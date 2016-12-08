import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { StorePage } from '../pages/store/store';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BookPage } from '../pages/book/book';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { LoginService } from '../providers/login-service';


@NgModule({
  declarations: [
    MyApp,
    ScanPage,
    StorePage,
    HomePage,
    TabsPage,
    LoginPage,
    BookPage,
    ScanResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanPage,
    StorePage,
    HomePage,
    TabsPage,
    LoginPage,
    BookPage,
    ScanResultPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService
  ]
})
export class AppModule {}
