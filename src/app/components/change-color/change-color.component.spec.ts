import { TestBed } from '@angular/core/testing';
import { ChangeColorComponent } from './change-color.component';

describe('ChangeColorComponent', () => {
  let component: ChangeColorComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeColorComponent],
    });
    component = TestBed.inject(ChangeColorComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('#changeTextColor', () => {
    it('set box color to green', () => {
      component.box = { nativeElement: { style: { color: 'black' } } };
      component.changeTextColor();

      expect(component.box.nativeElement.style.color).toBe('green');
    });
  });
});
