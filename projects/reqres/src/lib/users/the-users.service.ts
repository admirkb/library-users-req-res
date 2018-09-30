import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheUsersService {

  constructor() { }

  public alertMe(name: string) {
    alert(name);
  }
}
