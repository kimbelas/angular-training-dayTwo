import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TextService } from './text.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Service Title';
  subjectTitle = new Subject();

  constructor(public textService : TextService) { }

  calculateSalary(){
    
  }
}
