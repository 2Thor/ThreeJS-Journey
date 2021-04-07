import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })

// Group

const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0xFF0000})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x00FF00})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x0000FF})
)
cube3.position.x = 2
group.add(cube3)

/*const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(1, 0, 1) //position inherit from Vector3 class (it's a vector)
scene.add(mesh)

//console.log(mesh.position.distanceTo(camera.position))
mesh.position.normalize() //Set vector position to 1

// Scale 
/*mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
mesh.scale.set(2,0.5,0.5)

// Rotation
//mesh.rotation.reorder('XYZ') //if gimbal lock
mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 4 */




// Axes Helper
const axesHelper  = new THREE.AxesHelper()
scene.add(axesHelper)

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

//camera.lookAt(new THREE.Vector3(3,0, 0))
//camera.lookAt(mesh.position)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera) //Similiar to taking a picture
