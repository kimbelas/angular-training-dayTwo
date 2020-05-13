import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '';
  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.title = this.globalService.textService.appUpperCase(this.globalService.appTitle);
    
    this.globalService.subjectTitle.subscribe(
      (title:string)=> {
        this.title = title;
    });
  }

}
