//escenario
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();

loader.load("imagenes/Fondoo.jpg", function (texture){
    scene.background=texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement)


//luz
hlight = new THREE.AmbientLight(0xffffff,1)
hlight.position.set(1,1,1)
scene.add(hlight);

//objetos

const loader1 = new THREE.GLTFLoader();
loader1.load('../dron/scene.gltf', function(gltf){
    flor = gltf.scene.children[0];
    flor.scale.set(0.5,0.5,0.5)
    scene.add(gltf.scene)
    flor.position.x= -20
    flor.position.y= 10
    flor.position.z= -30
    const controls = new THREE.DragControls([flor], camera,renderer.domElement)
})

 const loader2 = new THREE.GLTFLoader();
loader2.load('../fat_man_the_incredibles/scene.gltf', function(gltf){
    otro = gltf.scene.children[0];
    otro.scale.set(5,5,5)
    scene.add(gltf.scene)
    otro.position.x= 5
    otro.position.y=-10
    otro.position.z=-15
    const controls2 = new THREE.DragControls([otro], camera,renderer.domElement)
}) 
const loader3 = new THREE.GLTFLoader();
loader3.load('../personaje_terminado/scene.gltf', function(gltf){
    polo = gltf.scene.children[0];
    polo.scale.set(1,1,1)
    scene.add(gltf.scene)
    polo.position.x= -10
    polo.position.y= -5
    polo.position.z=-15
    const controls3 = new THREE.DragControls([polo], camera,renderer.domElement)
}) 
const loader4 = new THREE.GLTFLoader();
loader4.load('../low_poly_old_man_on_suit/scene.gltf', function(gltf){
    otro2 = gltf.scene.children[0];
    otro2.scale.set(5,5,5)
    scene.add(gltf.scene)
    otro2.position.x= 18
    otro2.position.y=-10
    otro2.position.z= -15
    const controls4 = new THREE.DragControls([otro2], camera,renderer.domElement)
}) 

//controles




//animacion
function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate();



