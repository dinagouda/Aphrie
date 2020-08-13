import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortiflioComponent } from './portiflio/portiflio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import {freeApiService} from './freeapi.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortiflioComponent,
    TeamComponent,
    ContactComponent,
    TestComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,
   
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrnVdxWuM-6484Blg81-oqvLtwuwGkVc0'
    })
  ],


    
  
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
