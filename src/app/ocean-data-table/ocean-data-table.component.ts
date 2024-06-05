import { Component, OnInit } from '@angular/core';
import { OceanDataService } from './ocean-data.service';

@Component({
  selector: 'app-ocean-data-table',
  templateUrl: './ocean-data-table.component.html',
  styleUrls: ['./ocean-data-table.component.css']
})
export class OceanDataTableComponent implements OnInit {
  oceanData: any[];

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit(): void {
    this.getOceanData();
  }

  getOceanData(): void {
    // Aqui você pode definir os parâmetros de filtro conforme necessário
    const params = {
      // Adicione os parâmetros de filtro conforme necessário
    };

    this.oceanDataService.getOceanData(params).subscribe(
      data => {this.oceanData = this.oceanData;});
  }
}
