import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TotalsComponent } from './components/totals/totals.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: 'details', component: DetailsComponent},
  {path: 'totals', component: TotalsComponent},
  {path: 'summary', component: SummaryComponent},
  {path: '', redirectTo: '/details', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
