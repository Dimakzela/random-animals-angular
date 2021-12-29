import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Animal} from "../../model/animal";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('L:' +this.length);
    console.log('E:' +this.currentIndex);
  }

  next() {
    this.data = {animal: this.data?.animals[this.currentIndex + 1], animals: this.data?.animals}
  }

  get currentIndex() {
    return this.data?.animals?.findIndex((x:Animal) => x.id === this.data?.animal?.id);
  }

  get length() {
    return this.data?.animals?.length
  }

  prev() {
    this.data = {animal: this.data?.animals[this.currentIndex - 1], animals: this.data?.animals}
  }

}
