import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss']
})
export class MenuTitleComponent implements OnInit {
  ngOnInit(): void {
    this.showteste();
  }
  @Input() title!: string;

  showteste() {
    console.log('aki');
  }
}
