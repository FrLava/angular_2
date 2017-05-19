import { Component, OnInit } from '@angular/core';
import { SejourService } from '../shared/service/sejour.service';
import { Sejour } from '../shared/domain/sejour';

@Component({
  selector: 'app-carousel-sejours',
  templateUrl: './carousel-sejours.component.html',
  styleUrls: ['./carousel-sejours.component.css']
})
export class CarouselSejoursComponent implements OnInit {

  private sejourService:SejourService = new SejourService()
  private listSejour:Sejour[]
  idCourant:number
  private interval:number

  constructor() { }

  ngOnInit() {
    this.idCourant = 0
    this.listSejour = this.sejourService.findAll()
  }

  startButton() {
    console.log(this.listSejour)
    this.interval=setInterval(function(){

      if(this.idCourant===this.listSejour.length-1) {
        this.idCourant=0;
      }
      ++this.idCourant
      console.log(this.idCourant)

    }.bind(this),3000)
  }

  stopButton () {
    clearInterval(this.interval)
  }

}
