import { Component, OnInit } from '@angular/core';
import { Sejour } from '../shared/domain/sejour'

@Component({
  selector: 'app-editer-sejour',
  templateUrl: './editer-sejour.component.html',
  styleUrls: ['./editer-sejour.component.css']
})
export class EditerSejourComponent implements OnInit {

  private idSejour:string
  private nomSejour:string
  private urlImageSejour:string
  private prixSejour:number

  // private idSejour:string
  // private nomSejour:string
  // private urlSejour:string
  // private prixSejour:number

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    let sejour:Sejour = new Sejour (this.idSejour,this.nomSejour,this.urlImageSejour,this.prixSejour)
    console.log(sejour)
  }

}
