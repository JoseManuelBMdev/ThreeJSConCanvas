import * as THREE from 'three';
import camera from './Camera.js';

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") ,antialias:true, alpha:true, precision:'mediump'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );

//renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
console.log(renderer);

 export function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width ||canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, true);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      // set render target sizes here
    }
}

export default renderer
