import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-teste-filho',
  templateUrl: './page-teste-filho.component.html',
  styleUrls: ['./page-teste-filho.component.css']
})
export class PageTesteFilhoComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  }
}
