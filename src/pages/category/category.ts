import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//商品列表

import { ProductlistPage } from '../productlist/productlist';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public ProductlistPage = ProductlistPage;  /*商品列表页面*/
  public leftCate = [];  /*左侧分类数据*/
  public rightCate = [];  /*右侧分类数据*/
  constructor(public navCtrl: NavController, public navParams: NavParams, public config: ConfigProvider, public httpService: HttpServicesProvider) {
    this.getLeftCateData();/*左侧分类*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  //左侧分类的方法

  getLeftCateData() {
    var api = 'api/pcate'
    this.httpService.requestData(api, (data) => {
      console.log(data);
      this.leftCate = data.result;
      //调用右侧分类
      this.getRightCateData(this.leftCate[0]['_id']);
    })
  }

  getRightCateData(pid) {
    var api = 'api/pcate?pid=' + pid;
    this.httpService.requestData(api, (data) => {
      console.log(data);
      this.rightCate = data.result;
    })
  }

}
