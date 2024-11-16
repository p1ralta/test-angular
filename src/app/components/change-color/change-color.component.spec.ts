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
    it('set box color by getRandomColor result', () => {
      jest.spyOn(component, 'getRandomColor').mockReturnValue('#000000');
      component.box = {nativeElement: {style: {color: 'black'}}}
      component.changeTextColor();

      expect(component.box.nativeElement.style.color).toBe('#000000');
    });
  });
});
