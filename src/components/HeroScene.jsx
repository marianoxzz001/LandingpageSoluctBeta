import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Two draw calls: procedural light ribbons and particles, no downloaded 3D assets.
export default function HeroScene() {
  const host = useRef(null);
  useEffect(() => {
    const node = host.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
    } catch {
      return undefined; // The CSS sculpture remains visible underneath.
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 30);
    camera.position.z = 7.6;
    const count = 28000;
    const positions = new Float32Array(count * 3);
    const targets = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    let seed = 77;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    // The same particles become an interface: idea -> structure -> experience.
    const panels = [
      [-2.5, -1.65, 5, 3.3], [-2.5, 1.17, 5, 0.02],
      [-2.08, 0.55, 1.85, 0.17], [-2.08, 0.21, 1.4, 0.17],
      [-2.08, -0.22, 1.6, 0.025], [-2.08, -0.39, 1.3, 0.025],
      [-2.08, -0.95, 1.05, 0.3], [0.35, -0.98, 1.65, 1.8],
      [-2.08, -1.4, 1.1, 0.08], [-0.62, -1.4, 1.1, 0.08], [0.85, -1.4, 1.1, 0.08],
    ];
    for (let i = 0; i < count; i++) {
      const t = (i % 400) / 399;
      const lane = Math.floor(i / 400) % 7;
      positions[i * 3] = t;
      positions[i * 3 + 1] = lane;
      positions[i * 3 + 2] = Math.floor(i / 2800) / 9 - 0.5;
      seeds[i] = random();
      const panel = panels[i % panels.length];
      let x = random(), y = random();
      if (i % panels.length === 0 || i % panels.length === 7) {
        if (i % 2) x = Math.round(x); else y = Math.round(y);
      }
      targets[i * 3] = panel[0] + x * panel[2];
      targets[i * 3 + 1] = panel[1] + y * panel[3];
      targets[i * 3 + 2] = (random() - 0.5) * 0.035;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    const material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uDpr: { value: 1 }, uLight: { value: 0 }, uEnergy: { value: 0 }, uScroll: { value: 0 }, uReduced: { value: 0 }, uPointer: { value: new THREE.Vector2() } },
      vertexShader: `
        attribute float aSeed;
        attribute vec3 aTarget;
        uniform float uTime, uDpr, uEnergy, uScroll, uReduced;
        uniform vec2 uPointer;
        varying float vSeed, vDepth, vAngle;
        void main() {
          float t = position.x;
          float lane = position.y;
          float x = (t - 0.5) * 9.0;
          float phase = x * 0.68 - uTime * 0.3 + lane * 0.28;
          float envelope = sin(t * 3.14159);
          vec3 p = vec3(x,
            sin(phase) * (1.25 + envelope * 0.65) + (lane - 3.0) * 0.14,
            cos(phase + lane * 0.12) * envelope * 1.2);
          p.y += position.z * (0.07 + envelope * 0.24);
          p.z += position.z * 0.32;
          p.y += sin(t * 24.0 - uTime * 0.8 + lane) * 0.035;
          float cycle = smoothstep(0.05, 0.75, sin(uTime * 0.32 - 1.3));
          float morph = max(cycle, uScroll * 0.94);
          morph = mix(morph, 0.78, uReduced);
          vec3 target = aTarget;
          target.z += sin(target.x * 1.4 + uTime * 0.7) * 0.045;
          p = mix(p, target, morph);
          vec2 away = p.xy - uPointer;
          float distanceToPointer = length(away);
          float influence = exp(-distanceToPointer * distanceToPointer * 0.65);
          float ripple = sin(distanceToPointer * 7.0 - uTime * 3.0);
          p.xy += away / max(distanceToPointer, 0.15) * influence * uEnergy * 0.42;
          p.z += influence * uEnergy * (0.8 + ripple * 0.25);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(3.6, (2.3 + aSeed * 1.8) * uDpr / -mv.z * 3.0);
          vSeed = aSeed; vDepth = smoothstep(-11.0, -5.0, mv.z); vAngle = t * 5.0 + lane * 0.16;
        }`,
      fragmentShader: `
        uniform float uTime, uLight;
        varying float vSeed, vDepth, vAngle;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          vec3 cyan = vec3(0.10, 0.78, 1.0);
          vec3 violet = vec3(0.55, 0.23, 1.0);
          vec3 color = mix(cyan, violet, 0.5 + 0.5 * sin(vAngle + uTime * 0.12));
          color = mix(color, vec3(0.86, 0.91, 1.0), pow(vSeed, 7.0) * 0.8);
          color *= mix(1.0, 0.65, uLight);
          float alpha = (1.0 - smoothstep(0.15, 0.5, d)) * (0.65 + vDepth * 0.65);
          gl_FragColor = vec4(color, alpha);
        }`,
    });
    const sculpture = new THREE.Group();
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    sculpture.add(points);
    // Thin translucent surfaces connect the particles into continuous ribbons of light.
    const ribbonPositions = [], ribbonSeeds = [], indices = [];
    for (let lane = 0; lane < 7; lane++) {
      for (let step = 0; step <= 240; step++) {
        for (const edge of [-0.5, 0.5]) {
          ribbonPositions.push(step / 240, lane, edge);
          ribbonSeeds.push(0.5);
        }
        if (step < 240) {
          const base = lane * 482 + step * 2;
          indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
        }
      }
    }
    const ribbonGeometry = new THREE.BufferGeometry();
    ribbonGeometry.setAttribute('position', new THREE.Float32BufferAttribute(ribbonPositions, 3));
    ribbonGeometry.setAttribute('aSeed', new THREE.Float32BufferAttribute(ribbonSeeds, 1));
    ribbonGeometry.setAttribute('aTarget', new THREE.Float32BufferAttribute(new Float32Array(ribbonPositions.length), 3));
    ribbonGeometry.setIndex(indices);
    const ribbonMaterial = new THREE.ShaderMaterial({
      uniforms: material.uniforms, transparent: true, depthWrite: false,
      side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
      vertexShader: material.vertexShader.replace('void main() {', 'varying float vEdge, vMorph; void main() {')
        .replace('vec3 target = aTarget;', 'vEdge = position.z; vMorph = morph; vec3 target = aTarget;'),
      fragmentShader: `
        uniform float uLight;
        varying float vAngle, vEdge, vMorph;
        void main() {
          vec3 color = mix(vec3(0.12, 0.68, 1.0), vec3(0.52, 0.24, 0.96), 0.5 + 0.5 * sin(vAngle));
          color *= mix(1.0, 0.65, uLight);
          float edge = pow(max(0.0, 1.0 - abs(vEdge) * 2.0), 0.7);
          gl_FragColor = vec4(color, edge * 0.19 * (1.0 - vMorph));
        }`,
    });
    const ribbons = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbons.frustumCulled = false;
    sculpture.add(ribbons);
    sculpture.rotation.set(0.12, -0.22, -0.10);
    scene.add(sculpture);
    renderer.setClearColor(0x000000, 0);
    node.appendChild(renderer.domElement);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0, energy: 0 };
    const hero = node.closest('#hero');
    let scrollProgress = 0, contextLost = false;
    let frame = 0, visible = true, elapsed = 0, last = 0, disposed = false;
    const newPointer = new THREE.Vector2();
    const render = (now = 0) => {
      frame = 0;
      if (disposed || !visible || document.hidden || contextLost) return;
      const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!motion.matches) elapsed += delta;
      material.uniforms.uTime.value = elapsed;
      material.uniforms.uEnergy.value += (pointer.energy - material.uniforms.uEnergy.value) * 0.04;
      material.uniforms.uReduced.value = motion.matches ? 1 : 0;
      material.uniforms.uScroll.value += (scrollProgress - material.uniforms.uScroll.value) * 0.045;
      material.uniforms.uPointer.value.lerp(newPointer.set(pointer.x, pointer.y), 0.045);
      sculpture.rotation.x += (0.12 + -pointer.y * 0.10 - sculpture.rotation.x) * 0.065;
      sculpture.rotation.y += (-0.22 + pointer.x * 0.12 - sculpture.rotation.y) * 0.065;
      sculpture.rotation.z = -0.10 + (motion.matches ? 0 : Math.sin(elapsed * 0.15) * 0.04);
      renderer.render(scene, camera);
      node.classList.add('scene-ready');
      if (!motion.matches) frame = requestAnimationFrame(render);
    };
    const wake = () => { last = 0; if (!frame) frame = requestAnimationFrame(render); };
    const resize = () => {
      const { width, height } = node.getBoundingClientRect();
      camera.aspect = width / Math.max(height, 1);
      camera.position.z = camera.aspect < 1.1 ? 12.2 : 8.6;
      camera.updateProjectionMatrix();
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      material.uniforms.uDpr.value = dpr;
      wake();
    };
    const theme = () => {
      const light = !document.documentElement.classList.contains('dark');
      material.uniforms.uLight.value = light ? 1 : 0;
      material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      material.needsUpdate = true;
      ribbonMaterial.blending = material.blending;
      ribbonMaterial.needsUpdate = true;
      wake();
    };
    const move = (event) => {
      if (motion.matches) return;
      if (event.pointerType === 'touch') return;
      const bounds = node.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
      const y = 1 - (event.clientY - bounds.top) / bounds.height * 2;
      const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      pointer.x = THREE.MathUtils.clamp(x, -1, 1) * halfHeight * camera.aspect;
      pointer.y = THREE.MathUtils.clamp(y, -1, 1) * halfHeight;
      pointer.energy = Math.abs(x) <= 1 && Math.abs(y) <= 1 ? 1 : 0;
    };
    const leave = () => { pointer.x = 0; pointer.y = 0; pointer.energy = 0; };
    const onScroll = () => {
      if (motion.matches) { scrollProgress = 0; return; }
      const rect = hero.getBoundingClientRect();
      scrollProgress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.65)));
    };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else wake(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake(); else { cancelAnimationFrame(frame); frame = 0; }
    });
    const sizing = new ResizeObserver(resize);
    const themes = new MutationObserver(theme);
    observer.observe(node); sizing.observe(node);
    themes.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    hero.addEventListener('pointermove', move); hero.addEventListener('pointerleave', leave);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    const motionChanged = () => { leave(); onScroll(); wake(); };
    motion.addEventListener('change', motionChanged);
    const lost = (event) => { event.preventDefault(); contextLost = true; cancelAnimationFrame(frame); frame = 0; node.classList.remove('scene-ready'); };
    renderer.domElement.addEventListener('webglcontextlost', lost);
    const restored = () => { contextLost = false; wake(); };
    renderer.domElement.addEventListener('webglcontextrestored', restored);
    resize(); theme(); onScroll();
    return () => {
      disposed = true; cancelAnimationFrame(frame);
      observer.disconnect(); sizing.disconnect(); themes.disconnect();
      hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', leave);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', visibility); motion.removeEventListener('change', motionChanged);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      renderer.domElement.removeEventListener('webglcontextrestored', restored);
      ribbonGeometry.dispose(); ribbonMaterial.dispose(); geometry.dispose(); material.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, []);
  return <div className="particle-scene" ref={host} aria-hidden="true" />;
}
