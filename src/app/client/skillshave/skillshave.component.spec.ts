import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillshaveComponent } from './skillshave.component';

describe('SkillshaveComponent', () => {
  let component: SkillshaveComponent;
  let fixture: ComponentFixture<SkillshaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillshaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillshaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
