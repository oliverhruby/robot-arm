import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.html',
  styleUrls: ['./scene.css']
})
export class SceneComponent implements OnInit {

  @ViewChild('mainCanvas') mainCanvas: ElementRef;

  ngOnInit() {
    // get the reference to the rendering canvas
    const canvas: HTMLCanvasElement = this.mainCanvas.nativeElement;

    // Load the BABYLON 3D engine
    const engine = new BABYLON.Engine(canvas, true);

    // Now create a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);

    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // This creates a light, aiming 0,1,0 - to the sky.
    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

    // This creates and positions a free camera
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    scene.activeCameras.push(camera);
    camera.attachControl(canvas, false);

    // import object
    BABYLON.SceneLoader.ImportMesh('', 'assets/robot/', 'base.babylon', scene, function (meshes) {
    }, null, function (sc, message, exception) { });
    BABYLON.SceneLoader.ImportMesh('', 'assets/robot/', 'hand.babylon', scene, function (meshes) {
    }, null, function (sc, message, exception) { });

    let i = 0;
    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      sphere.position.x = Math.sin(i);
      sphere.position.y = Math.cos(i);
      scene.render();
      i = i + 0.1;
      if (i > 100) { i = 0; }
    });
  }
}
