import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { OrderbyPipe } from '../../../../projects/ngux/src/lib/pipe/orderby.pipe';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [CommonModule, OrderbyPipe],
  template: `
    <h1>CSS Variables</h1>
    
    <table>
      <tr>
        <th>Variable</th>
        <th>Value</th>
      </tr>
      <tr *ngFor="let variable of varables">
        <td>{{ variable }}</td>
        <td><small>{{ cssValue(variable) }}</small></td>
      </tr>
    </table>
  `,
  styles: ``
})
export class VariablesPage {

  varables: string[];

  el: any = inject(ElementRef);

  cssValue(key: any){
    return getComputedStyle(this.el.nativeElement).getPropertyValue(key);
  }

  constructor() { 
    this.varables = getAllCSSVariableNames()
  }
}

// could pass in an array of specific stylesheets for optimization
function getAllCSSVariableNames(styleSheets = document.styleSheets): string[] {
  var cssVars = [];
  // loop each stylesheet
  for(var i = 0; i < styleSheets.length; i++){
     // loop stylesheet's cssRules
     try{ // try/catch used because 'hasOwnProperty' doesn't work
        for( var j = 0; j < styleSheets[i].cssRules.length; j++){
           try{
              // loop stylesheet's cssRules' style (property names)
              for(var k = 0; k < (styleSheets[i].cssRules[j] as CSSStyleRule).style.length; k++){
                 let name = (styleSheets[i].cssRules[j] as CSSStyleRule).style[k];
                 // test name for css variable signiture and uniqueness
                 if(name.startsWith('--') && cssVars.indexOf(name) == -1){
                    cssVars.push(name);
                 }
              }
           } catch (error) {}
        }
     } catch (error) {}
  }

  cssVars.sort();
  return cssVars;
}
