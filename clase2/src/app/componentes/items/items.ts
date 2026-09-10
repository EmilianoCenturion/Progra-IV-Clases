import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
})

export class Items {
  items =  [
    { id: 1, name: "item 1"},
    { id: 2, name: "item 2"},
    { id: 3, name: "item 3"},
    { id: 4, name: "item 4"},
    { id: 5, name: "item 5"}
  ];

  navegar(id: number) {
    
  }
}
