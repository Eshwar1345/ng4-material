import { Component } from '@angular/core';
import { Http } from '@angular/http';

//import { MaterialProgress } from './theme/material.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    document.querySelector('#progressbar1').addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(44);
    });
    document.querySelector('#progressbar3').addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(33);
      this.MaterialProgress.setBuffer(87);
    });
  }

}
