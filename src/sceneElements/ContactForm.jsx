import * as THREE from 'three/src/Three'
import { useRender, useThree } from 'react-three-fiber'
import React, { useEffect } from 'react'
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

export default function ContactForm() {
    var renderer;
    let { scene, gl, camera } = useThree();

    var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1, side: THREE.DoubleSide });
    useEffect(() => {      
      var element = document.getElementById('contact-form');      
      element.style.width = '100vw';
      element.style.height = '100vh';
      element.style.background = '#ffffff';
      element.style.display = 'block';
      element.style.textAlign = 'center';
      element.style.opacity = '0';

      var object = new CSS3DObject(element);
      object.position.x = 0;
      object.position.y = 0;
      object.position.z = -26;      
      object.scale.x = 0.01;
      object.scale.y = 0.01;
      scene.add(object);

      renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.width = '100vw';
      renderer.domElement.style.height = '100vh';
      renderer.domElement.style.position = 'absolute'
      renderer.domElement.style.zIndex = '0';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.pointerEvents = 'none'
      document.body.appendChild(renderer.domElement);

      window.addEventListener( 'resize', onWindowResize, false );
      function onWindowResize() {
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
    }, [])

    useRender(() => {
      renderer.render(scene, camera);
    })

    return <>
    </>
  }
