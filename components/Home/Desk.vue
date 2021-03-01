<template>
  <div class="canvas-container w-full 8:w-auto h-80">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from '~/node_modules/three/examples/jsm/controls/OrbitControls.js'

export default {
    mounted: async function(){

    // Canvas
    const container = document.querySelector('.canvas-container')
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh) 


    /**
     * Sizes
     */
    const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight
    }

    window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = container.offsetWidth
    sizes.height = container.offsetHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.position.y = 3
    scene.add(camera)


    /**
     * Controls
     */
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true


    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    /**
     *  Animate
     */
    const tick = () => {

        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        window.requestAnimationFrame(tick) 
    }

    tick()
    }
}
</script>

