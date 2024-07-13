import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './view/index/index.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: 'cocktails',
    component: IndexComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
