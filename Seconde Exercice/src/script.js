import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0.7, - 0.6, 1)
scene.add(mesh)

// Axes Helper
const axesHelper  = new THREE.AxesHelper()
scene.add(axesHelper)

// Scale 
/*mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5*/
mesh.scale.set(2,0.5,0.5)

// Rotation

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 0
camera.position.z = 3
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
