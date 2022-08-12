import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditDialogComponent } from './cliente-edit-dialog.component';

describe('ClienteEditDialogComponent', () => {
  let component: ClienteEditDialogComponent;
  let fixture: ComponentFixture<ClienteEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
