import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input() id!: string;
  @Input() picture!: string;
  @Input() pictureAlt!: string;
  @Input() title!: string;
}
