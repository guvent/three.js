import * as THREE from 'three';

import { UIPanel, UIRow, UIText, UIButton } from './libs/ui.js';

function SidebarDev( editor ) {

	const container = new UIPanel();
	container.setBorderTop( '0' );
	container.setPaddingTop( '20px' );

	const headerRow = new UIRow();
	headerRow.add( new UIText( 'Dev' ).setClass( 'Label' ) );
	container.add( headerRow );

	const puppetButtonRow = new UIRow();
	const puppetButton = new UIButton( 'Build Puppet Character' );
	puppetButton.onClick( function () {

		buildPuppet( editor );

	} );
	puppetButtonRow.add( puppetButton );
	container.add( puppetButtonRow );

	return container;

}

function buildPuppet( editor ) {

	const puppet = new THREE.Group();
	puppet.name = 'Puppet';

	// torso

	const torsoGeometry = new THREE.BoxGeometry( 1, 1.8, 0.5 );
	const torsoMaterial = new THREE.MeshStandardMaterial( { color: 0x6699ff } );
	const torso = new THREE.Mesh( torsoGeometry, torsoMaterial );
	torso.name = 'Torso';
	puppet.add( torso );

	// head

	const headGeometry = new THREE.SphereGeometry( 0.35, 32, 16 );
	const headMaterial = new THREE.MeshStandardMaterial( { color: 0xffddaa } );
	const head = new THREE.Mesh( headGeometry, headMaterial );
	head.position.set( 0, 1.3, 0 );
	head.name = 'Head';
	puppet.add( head );

	// arms

	const armGeometry = new THREE.BoxGeometry( 0.2, 1.2, 0.2 );
	const armMaterial = new THREE.MeshStandardMaterial( { color: 0x6699ff } );

	const armL = new THREE.Mesh( armGeometry, armMaterial );
	armL.position.set( - 0.8, 0.3, 0 );
	armL.name = 'Arm_L';
	puppet.add( armL );

	const armR = armL.clone();
	armR.position.x = 0.8;
	armR.name = 'Arm_R';
	puppet.add( armR );

	// legs

	const legGeometry = new THREE.BoxGeometry( 0.3, 1.4, 0.3 );
	const legMaterial = new THREE.MeshStandardMaterial( { color: 0x333366 } );

	const legL = new THREE.Mesh( legGeometry, legMaterial );
	legL.position.set( - 0.3, - 1.6, 0 );
	legL.name = 'Leg_L';
	puppet.add( legL );

	const legR = legL.clone();
	legR.position.x = 0.3;
	legR.name = 'Leg_R';
	puppet.add( legR );

	// simple eyes

	const eyeGeometry = new THREE.SphereGeometry( 0.08, 16, 8 );
	const eyeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );

	const eyeL = new THREE.Mesh( eyeGeometry, eyeMaterial );
	eyeL.position.set( - 0.12, 1.4, 0.28 );
	eyeL.name = 'Eye_L';
	puppet.add( eyeL );

	const eyeR = eyeL.clone();
	eyeR.position.x = 0.12;
	eyeR.name = 'Eye_R';
	puppet.add( eyeR );

	// add to editor scene

	editor.addObject( puppet );
	editor.select( puppet );
	editor.focus( puppet );

}

export { SidebarDev };

