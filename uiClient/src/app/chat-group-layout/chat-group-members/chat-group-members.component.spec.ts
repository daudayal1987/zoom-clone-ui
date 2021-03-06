import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupMembersComponent } from './chat-group-members.component';

describe('ChatGroupMembersComponent', () => {
  let component: ChatGroupMembersComponent;
  let fixture: ComponentFixture<ChatGroupMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
