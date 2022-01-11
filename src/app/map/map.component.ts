import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import { PopupService } from '../popup.service';
import { ShapeService } from '../shape.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  private egyptStates: any;
  private egyptshape: any;

  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    //this.markerService.makeCapitalMarkers(this.map);
    //this.markerService.makeCapitalCircleMarkers(this.map);
    // this.shapeService.getEgyptShape().subscribe((egyptshape) => {
    //   // TODO: handle this to be option layer.
    //   this.egyptshape = egyptshape;
    //   this.initEgyptShapeLayer();
    // });
    // this.shapeService.getEgyptStatesShape().subscribe((egyptStatesShape) => {
    //   // TODO: handle this to be option layer.
    //   this.egyptStates = egyptStatesShape;
    //   this.initEgyptStatesShapeLayer();
    // });

    this.shapeService
      .getEgyptStatesMarakzShape()
      .subscribe((egyptStatesShape) => {
        // TODO: handle this to be option layer.
        this.egyptStates = egyptStatesShape;
        this.initEgyptStatesMarakzShapeLayer();
      });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [30.033333, 31.233334],
      zoom: 6.4,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private initEgyptStatesMarakzShapeLayer() {
    const egyptLayer = L.geoJSON(this.egyptStates, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });

    this.map.addLayer(egyptLayer);
    egyptLayer.bringToBack();
  }
  private initEgyptStatesShapeLayer() {
    const egyptLayer = L.geoJSON(this.egyptStates, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });

    this.map.addLayer(egyptLayer);
    egyptLayer.bringToBack();
  }
  private initEgyptShapeLayer() {
    const egyptLayer = L.geoJSON(this.egyptshape, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B',
      }),
      // onEachFeature: (feature, layer) =>
      //   layer.on({
      //     mouseover: (e) => this.highlightFeature(e),
      //     mouseout: (e) => this.resetFeature(e),
      //   }),
    });

    this.map.addLayer(egyptLayer);
    egyptLayer.bindPopup(
      this.popupService.makeEgyptShapePopup(
        this.egyptshape.features[0].properties
      )
    );
    egyptLayer.bringToBack();
  }

  private highlightFeature(e: any) {
    const layer = e.target;

    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042',
    });
  }

  private resetFeature(e: any) {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B',
    });
  }
  private onEachFeatureAction(feature: any, layer: any) {
    layer.on({
      mouseover: (e: any) => this.highlightFeature(e),
      mouseout: (e: any) => this.resetFeature(e),
    });
    //layer.bindPopup( this.popupService.makeEgyptStatesShapePopup(feature.properties) );
    layer.bindPopup(
      this.popupService.makeEgyptStatesMarakzShapePopup(feature.properties)
    );
  }
}
