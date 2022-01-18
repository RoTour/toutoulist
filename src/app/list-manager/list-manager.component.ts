import { Component, OnInit } from '@angular/core';
import { Toutou } from '../models/Toutou';

@Component({
  selector: 'ro-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  data: Toutou[] = [];
  selected?: Toutou = undefined;
  constructor() { }

  ngOnInit(): void {
    this.generate()
  }

  generate(): void {
    this.data = [
      {
        title: "Daniel",
        description: "Amener au parc",
        completed: true,
        creationDate: new Date(),
      },
      {
        title: "Raphy",
        description: "Passer chercher Raphy, le border collie",
        completed: false,
        creationDate: new Date(),
      },
      {
        title: "Daniel",
        description: "Brosser Daniel",
        completed: false,
        creationDate: new Date(),
      }
    ]
  }

  updateToutous($event: Toutou): void {
    const existing = this.data.find((it) => it.creationDate === $event.creationDate);
    if (existing) {
      this.data = this.data.filter((it) => it.creationDate !== $event.creationDate)
    }
    this.data.push($event)
  }

  select(creationDate: Date): void {
    this.selected = this.data.find((it) => it.creationDate === creationDate);
  }

  reset(): void {
    this.selected = undefined;
  }

  toggleComplete(creationDate: Date): void {
    this.data.map((it) => {
      if (it.creationDate === creationDate) {
        it.completed = !it.completed
      }
      return it;
    })
    this.data.sort((it) => {
      return it.completed ? 1 : -1
    })
  }
}
