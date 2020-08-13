import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PortiflioComponent} from './portiflio/portiflio.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
import {TestComponent} from './test/test.component';
const routes: Routes = [ 
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Portflio', component: PortiflioComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Teast', component:TestComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
