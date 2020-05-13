import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  appSubtitle = 'Happy to serve!';

  constructor() { }

  appUpperCase(text: string): string {
    return text.toUpperCase();
  }
}
