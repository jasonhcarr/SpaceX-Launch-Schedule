import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFooterComponent } from './launch-footer.component';

describe('LaunchFooterComponent', () => {
  let component: LaunchFooterComponent;
  let fixture: ComponentFixture<LaunchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
