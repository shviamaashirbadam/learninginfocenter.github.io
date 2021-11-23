import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.css']
})
export class Design1Component implements OnInit {

  constructor() {
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // var geometry = new THREE.BoxGeometry(1, 1, 3);
    // var material = new THREE.MeshBasicMaterial({ color: 0x00fffff });
    // var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 5;

    // var animate = function () {
    //   requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //   renderer.render(scene, camera);
    // };

    // animate();
    var scene = new THREE.Scene();
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(65, aspectRatio, 1, 10000);
camera.position.z = 350;
scene.add(camera);


// ***Objects***

// Nucleus
var bigSphere = new THREE.SphereGeometry(100, 20, 20);
var cover = new THREE.MeshStandardMaterial( { color: 0x2AED0E} );
var nucleus = new THREE.Mesh(bigSphere, cover);
nucleus.overdraw = true;
nucleus.castShadow = true;
scene.add(nucleus);

// Electron 1
var smallSphere = new THREE.SphereGeometry(20, 20, 20);
var electron1 = new THREE.Mesh(smallSphere, cover);
nucleus.add(electron1);
electron1.position.set(-150, 150, 0);

// Electron 2
var electron2 = new THREE.Mesh(smallSphere, cover);
nucleus.add(electron2);
electron2.position.set(150, 150, 0);

//Electron 3
var electron3 = new THREE.Mesh(smallSphere, cover);
nucleus.add(electron3);
electron3.position.set(0, 0, 150);



// ***Lighting***

var bluePoint = new THREE.PointLight(0x0033ff, 1, 300);
bluePoint.position.set( 130, -100, 300 );
scene.add(bluePoint);
scene.add(new THREE.PointLightHelper(bluePoint, 9));

var greenPoint = new THREE.PointLight(0x33ff00, 2, 300);
greenPoint.position.set( -100, 5, 350 );
scene.add(greenPoint);
scene.add(new THREE.PointLightHelper(greenPoint, 9));

var ambLight = new THREE.AmbientLight(0x404040);
scene.add(ambLight);


// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Animation
var clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  var t = clock.getElapsedTime();
  renderer.render(scene, camera);


  // Orbit from bottom right to top left
  electron1.position.x = Math.sin(5 * t) * -150;
  electron1.position.y = Math.sin(5 * t) * 150;
  electron1.position.z = Math.cos(5 * t) * 150;

  //Orbit from top right to bottom left
  electron2.position.x = Math.cos(5 * t) * 150;
  electron2.position.y = Math.cos(5 * t) * 150;
  electron2.position.z = Math.sin(5 * t) * 150;

  var tOffset = 1.5 + clock.getElapsedTime();

  //orbit from the bottom to the top
  electron3.position.x = Math.sin(5 * tOffset) * 0;
  electron3.position.y = Math.sin(5 * tOffset) * 150;
  electron3.position.z = Math.cos(5 * tOffset) * 150;
}

animate();
  }

  ngOnInit(): void {
  }


}
