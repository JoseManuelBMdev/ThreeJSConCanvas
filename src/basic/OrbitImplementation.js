import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import camera from './Camera.js';
import renderer from './Renderer.js';


const controls = new OrbitControls( camera, renderer.domElement );
	controls.enablePan = true;
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.1;
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.minDistance = 0;   //0
	controls.maxDistance = 500;   //7
    controls.maxTargetRadius = 50;   //5
    controls.target.set( 0, 0.3, 0 );

export default controls