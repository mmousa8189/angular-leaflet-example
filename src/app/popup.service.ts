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
  makePopup(data: any): string {
    return (
      `` +
      `<div>ADM0_EN: ${data.ADM0_EN}</div>` +
      `<div>ADM0_AR: ${data.ADM0_AR}</div>` +
      `<div>ADM0_PCODE: ${data.ADM0_PCODE}</div>` +
      `<div>ADM1_EN: ${data.ADM1_EN}</div>` +
      `<div>ADM1_AR: ${data.ADM1_AR}</div>` +
      `<div>ADM1_PCODE: ${data.ADM1_PCODE}</div>` +
      `<div>ADM2_EN: ${data.ADM2_EN}</div>` +
      `<div>ADM2_AR: ${data.ADM2_AR}</div>` +
      `<div>ADM2_PCODE: ${data.ADM2_PCODE}</div>` +
      `<div>ADM3_EN: ${data.ADM3_EN}</div>` +
      `<div>ADM3_AR: ${data.ADM3_AR}</div>` +
      `<div>ADM3_PCODE: ${data.ADM3_PCODE}</div>`
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

  makeEgyptStatesShapePopup(data: any): string {
    return (
      '' +
      `<h2> ${data.ADM1_EN} - ${data.ADM1_AR}</h2>  ` +
      `<div class="table-wrapper"><table>
  <tr>
    <th>Property</th>
    <th>Value</th>
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
  <td>ADM1ALT1AR</td>
    <td>${data.ADM1ALT1AR}</td>
  </tr>
   <tr>
  <td>ADM1ALT1EN</td>
    <td>${data.ADM1ALT1EN}</td>
  </tr>
   <tr>
  <td>ADM1ALT2AR</td>
    <td>${data.ADM1ALT2AR}</td>
  </tr>
   <tr>
  <td>ADM1ALT2EN</td>
    <td>${data.ADM1ALT2EN}</td>
  </tr>
   <tr>
  <td>ADM1_AR</td>
    <td>${data.ADM1_AR}</td>
  </tr>
   <tr>
  <td>ADM1_EN</td>
    <td>${data.ADM1_EN}</td>
  </tr>
   <tr>
  <td>ADM1_PCODE</td>
    <td>${data.ADM1_PCODE}</td>
  </tr>
   <tr>
  <td>ADM1_REF</td>
    <td>${data.ADM1_REF}</td>
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
</table> </div>`
    );
  }

  makeEgyptStatesMarakzShapePopup(data: any): string {
    return (
      '' +
      `<h2> ${data.ADM2_EN} - ${data.ADM2_AR}</h2>  ` +
      `<div class="table-wrapper"><table>
  <tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>ADM2_EN</td>
    <td>${data.ADM2_EN}</td>
  </tr>
  <tr>
    <td>ADM2_AR</td>
    <td>${data.ADM2_AR}</td>
  </tr>
  <tr>
    <td>ADM2_PCODE</td>
    <td>${data.ADM2_PCODE}</td>
  </tr>
  <tr>
  <td>ADM2_REF</td>
    <td>${data.ADM2_REF}</td>
  </tr>
   <tr>
  <td>ADM2ALT1EN</td>
    <td>${data.ADM2ALT1EN}</td>
  </tr>
   <tr>
  <td>ADM2ALT2EN</td>
    <td>${data.ADM2ALT2EN}</td>
  </tr>
   <tr>
  <td>ADM2ALT1AR</td>
    <td>${data.ADM2ALT1AR}</td>
  </tr>
   <tr>
  <td>ADM2ALT2AR</td>
    <td>${data.ADM2ALT2AR}</td>
  </tr>
   <tr>
  <td>ADM1_EN</td>
    <td>${data.ADM1_EN}</td>
  </tr>
   <tr>
  <td>ADM1_AR</td>
    <td>${data.ADM1_AR}</td>
  </tr>
   <tr>
  <td>ADM1_PCODE</td>
    <td>${data.ADM1_PCODE}</td>
  </tr>
 <td>ADM0_EN</td>
    <td>${data.ADM0_EN}</td>
  </tr>
   <tr>
  <td>ADM0_AR</td>
    <td>${data.ADM0_AR}</td>
  </tr>
   <tr>
  <td>ADM0_PCODE</td>
    <td>${data.ADM0_PCODE}</td>
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
</table> </div>`
    );
  }

  makeEgyptStatesCitiesShapePopup(data: any): string {
    return (
      '' +
      `<h2> ${data.ADM2_EN} - ${data.ADM2_AR}</h2>  ` +
      `<div class="table-wrapper"><table>
  <tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>ADM3_EN</td>
    <td>${data.ADM3_EN}</td>
  </tr>
  <tr>
    <td>ADM3_AR</td>
    <td>${data.ADM3_AR}</td>
  </tr>
  <tr>
    <td>ADM3_PCODE</td>
    <td>${data.ADM3_PCODE}</td>
  </tr>
  <tr>
  <td>ADM3_REF</td>
    <td>${data.ADM3_REF}</td>
  </tr>
   <tr>
  <td>ADM3ALT1EN</td>
    <td>${data.ADM3ALT1EN}</td>
  </tr>
   <tr>
  <td>ADM3ALT2EN</td>
    <td>${data.ADM3ALT2EN}</td>
  </tr>
   <tr>
  <td>ADM3ALT1AR</td>
    <td>${data.ADM3ALT1AR}</td>
  </tr>
   <tr>
  <td>ADM3ALT2AR</td>
    <td>${data.ADM3ALT2AR}</td>
  </tr>
   <tr>
  <td>ADM2_EN</td>
    <td>${data.ADM2_EN}</td>
  </tr>
   <tr>
  <td>ADM2_AR</td>
    <td>${data.ADM2_AR}</td>
  </tr>
   <tr>
  <td>ADM2_PCODE</td>
    <td>${data.ADM2_PCODE}</td>
  </tr>
 <td>ADM1_EN</td>
    <td>${data.ADM1_EN}</td>
  </tr>
   <tr>
  <td>ADM1_AR</td>
    <td>${data.ADM1_AR}</td>
  </tr>
   <tr>
  <td>ADM1_PCODE</td>
    <td>${data.ADM1_PCODE}</td>
  </tr>
    <tr>
  <td>ADM0_EN</td>
    <td>${data.ADM0_EN}</td>
  </tr>
    <tr>
  <td>ADM0_AR</td>
    <td>${data.ADM0_AR}</td>
  </tr>
    <tr>
  <td>ADM0_PCODE</td>
    <td>${data.ADM0_PCODE}</td>
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
</table> </div>`
    );
  }
}
