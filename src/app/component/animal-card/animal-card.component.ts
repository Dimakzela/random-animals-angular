import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../model/animal";

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal;
  @Output() clickEmitter = new EventEmitter<Animal>();

  constructor() { }

  ngOnInit(): void {
  }

}
