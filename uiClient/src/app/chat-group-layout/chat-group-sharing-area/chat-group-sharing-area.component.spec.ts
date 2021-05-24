import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupSharingAreaComponent } from './chat-group-sharing-area.component';

describe('ChatGroupSharingAreaComponent', () => {
  let component: ChatGroupSharingAreaComponent;
  let fixture: ComponentFixture<ChatGroupSharingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupSharingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupSharingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
