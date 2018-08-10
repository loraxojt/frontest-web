import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainheaderComponent } from './components/mainheader/mainheader.component';


const routes: Routes = [
  { path: 'index', component: MainheaderComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
