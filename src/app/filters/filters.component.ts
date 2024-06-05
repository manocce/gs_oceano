import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  selectedRegion: string = '';
  selectedSpecies: string = '';
  selectedConservationStatus: string = '';
  minWaterTemperature: number;
  maxWaterTemperature: number;
  minPh: number;
  maxPh: number;
  selectedPollutionLevel: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  applyFilters(): void {
    const filters = {
      region: this.selectedRegion,
      species: this.selectedSpecies,
      conservationStatus: this.selectedConservationStatus,
      minWaterTemperature: this.minWaterTemperature,
      maxWaterTemperature: this.maxWaterTemperature,
      minPh: this.minPh,
      maxPh: this.maxPh,
      pollutionLevel: this.selectedPollutionLevel
    };

    this.filterChange.emit(filters);
  }
}

