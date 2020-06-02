import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css'],
})
export class SectionContainerComponent implements OnInit {
  @Input() title = 'Title goes here';
  @Input() about = 'about goes here';
  @Input() imageSrc = '';
  @Input() switch = false;
  @Input() isLast = false;

  offSetClass = {
    'large-offset-2': this.switch,
    'large-offset-1': !this.switch,
    'large-4': this.switch,
    'large-5': !this.switch,
  };

  constructor() {}

  ngOnInit(): void {}
}
