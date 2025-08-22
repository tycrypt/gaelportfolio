import * as THREE from 'three';
import './style.css'; // Keep this if you want to keep your styles, otherwise remove


// curve class
class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("white");

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

camera.position.z = 18;

window.innerWidth = 400;
window.innerHeight = 85;
// Create a renderer and add its canvas to the DOM
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create the spinning cactus ball
const cactusBall = new THREE.Group();
scene.add(cactusBall);

const cactusGeometry = new THREE.SphereGeometry(10);
const cactusMaterial = new THREE.MeshBasicMaterial({color : "grey"});
const cactus = new THREE.Mesh(cactusGeometry, cactusMaterial);
cactusBall.add(cactus);

const cactEdges = new THREE.EdgesGeometry(cactusGeometry);
const cactEdgeMaterial = new THREE.LineBasicMaterial({color : 0xffffff});
const cactLines = new THREE.LineSegments(cactEdges, cactEdgeMaterial);
cactusBall.add(cactLines);
/*
// create the cube group
const mainCubeGroup = new THREE.Group();
scene.add(mainCubeGroup);

// create my character group
const pillGuyGroup = new THREE.Group();
//scene.add(pillGuyGroup);

//add the body of my pill guy
const pillGeo = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const pillMaterial = new THREE.MeshBasicMaterial( { color : 0x923524} );
const pill = new THREE.Mesh( pillGeo, pillMaterial ); 
pillGuyGroup.add(pill);

//add the lines of the pill guy
const pillEdges = new THREE.EdgesGeometry(pillGeo);
const pillEdgeMaterial = new THREE.LineBasicMaterial( { color : 0xffffff , linewidth : 100} );
const pillEdge = new THREE.LineSegments(pillEdges , pillEdgeMaterial);
pillGuyGroup.add(pillEdge);

//add the curved arms 
const path = new THREE.CatmullRomCurve3(
    [new THREE.Vector3( -10, 0, 10 ),
	   new THREE.Vector3( -5, 5, 5 ),
	   new THREE.Vector3( 0, 0, 0 )]
);
const tubeGeo = new THREE.TubeGeometry( path, 20, 0.3, 8, false);
const tubeMaterial = new THREE.MeshBasicMaterial( { color : 0x2c3437} );
const arm = new THREE.Mesh(tubeGeo, tubeMaterial);
pillGuyGroup.add(arm);


// Create a simple cube mesh
const geometry = new THREE.BoxGeometry(10,10); 
const material = new THREE.MeshBasicMaterial({ color: 0x1c3437 , transparent : false});
const cube = new THREE.Mesh(geometry, material);
mainCubeGroup.add(cube);

// add edges to cube

const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 , linewidth : 100});
const line = new THREE.LineSegments(edges, lineMaterial);
mainCubeGroup.add(line);

let xPos = 0;
window.addEventListener('keydown', (event) => {
  if (event.key === 'a'){
    line.position.x -= 1;
    cube.position.x -= 1;
  }
  if (event.key === 'd'){
    line.position.x += 1;
    cube.position.x += 1;
  }
  if (event.key === 'w'){
    line.position.y += 1;
    cube.position.y += 1;
  }
   if (event.key === 's'){
    line.position.y -= 1;
    cube.position.y -= 1;
  }
});
*/

window.addEventListener('keydown', (event) =>{
    switch(event.key){
      case 'a' :
        cactusBall.position.x -= 1;
        
        break;
      case 'd' : 
        cactusBall.position.x += 1;
        break;
      default:
        break;
    }
});


// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cactusBall.rotation.y += 0.004;
  cactusBall.rotation.x += 0.004;
  // Rotate the cube for some simple animation
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01; 
   
  //pillGuyGroup.rotation.y += 0.01;
  

  // Render the scene from the camera perspective
  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
