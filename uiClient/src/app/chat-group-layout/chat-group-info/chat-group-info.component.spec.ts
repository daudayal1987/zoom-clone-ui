import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupInfoComponent } from './chat-group-info.component';

describe('ChatGroupInfoComponent', () => {
  let component: ChatGroupInfoComponent;
  let fixture: ComponentFixture<ChatGroupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
