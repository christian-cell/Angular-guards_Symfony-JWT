import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNuevoComponent } from './cliente-nuevo.component';

describe('ClienteNuevoComponent', () => {
  let component: ClienteNuevoComponent;
  let fixture: ComponentFixture<ClienteNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
