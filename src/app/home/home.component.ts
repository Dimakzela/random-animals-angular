import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../model/animal";
import {MatDialog} from "@angular/material/dialog";
import {AnimalDetailComponent} from "../component/animal-detail/animal-detail.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  animals: Animal[];
  count = 1;

  constructor(private animalService: AnimalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loading = true;
    this.animalService.getAnimals(1).subscribe(res => {
      this.animals = res;
      this.loading = false
    });
  }

  randomize() {
    this.loading = true;
    this.animalService.getAnimals(this.count).subscribe(res => {
      this.animals = res;
      this.loading = false
    });
  }

  openDialog(data: Animal) {
    this.dialog.open(AnimalDetailComponent, {
      data: {
        animal: data,
        animals: this.animals,
      },
    });
  }

  validate() {
    if(this.count > 10) this.count = 10;
  }
}
