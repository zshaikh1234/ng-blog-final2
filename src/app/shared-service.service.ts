import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
blogTitle = "My Fancy Blog";
baseUrl = "http://localhost:4200/"
constructor() { }

}
