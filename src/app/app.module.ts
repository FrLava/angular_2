import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/';

import { SejourService } from './shared/service/sejour.service'
import { AppComponent } from './app.component';
import { CarouselSejoursComponent } from './carousel-sejours/carousel-sejours.component'
import { TableauSejoursComponent } from './tableau-sejours/tableau-sejours.component';
import { EditerSejourComponent } from './editer-sejour/editer-sejour.component';

const appRoutes: Routes = [
{ path: 'sejours', component: TableauSejoursComponent },
{ path: 'carousel', component: CarouselSejoursComponent },
{ path: 'edition', component: EditerSejourComponent },
{ path: '**', redirectTo: 'sejours'}
];

@NgModule({
  declarations: [
    AppComponent,
    TableauSejoursComponent,
    CarouselSejoursComponent,
    EditerSejourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
  ],
  providers: [SejourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
