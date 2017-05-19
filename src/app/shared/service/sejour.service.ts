import { Injectable } from '@angular/core';
import { Sejour} from '../domain/sejour';

@Injectable()
export class SejourService {
  private listeSejour:Sejour[]=[]
  constructor() { 
    this.listeSejour.push(
      new Sejour('s01','Paris','img/paris.jpg',600),
      new Sejour('s02','New York','img/nyc.jpg',1300),
      new Sejour('s03','Rio de Janeiro','img/rio-de-janeiro.jpg',1400),
      new Sejour('s04','Rome','img/rome.jpg',800),
      new Sejour('s05','Tokyo','img/tokyo.jpg',2000),
      new Sejour('s06','Paris','img/paris.jpg',600)
    )
  }

  findAll():Sejour[] {
    return this.listeSejour
  }

}
