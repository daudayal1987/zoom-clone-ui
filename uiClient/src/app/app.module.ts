import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GroupSelectorComponent } from './group-selector/group-selector.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ChatGroupLayoutComponent } from './chat-group-layout/chat-group-layout.component';
import { ChatGroupSharingAreaComponent } from './chat-group-layout/chat-group-sharing-area/chat-group-sharing-area.component';
import { ChatGroupMembersComponent } from './chat-group-layout/chat-group-members/chat-group-members.component';
import { ChatGroupNavigationComponent } from './chat-group-layout/chat-group-navigation/chat-group-navigation.component';
import { ChatGroupDiscussionComponent } from './chat-group-layout/chat-group-discussion/chat-group-discussion.component';
import { ChatGroupInfoComponent } from './chat-group-layout/chat-group-info/chat-group-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupSelectorComponent,
    TopNavbarComponent,
    ChatGroupLayoutComponent,
    ChatGroupSharingAreaComponent,
    ChatGroupMembersComponent,
    ChatGroupNavigationComponent,
    ChatGroupDiscussionComponent,
    ChatGroupInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
