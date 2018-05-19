import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkEnrtyComponent } from './mark-enrty.component';

describe('MarkEnrtyComponent', () => {
  let component: MarkEnrtyComponent;
  let fixture: ComponentFixture<MarkEnrtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkEnrtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkEnrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
