import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
//import light from "./basic/Light.js";
import resize from "./basic/Resize.js";
import loopMachine from "./basic/LoopMachine.js";
import controls from "./basic/OrbitImplementation.js"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { resizeCanvasToDisplaySize } from "./basic/Renderer.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

camera.position.set( 0.26, 0.91 , 6.102) //-0.21,1.59,-4.17
const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
scene.add(light)

const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( 'three/examples/jsm/libs/draco/' );
	dracoLoader.setDecoderConfig( { type: 'js' } );

const loader = new GLTFLoader().setPath('src/models/trajinera/')
loader.setDRACOLoader( dracoLoader );
loader.load('scene.gltf', async function(gtlf){
    const model = gtlf.scene
    model.scale.set(10,10,10)
    camera.lookAt(model.position)
    model.position.set(0,0,0) //-5,1,0
    model.traverse((child)=>{
         if (child.isMesh) {
            // child.geometry.computeVertexNormals();
            // child.geometry.normalizeNormals();
            child.material.shading = THREE.SmoothShading;
        }
    })
    await renderer.compileAsync( model, camera, scene );

	scene.add(model);
    
})
loopMachine.addCallback(() => {
    controls.update()
    resizeCanvasToDisplaySize()
    renderer.render(scene, camera)
    // console.log(camera.position);
})

loopMachine.start()
resize.start(renderer)