"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: 0xb34bff, // Accent color: Purple (#B34BFF)
      linewidth: 2,
    });
    const line = new THREE.LineSegments(wireframe, material);
    scene.add(line);
    
    // Secondary shape inside
    const innerGeometry = new THREE.IcosahedronGeometry(0.5, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
        color: 0x39C0ED, // Primary color: Neon Blue
        emissive: 0x39C0ED,
        emissiveIntensity: 0.5,
        metalness: 0.7,
        roughness: 0.3,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0x39C0ED, 2);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);


    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      line.rotation.x += 0.001;
      line.rotation.y += 0.001;
      innerMesh.rotation.x -= 0.003;
      innerMesh.rotation.y -= 0.003;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
        if (currentMount) {
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
};

export default ThreeScene;
