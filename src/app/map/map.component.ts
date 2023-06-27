import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  private map!: L.Map;
  private egyptStates: any;
  private egyptshape: any;
  layers = [
    { key: 'EG', name: 'Egypt' },
    { key: 'ST', name: 'States' },
    { key: 'CT', name: 'Cities' },
    { key: 'MZ', name: 'Marakz' },
    { key: 'PinsMZ', name: 'Marakz Pins' },
  ];
  form: any;
  private layerToDraw!: L.GeoJSON<any>;
  private currantLayer!: string;
  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService,
    private popupService: PopupService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      layers: [null],
    });

    this.form.controls['layers'].valueChanges.subscribe((f: string) => {
      this.onLayerChange(f);
    });
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  private onLayerChange(value: string) {
    this.currantLayer = value;
    switch (value) {
      case 'EG':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawEgyptShapeLayer();
        }
        break;
      case 'ST':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawEgyptStatesShapeLayer();
        }
        break;
      case 'CT':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawEgyptStatesCitiesShapeLayer();
        }
        break;
      case 'MZ':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawEgyptStatesMarakzShapeLayer();
        }
        break;
      case 'PinsMZ':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawPinsOnMarakz();
        }
        break;

      default:
        break;
    }
  }
  ngAfterViewInit(): void {}

  private drawPinsOnMarakz() {
    this.markerService.makeMarkers(this.map);
  }

  private drawEgyptStatesMarakzShapeLayer() {
    this.shapeService
      .getEgyptStatesMarakzShape()
      .subscribe((egyptStatesShape) => {
        this.egyptStates = egyptStatesShape;
        this.initEgyptStatesMarakzShapeLayer();
      });
  }

  private drawEgyptStatesCitiesShapeLayer() {
    this.shapeService
      .getEgyptStatesCitiesShape()
      .subscribe((egyptStatesShape) => {
        this.egyptStates = egyptStatesShape;
        this.initEgyptStatesCitiesShapeLayer();
      });
  }

  private drawEgyptStatesShapeLayer() {
    this.shapeService.getEgyptStatesShape().subscribe((egyptStatesShape) => {
      this.egyptStates = egyptStatesShape;
      this.initEgyptStatesShapeLayer();
    });
  }

  private drawEgyptShapeLayer() {
    this.shapeService.getEgyptShape().subscribe((egyptshape) => {
      this.egyptshape = egyptshape;
      this.initEgyptShapeLayer();
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
          '<a href="https://www.efinance.com.eg/">e-finance</a>  © Angular LeafLet &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private initEgyptStatesCitiesShapeLayer() {
    this.layerToDraw = L.geoJSON(this.egyptStates, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.5,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });
    this.map?.addLayer(this.layerToDraw);
    this.layerToDraw.bringToBack();
  }

  private initEgyptStatesMarakzShapeLayer() {
    this.layerToDraw = L.geoJSON(this.egyptStates, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.5,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });

    this.map?.addLayer(this.layerToDraw);
    this.layerToDraw.bringToBack();
  }

  private initEgyptStatesShapeLayer() {
    this.layerToDraw = L.geoJSON(this.egyptStates, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.5,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });

    this.map?.addLayer(this.layerToDraw);
    this.layerToDraw.bringToBack();
  }

  private initEgyptShapeLayer() {
    this.layerToDraw = L.geoJSON(this.egyptshape, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.5,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature, layer) =>
        this.onEachFeatureAction(feature, layer),
    });

    this.map?.addLayer(this.layerToDraw);
    this.layerToDraw.bringToBack();
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
      fillOpacity: 0.5,
      fillColor: '#6DB65B',
    });
  }
  private zoomToFeature(e: any) {
    this.map.fitBounds(e.target.getBounds());
  }
  private onEachFeatureAction(feature: any, layer: any) {
    layer.on({
      mouseover: (e: any) => this.highlightFeature(e),
      mouseout: (e: any) => this.resetFeature(e),
      click: (e: any) => this.zoomToFeature(e),
    });
    //
    //

    switch (this.currantLayer) {
      case 'EG':
        {
          layer.bindPopup(
            this.popupService.makeEgyptShapePopup(
              this.egyptshape.features[0].properties
            )
          );
        }
        break;
      case 'ST':
        {
          layer.bindPopup(
            this.popupService.makeEgyptStatesShapePopup(feature.properties)
          );
        }
        break;
      case 'CT':
        {
          layer.bindPopup(
            this.popupService.makeEgyptStatesCitiesShapePopup(
              feature.properties
            )
          );
        }
        break;
      case 'MZ':
        {
          layer.bindPopup(
            this.popupService.makeEgyptStatesMarakzShapePopup(
              feature.properties
            )
          );
        }
        break;
      case 'PinsMZ':
        {
          if (this.layerToDraw) this.map.removeLayer(this.layerToDraw);
          this.drawPinsOnMarakz();
        }
        break;

      default:
        break;
    }
  }
}
