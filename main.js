//use npm i three gsap, to install three.js and its dependencies into your project

//once installed import everything (*) as THREE from 'three' in this syntax "import * as THREE from 'three'"

import * as THREE from 'three';

// creating our scene
const scene = new THREE.Scene()

//creating our sphere object geometry takes in three parameters, radius, width and height
const sphereGeo = new THREE.SphereGeometry(3, 64, 64)

//creating our sphere object material takes in an object with property, color for starters
const sphereMate = new THREE.MeshStandardMaterial({
    color: '#00ff83'
})

//creating a mesh that bounds th geometry and material to form one component, it takes in two parameters ("the geometry of the object", "your intended material")
const sphereMesh = new THREE.Mesh(sphereGeo, sphereMate)

//now we must add the Mesh to our scene, as in Blender when you  make an object you must add it to your scene. ("its not going to add itself"). This takes in a simple "scene.add(yourMesh)"
scene.add(sphereMesh)

//how do you see without eyes? No we cant see without eyes in the literal humman sense, well users arent going to imagine there is a 3d object in the website just because you say so. The next few steps convey the message further

//Adding your camera, camera is either orthographicCamera or perspective Camera and it takes in 3 parameters, the field of view, the aspect ratio height and the aspect ratio width respectively. In this syntax "new THREE.perspectiveCamera(45, 800, 600)"
const camera = new THREE.PerspectiveCamera(45, 800, 600)

//now we must add the Camera to our scene, as in Blender when you make a camera you must add it to your scene, not quite relatable thougj but anyways. ("its not going to add itself"). This takes in a simple "scene.add(yourMesh)"
scene.add(camera)