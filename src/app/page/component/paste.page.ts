import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paste',
  standalone: true,
  imports: [],
  template: ` <h1>Clipboard Paste</h1> `,
  styles: ``,
})
export class PastePage implements OnInit {
  constructor() {
    document.onpaste = function (event: any) {
      var items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;
      console.log(JSON.stringify(items));
      var blob = null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          blob = items[i].getAsFile();
        }
      }
      // load image if there is a pasted image
      if (blob !== null) {
        var reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target.result); // data url!
        };
        reader.readAsDataURL(blob);
      }
    };
  }

  ngOnInit() {}
}
