import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OceanDataService } from '../ocean-data.service';
import { OceanData } from '../interfaces/interfaces'; // Importar a interface OceanData

@Component({
  selector: 'app-ocean-data',
  templateUrl: './ocean-data.component.html',
  styleUrls: ['./ocean-data.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
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

  oceanData: OceanData[] = []; // Usar a interface OceanData
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
