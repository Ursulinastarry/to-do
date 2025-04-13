import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResponsiveCardsComponent } from './responsive-cards/responsive-cards.component';
export const routes: Routes = [
    { path: '', component: HomeComponent},

      { 
        path: 'login', 
        component:LoginComponent 
      },
      { 
        path: 'responsive-cards', 
        component:ResponsiveCardsComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      }
];
