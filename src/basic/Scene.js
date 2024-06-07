import * as THREE from 'three';

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff)
scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
console.log(scene);

export default scene