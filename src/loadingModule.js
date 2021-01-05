import * as THREE from 'three';
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';

export const loadManager = new THREE.LoadingManager();

export const objLoader = new OBJLoader(loadManager);
export const mtlLoader = new MTLLoader();
export let tytul = 'aldechydy_772.mtl';
export let tytulobj = 'aldechydy_772.obj';
