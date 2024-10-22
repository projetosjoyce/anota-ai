import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDigitalComponent } from './agenda-digital.component';

describe('AgendaDigitalComponent', () => {
  let component: AgendaDigitalComponent;
  let fixture: ComponentFixture<AgendaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
