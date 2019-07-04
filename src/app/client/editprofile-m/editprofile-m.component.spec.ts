import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileMComponent } from './editprofile-m.component';

describe('EditprofileMComponent', () => {
  let component: EditprofileMComponent;
  let fixture: ComponentFixture<EditprofileMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
