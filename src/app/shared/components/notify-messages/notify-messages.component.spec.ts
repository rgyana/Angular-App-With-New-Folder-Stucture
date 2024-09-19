import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyMessagesComponent } from './notify-messages.component';

describe('NotifyMessagesComponent', () => {
  let component: NotifyMessagesComponent;
  let fixture: ComponentFixture<NotifyMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifyMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifyMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
