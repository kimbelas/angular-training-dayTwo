import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit, AfterContentChecked {

  title;
  subTitle;
  productName;


  constructor(public globalService : GlobalService) { 
    this.title = 'Shopping Cart';
    this.subTitle = '';
  }

  ngOnInit(): void {
    this.title = this.globalService.textService.appUpperCase(this.title);
    this.subTitle = this.globalService.textService.appSubtitle;

    this.globalService.subjectTitle
    .subscribe((productName: any)=>{
      setTimeout(()=>{
        this.productName = productName;
        console.log('productName', productName);
      }, 10);
    });
  }

  ngAfterViewInit(){
    
  }

  changeValue(){
    
  }

  ngAfterContentChecked(){
    
  }

}
