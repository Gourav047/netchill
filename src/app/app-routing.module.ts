import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { MyListComponent } from './pages/my-list/my-list.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"featured",
    component:FeaturedComponent
  },
  {
    path:"new-releases",
    component:FeaturedComponent
  },
  {
    path:"upcoming",
    component:FeaturedComponent
  },
  {
    path:"myList",
    component:MyListComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
