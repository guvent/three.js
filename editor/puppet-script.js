// Three.js Editor — Puppet Script
// Attach this to any scene object (e.g. a Group) via Sidebar > Script > New Script
// Then press Play (▶) to see the puppet animate.
//
// Available lifecycle functions: init, start, update, stop
// `this` refers to the object this script is attached to.
// `scene`, `camera`, `renderer` are available as globals.

var puppet, head, leftArm, rightArm, leftLeg, rightLeg;

function makeMat( color ) {
	return new THREE.MeshToonMaterial( { color: color } );
}

function init() {

	// Clear any previous puppet children
	while ( this.children.length ) this.remove( this.children[ 0 ] );

	puppet = this;

	var skinColor  = 0xf4c07a;
	var shirtColor = 0xe63946;
	var pantsColor = 0x457b9d;
	var shoeColor  = 0x1d3557;
	var hairColor  = 0x3d2b1f;
	var mouthColor = 0xc1440e;

	// ── Body ──────────────────────────────────────────────
	var body = new THREE.Mesh(
		new THREE.CapsuleGeometry( 0.55, 1.0, 8, 16 ),
		makeMat( shirtColor )
	);
	puppet.add( body );

	// ── Neck ──────────────────────────────────────────────
	var neck = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.15, 0.18, 0.3, 12 ),
		makeMat( skinColor )
	);
	neck.position.y = 0.9;
	puppet.add( neck );

	// ── Head ──────────────────────────────────────────────
	head = new THREE.Group();
	head.position.y = 1.5;
	puppet.add( head );

	var headMesh = new THREE.Mesh(
		new THREE.SphereGeometry( 0.55, 32, 32 ),
		makeMat( skinColor )
	);
	head.add( headMesh );

	// Hair
	var hair = new THREE.Mesh(
		new THREE.SphereGeometry( 0.57, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45 ),
		makeMat( hairColor )
	);
	hair.position.y = 0.1;
	head.add( hair );

	// Eyes
	[ -0.2, 0.2 ].forEach( function( x ) {
		var eye = new THREE.Mesh(
			new THREE.SphereGeometry( 0.08, 16, 16 ),
			makeMat( 0x1d3557 )
		);
		eye.position.set( x, 0.1, 0.5 );
		head.add( eye );

		var highlight = new THREE.Mesh(
			new THREE.SphereGeometry( 0.03, 8, 8 ),
			makeMat( 0xffffff )
		);
		highlight.position.set( x + 0.03, 0.13, 0.57 );
		head.add( highlight );
	} );

	// Nose
	var nose = new THREE.Mesh(
		new THREE.SphereGeometry( 0.07, 12, 12 ),
		makeMat( 0xe8a87c )
	);
	nose.position.set( 0, -0.05, 0.54 );
	head.add( nose );

	// Mouth
	var mouth = new THREE.Mesh(
		new THREE.TorusGeometry( 0.13, 0.03, 8, 16, Math.PI ),
		makeMat( mouthColor )
	);
	mouth.position.set( 0, -0.22, 0.48 );
	mouth.rotation.z = Math.PI;
	head.add( mouth );

	// Ears
	[ -1, 1 ].forEach( function( side ) {
		var ear = new THREE.Mesh(
			new THREE.SphereGeometry( 0.12, 12, 12 ),
			makeMat( skinColor )
		);
		ear.position.set( side * 0.55, 0, 0 );
		head.add( ear );
	} );

	// ── Arms ──────────────────────────────────────────────
	var armGeo = new THREE.CapsuleGeometry( 0.13, 0.7, 8, 12 );

	leftArm = new THREE.Group();
	leftArm.position.set( -0.75, 0.55, 0 );
	puppet.add( leftArm );

	var lArmMesh = new THREE.Mesh( armGeo, makeMat( shirtColor ) );
	lArmMesh.position.y = -0.45;
	leftArm.add( lArmMesh );

	var lHand = new THREE.Mesh( new THREE.SphereGeometry( 0.14, 12, 12 ), makeMat( skinColor ) );
	lHand.position.y = -0.95;
	leftArm.add( lHand );

	rightArm = new THREE.Group();
	rightArm.position.set( 0.75, 0.55, 0 );
	puppet.add( rightArm );

	var rArmMesh = new THREE.Mesh( armGeo, makeMat( shirtColor ) );
	rArmMesh.position.y = -0.45;
	rightArm.add( rArmMesh );

	var rHand = new THREE.Mesh( new THREE.SphereGeometry( 0.14, 12, 12 ), makeMat( skinColor ) );
	rHand.position.y = -0.95;
	rightArm.add( rHand );

	// ── Legs ──────────────────────────────────────────────
	var legGeo = new THREE.CapsuleGeometry( 0.16, 0.8, 8, 12 );

	leftLeg = new THREE.Group();
	leftLeg.position.set( -0.28, -0.9, 0 );
	puppet.add( leftLeg );

	var lLegMesh = new THREE.Mesh( legGeo, makeMat( pantsColor ) );
	lLegMesh.position.y = -0.5;
	leftLeg.add( lLegMesh );

	var lShoe = new THREE.Mesh( new THREE.CapsuleGeometry( 0.14, 0.25, 8, 8 ), makeMat( shoeColor ) );
	lShoe.rotation.x = Math.PI / 2;
	lShoe.position.set( -0.05, -1.05, 0.1 );
	leftLeg.add( lShoe );

	rightLeg = new THREE.Group();
	rightLeg.position.set( 0.28, -0.9, 0 );
	puppet.add( rightLeg );

	var rLegMesh = new THREE.Mesh( legGeo, makeMat( pantsColor ) );
	rLegMesh.position.y = -0.5;
	rightLeg.add( rLegMesh );

	var rShoe = new THREE.Mesh( new THREE.CapsuleGeometry( 0.14, 0.25, 8, 8 ), makeMat( shoeColor ) );
	rShoe.rotation.x = Math.PI / 2;
	rShoe.position.set( 0.05, -1.05, 0.1 );
	rightLeg.add( rShoe );

	// ── Puppet strings ────────────────────────────────────
	var stringMat = new THREE.LineBasicMaterial( { color: 0xaaaaaa, transparent: true, opacity: 0.5 } );
	var stringTop = 6;

	[ [0, 1.9], [-0.75, 0.55], [0.75, 0.55], [-0.28, -0.9], [0.28, -0.9] ].forEach( function( pt ) {
		var points = [
			new THREE.Vector3( pt[0] * 0.4, stringTop, 0 ),
			new THREE.Vector3( pt[0], pt[1], 0 )
		];
		puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( points ), stringMat ) );
	} );

	var barMat = new THREE.LineBasicMaterial( { color: 0x8b6914 } );
	puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( [
		new THREE.Vector3( -0.5, stringTop, 0 ), new THREE.Vector3( 0.5, stringTop, 0 )
	] ), barMat ) );
	puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( [
		new THREE.Vector3( -0.3, stringTop - 0.8, 0 ), new THREE.Vector3( 0.3, stringTop - 0.8, 0 )
	] ), barMat ) );

	// Position the whole puppet up a bit so feet clear the grid
	puppet.position.y = 1;

	// Set a nice background
	scene.background = new THREE.Color( 0x1a1a2e );

}

function update( event ) {

	var t = event.time * 0.001; // ms → seconds

	// Gentle body bob
	puppet.position.y = 1 + Math.sin( t * 2 ) * 0.12;

	// Head tilt
	head.rotation.z = Math.sin( t * 1.5 ) * 0.08;
	head.rotation.y = Math.sin( t * 0.8 ) * 0.12;

	// Swinging arms
	leftArm.rotation.x  = Math.sin( t * 2 ) * 0.6;
	rightArm.rotation.x = Math.sin( t * 2 + Math.PI ) * 0.6;

	// Swinging legs (counter-phase to arms)
	leftLeg.rotation.x  = Math.sin( t * 2 + Math.PI ) * 0.4;
	rightLeg.rotation.x = Math.sin( t * 2 ) * 0.4;

}
