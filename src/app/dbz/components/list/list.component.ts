import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();
   

  @Input()
  public characterList : Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 10
    }

  ];


  onDeleteCharacter(id : string) : void {
    //TODO_ Emitir el ID del personaje

    this.onDelete.emit(id);

    console.log({id})
  }

}
