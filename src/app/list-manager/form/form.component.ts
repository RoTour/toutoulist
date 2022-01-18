import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Toutou } from 'src/app/models/Toutou';

@Component({
  selector: 'ro-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  title: string = "";
  desc: string = "";

  inputsAreValid = false;

  @Input()
  selected?: Toutou;
  @Output()
  updated = new EventEmitter<Toutou>();

  @Output()
  deleted = new EventEmitter<Toutou>();

  @Output()
  reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selected) {
      this.title = this.selected.title;
      this.desc = this.selected.description;
      this.validator()
    }
  }

  validator(): boolean {
    const res = this.title.length >= 3 && this.desc.length >= 3
    this.inputsAreValid = res;
    return res;
  }

  submit(): void {
    if (this.validator()) {
      this.updated.emit({
        title: this.title,
        description: this.desc,
        completed: false,
        creationDate: this.selected?.creationDate ?? new Date(),
      });
      this.onReset();
    }
  }

  delete(): void {
    if (this.selected) {
      if (confirm("Are you sure ?")) {
        this.deleted.emit(this.selected)
      }
    }
  }

  onReset(): void {
    this.title = "";
    this.desc = "";
    this.selected = undefined;
    this.validator();
    this.reset.emit();
  }
}
