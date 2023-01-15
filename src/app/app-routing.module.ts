import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
    // children: [{
    //     path: 'about',
    //     component: AboutComponent,
    //     // data: {
    //     //   breadcrumb: {
    //     //     label: 'About us',
    //     //     // parent: ''
    //     //   }
    //     // }
    //   },{
    //     path: 'contact',
    //     component: ContactComponent,
    //     data: {
    //       breadcrumb: {
    //         label: 'Contact us',
    //         parent: ''
    //       }
    //     }
    //   },{
    //     path: 'services',
    //     component: ServicesComponent,
    //     data: {
    //       breadcrumb: {
    //         label: 'Services',
    //         parent: ''
    //       }
    //     }
    //   },{
    //     path: 'home',
    //     component: HomeComponent,
    //     data: {
    //       breadcrumb: {
    //         label: 'Home',
    //         parent: ''
    //       }
    //     }
    //   }]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }