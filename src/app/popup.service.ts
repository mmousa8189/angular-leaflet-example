import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  makeCapitalPopup(data: any): string {
    return (
      `` +
      `<div>Capital: ${data.name}</div>` +
      `<div>State: ${data.state}</div>` +
      `<div>Population: ${data.population}</div>`
    );
  }

  makeEgyptShapePopup(data: any): string {
    return (
      '' +
      '<h2>Egypt Properties</h2>' +
      `<table>
  <tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>ADM0ALT1AR</td>
    <td>${data.ADM0ALT1AR}</td>
  </tr>
  <tr>
    <td>ADM0ALT1EN</td>
    <td>${data.ADM0ALT1EN}</td>
  </tr>
  <tr>
    <td>ADM0ALT2AR</td>
    <td>${data.ADM0ALT2AR}</td>
  </tr>
  <tr>
  <td>ADM0ALT2EN</td>
    <td>${data.ADM0ALT2EN}</td>
  </tr>
   <tr>
  <td>ADM0_AR</td>
    <td>${data.ADM0_AR}</td>
  </tr>
   <tr>
  <td>ADM0_EN</td>
    <td>${data.ADM0_EN}</td>
  </tr>
   <tr>
  <td>ADM0_PCODE</td>
    <td>${data.ADM0_PCODE}</td>
  </tr>
   <tr>
  <td>ADM0_REF</td>
    <td>${data.ADM0_REF}</td>
  </tr>
   <tr>
  <td>Shape_Area</td>
    <td>${data.Shape_Area}</td>
  </tr>
   <tr>
  <td>Shape_Leng</td>
    <td>${data.Shape_Leng}</td>
  </tr>
   <tr>
  <td>date</td>
    <td>${data.date}</td>
  </tr>
   <tr>
  <td>validOn</td>
    <td>${data.validOn}</td>
  </tr>
   <tr>
  <td>validTo</td>
    <td>${data.validTo}</td>
  </tr>
</table>`
    );
  }
}
