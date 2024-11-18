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
    this.box.nativeElement.style.color = 'green';
  }
}
