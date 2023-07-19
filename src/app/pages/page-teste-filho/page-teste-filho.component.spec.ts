import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTesteFilhoComponent } from './page-teste-filho.component';

describe('PageTesteFilhoComponent', () => {
  let component: PageTesteFilhoComponent;
  let fixture: ComponentFixture<PageTesteFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTesteFilhoComponent]
    });
    fixture = TestBed.createComponent(PageTesteFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
