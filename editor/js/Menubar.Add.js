import * as THREE from 'three';

import { UIPanel, UIRow } from './libs/ui.js';

import { AddObjectCommand } from './commands/AddObjectCommand.js';

function MenubarAdd( editor ) {

	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/add' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Group

	let option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/group' ) );
	option.onClick( function () {

		const mesh = new THREE.Group();
		mesh.name = 'Group';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Mesh

	const meshSubmenuTitle = new UIRow().setTextContent( strings.getKey( 'menubar/add/mesh' ) ).addClass( 'option' ).addClass( 'submenu-title' );
	meshSubmenuTitle.onMouseOver( function () {

		const { top, right } = meshSubmenuTitle.dom.getBoundingClientRect();
		const { paddingTop } = getComputedStyle( this.dom );
		meshSubmenu.setLeft( right + 'px' );
		meshSubmenu.setTop( top - parseFloat( paddingTop ) + 'px' );
		meshSubmenu.setStyle( 'max-height', [ `calc( 100vh - ${top}px )` ] );
		meshSubmenu.setDisplay( 'block' );

	} );
	meshSubmenuTitle.onMouseOut( function () {

		meshSubmenu.setDisplay( 'none' );

	} );
	options.add( meshSubmenuTitle );

	const meshSubmenu = new UIPanel().setPosition( 'fixed' ).addClass( 'options' ).setDisplay( 'none' );
	meshSubmenuTitle.add( meshSubmenu );

	// Mesh / Box

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/box' ) );
	option.onClick( function () {

		const geometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Box';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Capsule

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/capsule' ) );
	option.onClick( function () {

		const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 );
		const material = new THREE.MeshStandardMaterial();
		const mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Capsule';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Circle

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/circle' ) );
	option.onClick( function () {

		const geometry = new THREE.CircleGeometry( 1, 32, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Circle';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Cylinder

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/cylinder' ) );
	option.onClick( function () {

		const geometry = new THREE.CylinderGeometry( 1, 1, 1, 32, 1, false, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Cylinder';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Dodecahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/dodecahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.DodecahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Dodecahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Icosahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/icosahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.IcosahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Icosahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Lathe

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/lathe' ) );
	option.onClick( function () {

		const geometry = new THREE.LatheGeometry();
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { side: THREE.DoubleSide } ) );
		mesh.name = 'Lathe';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Octahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/octahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.OctahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Octahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Plane

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/plane' ) );
	option.onClick( function () {

		const geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );
		const material = new THREE.MeshStandardMaterial();
		const mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Plane';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Ring

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/ring' ) );
	option.onClick( function () {

		const geometry = new THREE.RingGeometry( 0.5, 1, 32, 1, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Ring';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Sphere

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/sphere' ) );
	option.onClick( function () {

		const geometry = new THREE.SphereGeometry( 1, 32, 16, 0, Math.PI * 2, 0, Math.PI );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Sphere';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Sprite

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/sprite' ) );
	option.onClick( function () {

		const sprite = new THREE.Sprite( new THREE.SpriteMaterial() );
		sprite.name = 'Sprite';

		editor.execute( new AddObjectCommand( editor, sprite ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Tetrahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/tetrahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.TetrahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Tetrahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Torus

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/torus' ) );
	option.onClick( function () {

		const geometry = new THREE.TorusGeometry( 1, 0.4, 12, 48, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Torus';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / TorusKnot

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/torusknot' ) );
	option.onClick( function () {

		const geometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8, 2, 3 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'TorusKnot';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Mesh / Tube

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/mesh/tube' ) );
	option.onClick( function () {

		const path = new THREE.CatmullRomCurve3( [
			new THREE.Vector3( 2, 2, - 2 ),
			new THREE.Vector3( 2, - 2, - 0.6666666666666667 ),
			new THREE.Vector3( - 2, - 2, 0.6666666666666667 ),
			new THREE.Vector3( - 2, 2, 2 )
		] );

		const geometry = new THREE.TubeGeometry( path, 64, 1, 8, false );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Tube';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	meshSubmenu.add( option );

	// Light

	const lightSubmenuTitle = new UIRow().setTextContent( strings.getKey( 'menubar/add/light' ) ).addClass( 'option' ).addClass( 'submenu-title' );
	lightSubmenuTitle.onMouseOver( function () {

		const { top, right } = lightSubmenuTitle.dom.getBoundingClientRect();
		const { paddingTop } = getComputedStyle( this.dom );

		lightSubmenu.setLeft( right + 'px' );
		lightSubmenu.setTop( top - parseFloat( paddingTop ) + 'px' );
		lightSubmenu.setStyle( 'max-height', [ `calc( 100vh - ${top}px )` ] );
		lightSubmenu.setDisplay( 'block' );

	} );
	lightSubmenuTitle.onMouseOut( function () {

		lightSubmenu.setDisplay( 'none' );

	} );
	options.add( lightSubmenuTitle );

	const lightSubmenu = new UIPanel().setPosition( 'fixed' ).addClass( 'options' ).setDisplay( 'none' );
	lightSubmenuTitle.add( lightSubmenu );

	// Light / Ambient

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/light/ambient' ) );
	option.onClick( function () {

		const color = 0x222222;

		const light = new THREE.AmbientLight( color );
		light.name = 'AmbientLight';

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	lightSubmenu.add( option );

	// Light / Directional

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/light/directional' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;

		const light = new THREE.DirectionalLight( color, intensity );
		light.name = 'DirectionalLight';
		light.target.name = 'DirectionalLight Target';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	lightSubmenu.add( option );

	// Light / Hemisphere

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/light/hemisphere' ) );
	option.onClick( function () {

		const skyColor = 0x00aaff;
		const groundColor = 0xffaa00;
		const intensity = 1;

		const light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		light.name = 'HemisphereLight';

		light.position.set( 0, 10, 0 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	lightSubmenu.add( option );

	// Light / Point

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/light/point' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;
		const distance = 0;

		const light = new THREE.PointLight( color, intensity, distance );
		light.name = 'PointLight';

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	lightSubmenu.add( option );

	// Light / Spot

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/light/spot' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;
		const distance = 0;
		const angle = Math.PI * 0.1;
		const penumbra = 0;

		const light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
		light.name = 'SpotLight';
		light.target.name = 'SpotLight Target';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	lightSubmenu.add( option );

	// Camera

	const cameraSubmenuTitle = new UIRow().setTextContent( strings.getKey( 'menubar/add/camera' ) ).addClass( 'option' ).addClass( 'submenu-title' );
	cameraSubmenuTitle.onMouseOver( function () {

		const { top, right } = cameraSubmenuTitle.dom.getBoundingClientRect();
		const { paddingTop } = getComputedStyle( this.dom );

		cameraSubmenu.setLeft( right + 'px' );
		cameraSubmenu.setTop( top - parseFloat( paddingTop ) + 'px' );
		cameraSubmenu.setStyle( 'max-height', [ `calc( 100vh - ${top}px )` ] );
		cameraSubmenu.setDisplay( 'block' );

	} );
	cameraSubmenuTitle.onMouseOut( function () {

		cameraSubmenu.setDisplay( 'none' );

	} );
	options.add( cameraSubmenuTitle );

	const cameraSubmenu = new UIPanel().setPosition( 'fixed' ).addClass( 'options' ).setDisplay( 'none' );
	cameraSubmenuTitle.add( cameraSubmenu );

	// Camera / Orthographic

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/camera/orthographic' ) );
	option.onClick( function () {

		const aspect = editor.camera.aspect;
		const camera = new THREE.OrthographicCamera( - aspect, aspect );
		camera.name = 'OrthographicCamera';

		editor.execute( new AddObjectCommand( editor, camera ) );

	} );
	cameraSubmenu.add( option );

	// Camera / Perspective

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/camera/perspective' ) );
	option.onClick( function () {

		const camera = new THREE.PerspectiveCamera();
		camera.name = 'PerspectiveCamera';

		editor.execute( new AddObjectCommand( editor, camera ) );

	} );
	cameraSubmenu.add( option );

	// Walking Scene

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( 'Walking Scene' );
	option.onClick( function () {

		// ── Terrain ──────────────────────────────────────────────────────
		const sceneRoot = new THREE.Group();
		sceneRoot.name = 'WalkingScene';

		function tmat( color, roughness = 0.9 ) {
			return new THREE.MeshStandardMaterial( { color, roughness, metalness: 0 } );
		}

		// Grass ground
		const ground = new THREE.Mesh( new THREE.PlaneGeometry( 20, 20 ), tmat( 0x5a8a3c ) );
		ground.rotation.x = - Math.PI / 2;
		ground.name = 'ground';
		sceneRoot.add( ground );

		// Dirt path
		const pathMesh = new THREE.Mesh( new THREE.BoxGeometry( 1.4, 0.02, 10 ), tmat( 0xa0785a, 1.0 ) );
		pathMesh.position.set( 0, 0.01, 0 );
		pathMesh.name = 'path';
		sceneRoot.add( pathMesh );

		// ── Character ────────────────────────────────────────────────────
		function cmat( color ) {
			return new THREE.MeshStandardMaterial( { color, roughness: 0.8, metalness: 0 } );
		}

		const walker = new THREE.Group();
		walker.name = 'walker';
		walker.position.set( 0, 1, 0 );

		walker.add( new THREE.Mesh( new THREE.CapsuleGeometry( 0.28, 0.5, 8, 16 ), cmat( 0xe63946 ) ) );

		const neck = new THREE.Mesh( new THREE.CylinderGeometry( 0.08, 0.1, 0.15, 12 ), cmat( 0xf4c07a ) );
		neck.position.y = 0.45;
		walker.add( neck );

		const headGroup = new THREE.Group();
		headGroup.name = 'head';
		headGroup.position.y = 0.75;
		walker.add( headGroup );
		headGroup.add( new THREE.Mesh( new THREE.SphereGeometry( 0.28, 32, 32 ), cmat( 0xf4c07a ) ) );
		const hair = new THREE.Mesh( new THREE.SphereGeometry( 0.29, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45 ), cmat( 0x3d2b1f ) );
		hair.position.y = 0.05;
		headGroup.add( hair );
		[ - 0.1, 0.1 ].forEach( x => {
			const eye = new THREE.Mesh( new THREE.SphereGeometry( 0.04, 16, 16 ), cmat( 0x1d3557 ) );
			eye.position.set( x, 0.05, 0.25 );
			headGroup.add( eye );
		} );

		const armGeo = new THREE.CapsuleGeometry( 0.07, 0.35, 8, 12 );
		const leftArm = new THREE.Group(); leftArm.name = 'leftArm'; leftArm.position.set( - 0.38, 0.28, 0 ); walker.add( leftArm );
		const lAM = new THREE.Mesh( armGeo, cmat( 0xe63946 ) ); lAM.position.y = - 0.22; leftArm.add( lAM );
		const lH = new THREE.Mesh( new THREE.SphereGeometry( 0.07, 12, 12 ), cmat( 0xf4c07a ) ); lH.position.y = - 0.48; leftArm.add( lH );

		const rightArm = new THREE.Group(); rightArm.name = 'rightArm'; rightArm.position.set( 0.38, 0.28, 0 ); walker.add( rightArm );
		const rAM = new THREE.Mesh( armGeo, cmat( 0xe63946 ) ); rAM.position.y = - 0.22; rightArm.add( rAM );
		const rH = new THREE.Mesh( new THREE.SphereGeometry( 0.07, 12, 12 ), cmat( 0xf4c07a ) ); rH.position.y = - 0.48; rightArm.add( rH );

		const legGeo = new THREE.CapsuleGeometry( 0.09, 0.4, 8, 12 );
		const leftLeg = new THREE.Group(); leftLeg.name = 'leftLeg'; leftLeg.position.set( - 0.14, - 0.45, 0 ); walker.add( leftLeg );
		const lLM = new THREE.Mesh( legGeo, cmat( 0x457b9d ) ); lLM.position.y = - 0.25; leftLeg.add( lLM );
		const lS = new THREE.Mesh( new THREE.CapsuleGeometry( 0.08, 0.14, 8, 8 ), cmat( 0x1d3557 ) ); lS.rotation.x = Math.PI / 2; lS.position.set( - 0.03, - 0.52, 0.05 ); leftLeg.add( lS );

		const rightLeg = new THREE.Group(); rightLeg.name = 'rightLeg'; rightLeg.position.set( 0.14, - 0.45, 0 ); walker.add( rightLeg );
		const rLM = new THREE.Mesh( legGeo, cmat( 0x457b9d ) ); rLM.position.y = - 0.25; rightLeg.add( rLM );
		const rS = new THREE.Mesh( new THREE.CapsuleGeometry( 0.08, 0.14, 8, 8 ), cmat( 0x1d3557 ) ); rS.rotation.x = Math.PI / 2; rS.position.set( 0.03, - 0.52, 0.05 ); rightLeg.add( rS );

		sceneRoot.add( walker );

		// ── Walk clip ────────────────────────────────────────────────────
		const D = 2, N = 17;
		const times = Array.from( { length: N }, ( _, i ) => ( i / ( N - 1 ) ) * D );

		function sineQuatTrack( name, amplitude, phase ) {
			const q = new THREE.Quaternion();
			const axis = new THREE.Vector3( 1, 0, 0 );
			const values = [];
			for ( let i = 0; i < N; i ++ ) {
				const angle = amplitude * Math.sin( ( times[ i ] / D ) * Math.PI * 2 + phase );
				q.setFromAxisAngle( axis, angle );
				values.push( q.x, q.y, q.z, q.w );
			}
			return new THREE.QuaternionKeyframeTrack( name, times, values );
		}

		const walkClip = new THREE.AnimationClip( 'WalkerWalk', D, [
			new THREE.NumberKeyframeTrack( 'walker.position[y]', times, times.map( t => 1 + 0.08 * Math.sin( ( t / D ) * Math.PI * 2 ) ) ),
			sineQuatTrack( 'walker/head.quaternion', 0.06, 0 ),
			sineQuatTrack( 'walker/leftArm.quaternion', 0.6, 0 ),
			sineQuatTrack( 'walker/rightArm.quaternion', 0.6, Math.PI ),
			sineQuatTrack( 'walker/leftLeg.quaternion', 0.4, Math.PI ),
			sineQuatTrack( 'walker/rightLeg.quaternion', 0.4, 0 ),
		] );

		sceneRoot.animations = [ walkClip ];

		// Lights
		const hasLight = editor.scene.children.some( c => c.isLight );
		if ( ! hasLight ) {
			const ambient = new THREE.AmbientLight( 0xffffff, 1.5 ); ambient.name = 'AmbientLight';
			editor.execute( new AddObjectCommand( editor, ambient ) );
			const dir = new THREE.DirectionalLight( 0xfff0cc, 2 ); dir.name = 'DirectionalLight'; dir.position.set( 5, 10, 5 );
			editor.execute( new AddObjectCommand( editor, dir ) );
		}

		editor.execute( new AddObjectCommand( editor, sceneRoot ) );
		editor.mixer.clipAction( walkClip, sceneRoot ).play();

	} );
	options.add( option );

	// Puppet

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( 'Puppet' );
	option.onClick( function () {

		function mat( color ) {

			return new THREE.MeshToonMaterial( { color } );

		}

		const puppet = new THREE.Group();
		puppet.name = 'Puppet';
		puppet.position.y = 1;

		// Body
		const body = new THREE.Mesh( new THREE.CapsuleGeometry( 0.55, 1.0, 8, 16 ), mat( 0xe63946 ) );
		puppet.add( body );

		// Neck
		const neck = new THREE.Mesh( new THREE.CylinderGeometry( 0.15, 0.18, 0.3, 12 ), mat( 0xf4c07a ) );
		neck.name = 'neck';
		neck.position.y = 0.9;
		puppet.add( neck );

		// Head group
		const headGroup = new THREE.Group();
		headGroup.name = 'head';
		headGroup.position.y = 1.5;
		puppet.add( headGroup );

		headGroup.add( new THREE.Mesh( new THREE.SphereGeometry( 0.55, 32, 32 ), mat( 0xf4c07a ) ) );

		// Hair
		const hair = new THREE.Mesh( new THREE.SphereGeometry( 0.57, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45 ), mat( 0x3d2b1f ) );
		hair.position.y = 0.1;
		headGroup.add( hair );

		// Eyes
		[ - 0.2, 0.2 ].forEach( x => {

			const eye = new THREE.Mesh( new THREE.SphereGeometry( 0.08, 16, 16 ), mat( 0x1d3557 ) );
			eye.position.set( x, 0.1, 0.5 );
			headGroup.add( eye );

			const hl = new THREE.Mesh( new THREE.SphereGeometry( 0.03, 8, 8 ), mat( 0xffffff ) );
			hl.position.set( x + 0.03, 0.13, 0.57 );
			headGroup.add( hl );

		} );

		// Nose
		const nose = new THREE.Mesh( new THREE.SphereGeometry( 0.07, 12, 12 ), mat( 0xe8a87c ) );
		nose.position.set( 0, - 0.05, 0.54 );
		headGroup.add( nose );

		// Mouth
		const mouth = new THREE.Mesh( new THREE.TorusGeometry( 0.13, 0.03, 8, 16, Math.PI ), mat( 0xc1440e ) );
		mouth.position.set( 0, - 0.22, 0.48 );
		mouth.rotation.z = Math.PI;
		headGroup.add( mouth );

		// Ears
		[ - 1, 1 ].forEach( side => {

			const ear = new THREE.Mesh( new THREE.SphereGeometry( 0.12, 12, 12 ), mat( 0xf4c07a ) );
			ear.position.set( side * 0.55, 0, 0 );
			headGroup.add( ear );

		} );

		// Arms
		const armGeo = new THREE.CapsuleGeometry( 0.13, 0.7, 8, 12 );

		const leftArm = new THREE.Group();
		leftArm.name = 'leftArm';
		leftArm.position.set( - 0.75, 0.55, 0 );
		puppet.add( leftArm );
		const lArmMesh = new THREE.Mesh( armGeo, mat( 0xe63946 ) );
		lArmMesh.position.y = - 0.45;
		leftArm.add( lArmMesh );
		const lHand = new THREE.Mesh( new THREE.SphereGeometry( 0.14, 12, 12 ), mat( 0xf4c07a ) );
		lHand.position.y = - 0.95;
		leftArm.add( lHand );

		const rightArm = new THREE.Group();
		rightArm.name = 'rightArm';
		rightArm.position.set( 0.75, 0.55, 0 );
		puppet.add( rightArm );
		const rArmMesh = new THREE.Mesh( armGeo, mat( 0xe63946 ) );
		rArmMesh.position.y = - 0.45;
		rightArm.add( rArmMesh );
		const rHand = new THREE.Mesh( new THREE.SphereGeometry( 0.14, 12, 12 ), mat( 0xf4c07a ) );
		rHand.position.y = - 0.95;
		rightArm.add( rHand );

		// Legs
		const legGeo = new THREE.CapsuleGeometry( 0.16, 0.8, 8, 12 );

		const leftLeg = new THREE.Group();
		leftLeg.name = 'leftLeg';
		leftLeg.position.set( - 0.28, - 0.9, 0 );
		puppet.add( leftLeg );
		const lLegMesh = new THREE.Mesh( legGeo, mat( 0x457b9d ) );
		lLegMesh.position.y = - 0.5;
		leftLeg.add( lLegMesh );
		const lShoe = new THREE.Mesh( new THREE.CapsuleGeometry( 0.14, 0.25, 8, 8 ), mat( 0x1d3557 ) );
		lShoe.rotation.x = Math.PI / 2;
		lShoe.position.set( - 0.05, - 1.05, 0.1 );
		leftLeg.add( lShoe );

		const rightLeg = new THREE.Group();
		rightLeg.name = 'rightLeg';
		rightLeg.position.set( 0.28, - 0.9, 0 );
		puppet.add( rightLeg );
		const rLegMesh = new THREE.Mesh( legGeo, mat( 0x457b9d ) );
		rLegMesh.position.y = - 0.5;
		rightLeg.add( rLegMesh );
		const rShoe = new THREE.Mesh( new THREE.CapsuleGeometry( 0.14, 0.25, 8, 8 ), mat( 0x1d3557 ) );
		rShoe.rotation.x = Math.PI / 2;
		rShoe.position.set( 0.05, - 1.05, 0.1 );
		rightLeg.add( rShoe );

		// Strings
		const strMat = new THREE.LineBasicMaterial( { color: 0xaaaaaa, transparent: true, opacity: 0.5 } );
		const barMat = new THREE.LineBasicMaterial( { color: 0x8b6914 } );
		const top = 6;

		[ [ 0, 1.9 ], [ - 0.75, 0.55 ], [ 0.75, 0.55 ], [ - 0.28, - 0.9 ], [ 0.28, - 0.9 ] ].forEach( ( [ x, y ] ) => {

			const pts = [ new THREE.Vector3( x * 0.4, top, 0 ), new THREE.Vector3( x, y, 0 ) ];
			puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( pts ), strMat ) );

		} );

		puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( - 0.5, top, 0 ), new THREE.Vector3( 0.5, top, 0 ) ] ), barMat ) );
		puppet.add( new THREE.Line( new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( - 0.3, top - 0.8, 0 ), new THREE.Vector3( 0.3, top - 0.8, 0 ) ] ), barMat ) );

		// ── AnimationClip via keyframe tracks ─────────────────────────────
		// One full cycle = 2π / 2 ≈ 3.14 s  →  use duration = 2 s for a snappy walk
		const D = 2; // seconds per loop
		const N = 17; // samples per track (smooth sine)
		const times = [];

		for ( let i = 0; i < N; i ++ ) times.push( ( i / ( N - 1 ) ) * D );

		function sineValues( amplitude, phaseOffset, component ) {

			// returns flat array of quaternion xyzw values sampled from a rotation around X
			const q = new THREE.Quaternion();
			const axis = new THREE.Vector3( 1, 0, 0 );
			const out = [];

			for ( let i = 0; i < N; i ++ ) {

				const angle = amplitude * Math.sin( ( times[ i ] / D ) * Math.PI * 2 + phaseOffset );
				q.setFromAxisAngle( axis, angle );
				out.push( q.x, q.y, q.z, q.w );

			}

			return out;

		}

		function bobValues() {

			// puppet Y position bob
			const out = [];

			for ( let i = 0; i < N; i ++ ) {

				out.push( 1 + 0.12 * Math.sin( ( times[ i ] / D ) * Math.PI * 2 ) );

			}

			return out;

		}

		const tracks = [
			// body bob (position Y)
			new THREE.NumberKeyframeTrack( '.position[y]', times, bobValues() ),
			// head tilt (rotation X)
			new THREE.QuaternionKeyframeTrack( 'head.quaternion', times, sineValues( 0.08, 0 ) ),
			// arms swing opposite phase
			new THREE.QuaternionKeyframeTrack( 'leftArm.quaternion', times, sineValues( 0.6, 0 ) ),
			new THREE.QuaternionKeyframeTrack( 'rightArm.quaternion', times, sineValues( 0.6, Math.PI ) ),
			// legs counter-phase to arms
			new THREE.QuaternionKeyframeTrack( 'leftLeg.quaternion', times, sineValues( 0.4, Math.PI ) ),
			new THREE.QuaternionKeyframeTrack( 'rightLeg.quaternion', times, sineValues( 0.4, 0 ) ),
		];

		const clip = new THREE.AnimationClip( 'PuppetWalk', D, tracks );

		// Switch to MeshStandardMaterial so colors show without needing extra lights
		puppet.traverse( function ( child ) {

			if ( child.isMesh && child.material && child.material.isMeshToonMaterial ) {

				child.material = new THREE.MeshStandardMaterial( {
					color: child.material.color,
					roughness: 0.8,
					metalness: 0.0
				} );

			}

		} );

		// Add ambient + directional light if the scene has none
		const hasLight = editor.scene.children.some( c => c.isLight );

		if ( ! hasLight ) {

			const ambient = new THREE.AmbientLight( 0xffffff, 1.5 );
			ambient.name = 'AmbientLight';
			editor.execute( new AddObjectCommand( editor, ambient ) );

			const dirLight = new THREE.DirectionalLight( 0xfff0cc, 2 );
			dirLight.name = 'DirectionalLight';
			dirLight.position.set( 5, 10, 5 );
			editor.execute( new AddObjectCommand( editor, dirLight ) );

		}

		// Add to scene first so the mixer can find the named children
		editor.execute( new AddObjectCommand( editor, puppet ) );

		// Play via the editor's shared mixer so the viewport animate() loop picks it up
		const action = editor.mixer.clipAction( clip, puppet );
		action.setLoop( THREE.LoopRepeat, Infinity );
		action.play();

	} );
	options.add( option );

	return container;

}

export { MenubarAdd };
