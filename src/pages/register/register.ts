import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { HttpServicesProvider } from "../../providers/http-services/http-services";

import { StorageProvider } from "../../providers/storage/storage";

import { RegistersignPage } from "../registersign/registersign";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public tel = ""; /*电话号码*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  // 跳转到发送验证码
  goRegistersignPage() {
    console.log(this.tel);
  }
}
