import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupLayoutComponent } from './chat-group-layout.component';

describe('ChatGroupLayoutComponent', () => {
  let component: ChatGroupLayoutComponent;
  let fixture: ComponentFixture<ChatGroupLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
