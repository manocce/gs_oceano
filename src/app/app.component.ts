import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanDataComponent } from "./ocean-data/ocean-data.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OceanDataComponent]
})
export class AppComponent {
  title = 'gs_oceano-2024';
}
