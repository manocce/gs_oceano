import { Component, OnInit } from '@angular/core';
import { OceanDataService } from '../ocean-data.service';


@Component({
  selector: 'app-ocean-data',
  templateUrl: './ocean-data.component.html',
  styleUrls: ['./ocean-data.component.css']
})
export class OceanDataComponent implements OnInit {
  filters = {
    regiao: '',
    especie: '',
    statusConservacao: '',
    temperaturaMin: null,
    temperaturaMax: null,
    phMin: null,
    phMax: null,
    nivelPoluicao: ''
  };

  oceanData: OceanData[] = [];
  displayedColumns: string[] = ['regiao', 'temperaturaAgua', 'pH', 'nivelPoluicao', 'especies', 'projetosConservacao'];

  constructor(private oceanDataService: OceanDataService) {}

  ngOnInit() {
    this.fetchData();
  }

  onFilterChange() {
    this.fetchData();
  }

  fetchData() {
    this.oceanDataService.getOceanData(this.filters).subscribe(data => {
      this.oceanData = data;
    });
  }
}
