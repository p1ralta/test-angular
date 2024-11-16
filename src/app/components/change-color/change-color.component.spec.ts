import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColorComponent } from './change-color.component';

describe('ChangeColorComponent', () => {
  let component: ChangeColorComponent;
  let fixture: ComponentFixture<ChangeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeColorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#changeTextColor', () => {
    it('set box color by getRandomColor result', () => {
      spyOn(component, 'getRandomColor').and.returnValue('#000000');
      component.changeTextColor();

      expect(component.box.nativeElement.style.color).toBe('rgb(0, 0, 0)');
    });
  });
});
