import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { FactorialComponent } from './factorial/factorial.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'factorial', component: FactorialComponent, pathMatch: 'full' },
  { path: 'alphabet', component: AlphabetComponent },
  { path: '',   redirectTo: '/factorial', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
