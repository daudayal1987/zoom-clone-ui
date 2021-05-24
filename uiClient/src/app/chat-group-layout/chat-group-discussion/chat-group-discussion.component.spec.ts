import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupDiscussionComponent } from './chat-group-discussion.component';

describe('ChatGroupDiscussionComponent', () => {
  let component: ChatGroupDiscussionComponent;
  let fixture: ComponentFixture<ChatGroupDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
