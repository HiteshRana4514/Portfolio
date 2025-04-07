import React from "react";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
function EachTool({ skillName, description, model, scale }) {
  const canvas = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    const width = canvas.current.clientWidth;
    const height = canvas.current.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const loader = new GLTFLoader();
    loader.load(
      model,
      function (gltf) {
        const gltfModel = gltf.scene || gltf.scenes[0];
        scene.add(gltfModel);
        gltf.animations;
        gltf.scene;
        gltf.scenes;
        gltf.cameras;
        gltf.asset;
        gltfModel.scale.set(...scale);
        gltfModel.position.set(0, 0, 0);
        console.log("gltfModel", gltfModel);
        gltfModel.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error happened", error);
      }
    );
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    camera.position.z = 3;
    controls.update();
    let frameId;
    const animate = () => {
      renderer.render(scene, camera);
      controls.update();
      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div className="py-4">
        <div className="p-2 flex items-center gap-6">
          <div className="h-[80px] w-[100px] rounded-md">
            <canvas ref={canvas} className="w-full h-full rounded-md"></canvas>
          </div>
          <div>
            <span
              className="block text-xl text-white font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {skillName}
            </span>
            <span
              className="block text-lg text-[#998f8f]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachTool;
