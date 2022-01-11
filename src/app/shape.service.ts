import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  constructor(private http: HttpClient) {}

  getStateShapes() {
    return this.http.get('/assets/data/gz_2010_us_040_00_5m.json');
  }

  getEgyptShape() {
    // egy_admbnda_adm0_capmas_itos_20170421.geojson => for egypt boundaries
    return this.http.get(
      '/assets/data/egy_admbnda_adm0_capmas_itos_20170421.geojson'
    );
  }
}
