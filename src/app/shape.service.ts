import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  // egy_admbnda_adm0_capmas_itos_20170421.geojson => for egypt boundaries
  private egyptBoundaries =
    '/assets/data/egy_admbnda_adm0_capmas_itos_20170421.geojson';
  // egy_admbnda_adm1_capmas_20170421.geojson => for egypt states boundaries
  private egyptStatesBoundaries =
    '/assets/data/egy_admbnda_adm1_capmas_20170421.geojson';
  // egy_admbnda_adm1_capmas_20170421.geojson => for egypt states maraks boundaries
  private egyptMarakzBoundaries =
    '/assets/data/egy_admbnda_adm2_capmas_20170421.geojson';
  // egy_admbnda_adm1_capmas_20170421.geojson => for egypt states Cities boundaries
  private egyptCitiesBoundaries =
    '/assets/data/egy_admbnda_adm3_capmas_20170421.geojson';
  // egy_admbnda_adm1_capmas_20170421.geojson => for egypt Places Pins
  private egyptPlacesPins =
    '/assets/data/egy_admbndp_admall_capmas_itos_20170421.geojson';
  constructor(private http: HttpClient) {}

  getStateShapes() {
    return this.http.get('/assets/data/gz_2010_us_040_00_5m.json');
  }

  getEgyptShape() {
    return this.http.get(this.egyptBoundaries);
  }
  getEgyptStatesShape() {
    return this.http.get(this.egyptStatesBoundaries);
  }
  getEgyptStatesMarakzShape() {
    return this.http.get(this.egyptMarakzBoundaries);
  }
  getEgyptStatesCitiesShape() {
    return this.http.get(this.egyptCitiesBoundaries);
  }
  getEgyptPlacesPins() {
    return this.http.get(this.egyptPlacesPins);
  }
}
