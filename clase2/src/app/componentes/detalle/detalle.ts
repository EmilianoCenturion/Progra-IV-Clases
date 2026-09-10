import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  imports: [],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle implements OnInit {
  items =  [
    { id: 1, name: "item 1"},
    { id: 2, name: "item 2"},
    { id: 3, name: "item 3"},
    { id: 4, name: "item 4"},
    { id: 5, name: "item 5"}
  ];

  itemEncontrado = signal<{ id: number, name: string} | null>({ id: 1, name: "item 1"});

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.queryParamMap.subscribe( params => {
      const id = params.get("id");

      this.setearId(id ? +id: 0)
    });

  }
  
  setearId(id: number) {
    const item = this.items.find(i => i.id === id);

    if (item) {
      this.itemEncontrado.set(item);
    } else {
      this.itemEncontrado.set(null);
    }
  }
}
