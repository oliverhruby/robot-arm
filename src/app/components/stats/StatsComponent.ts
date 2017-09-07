import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})
export class StatsComponent {
  parts = [{
    name: 'Arm',
    position: { x: 0, y: 0, z: 0 },
    rotation:  { x: 0, y: 0, z: 0 }
  }, {
    name: 'Body',
    position: { x: 0, y: 0, z: 0 },
    rotation:  { x: 0, y: 0, z: 0 }
  }, {
    name: 'Base',
    position: { x: 0, y: 0, z: 0 },
    rotation:  { x: 0, y: 0, z: 0 }
  }];

}
