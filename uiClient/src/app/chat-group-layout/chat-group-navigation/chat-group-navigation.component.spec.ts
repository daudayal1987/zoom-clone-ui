import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupNavigationComponent } from './chat-group-navigation.component';

describe('ChatGroupNavigationComponent', () => {
  let component: ChatGroupNavigationComponent;
  let fixture: ComponentFixture<ChatGroupNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
