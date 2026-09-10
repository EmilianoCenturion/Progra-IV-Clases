import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  private route = inject(ActivatedRoute);
  dark = false;

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.dark = params['dark'] === 'true';
    });
  }
}
