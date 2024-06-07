import * as THREE from 'three';

const light = new THREE.AmbientLight( 0x404040, 1 ); // soft white light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
light.add(directionalLight)
directionalLight.position.set(5,5,-5)
// directionalLight.shadow.bias = -0.005;
// directionalLight.normalBias = -2;

// mas luces
const dirLight1 = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight1.position.set( 1, 1, 1 );
light.add(dirLight1)

const dirLight2 = new THREE.DirectionalLight( 0xffffff, 2 );
dirLight2.position.set( - 1, - 1, - 1 );
light.add(dirLight2)

export default light
