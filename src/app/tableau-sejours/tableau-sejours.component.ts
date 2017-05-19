import { Component, OnInit } from '@angular/core';
import { Sejour} from '../shared/domain/sejour';
import { SejourService } from '../shared/service/sejour.service';

@Component({
  selector: 'app-tableau-sejours',
  templateUrl: './tableau-sejours.component.html',
  styleUrls: ['./tableau-sejours.component.css']
})
export class TableauSejoursComponent implements OnInit {

  private listeSejour:Sejour[] = []
  private sejourService:SejourService = new SejourService()

  constructor() {}

  ngOnInit() {
    this.listeSejour=this.sejourService.findAll()
    
  }

}
