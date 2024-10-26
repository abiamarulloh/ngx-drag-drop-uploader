import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasyDragUploaderComponent } from './ngx-easy-drag-uploader.component';

describe('NgxEasyDragUploaderComponent', () => {
  let component: NgxEasyDragUploaderComponent;
  let fixture: ComponentFixture<NgxEasyDragUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEasyDragUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEasyDragUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
