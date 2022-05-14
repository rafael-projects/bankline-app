import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';


const routes: Routes = [
  { path: 'movimentacao-list', component : MovimentacaoListComponent },
  { path: 'movimentacao-new', component : MovimentacaoNewComponent},
  { path: '', redirectTo : 'movimentacao', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
