import _ from 'lodash';
import * as THREE from 'three';

import {light} from './lightbase';
import {light2} from './lightdirect';
import {camera} from './camerabase';
import {loadManager, objLoader, mtlLoader} from './loadingModule';
import {controls} from './controlsModule';

'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#c');
  const heightRatio = 1;
  canvas.height = canvas.width * heightRatio;
  const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
  });
  renderer.setClearColor(0x000000, 0);
  
}
