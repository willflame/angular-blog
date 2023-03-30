import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  @Input() id!: string;
  @Input() picture!: string;
  @Input() pictureAlt!: string;
  @Input() title!: string;
  @Input() description!: string;

}
