import { MyPage } from './../my/my';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoMyPage(){
   this.navCtrl.push(MyPage);
  }



}
