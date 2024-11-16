import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrl: './change-color.component.less',
})
export class ChangeColorComponent {
  @ViewChild('box') box: any;

  public changeTextColor(): void {
    this.box.nativeElement.style.color = this.getRandomColor();
  }

  public getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  }
}
