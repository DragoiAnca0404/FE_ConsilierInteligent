import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardPageComponent } from './student/main-page/components/onboard-page/onboard-page.component';
import { LoginComponent } from './main/login/login.component';
import { UserIsLoginGuard } from './main/guards/user-is-login.guard';
import { AuthGuard } from './main/guards/auth.guard';
import { MapHollandTheoryComponent } from './student/map-Holland/components/map-holland-theory/map-holland-theory.component';
import { InfoPersonalitateComponent } from './student/map-Holland/components/info-personalitate/info-personalitate.component';


const routes: Routes = [   
   {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserIsLoginGuard]
  },
    {
      path: 'app-onboard-page',
      component: OnboardPageComponent,
       canActivate: [AuthGuard],
    },
    {
      path: 'map-Holland',
      component: MapHollandTheoryComponent,
    },
    {
      path: 'Informatii-Test-Holland/:denumire_solutie',
      component: InfoPersonalitateComponent,
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}

 ];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserIsLoginGuard]
})

export class AppRoutingModule { }
export const routingComponents = []