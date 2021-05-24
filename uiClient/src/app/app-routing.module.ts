import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGroupLayoutComponent } from './chat-group-layout/chat-group-layout.component';
import { GroupSelectorComponent } from './group-selector/group-selector.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'groupselector', pathMatch: 'full'
  },
  {
    path: 'groupselector', component: GroupSelectorComponent
  },
  {
    path: 'groupchat', component: ChatGroupLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
