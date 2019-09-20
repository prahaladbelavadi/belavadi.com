import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'workbench'
  },
  {
    path: 'workbench', component: WorkbenchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
