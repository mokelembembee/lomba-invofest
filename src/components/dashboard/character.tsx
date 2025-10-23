// @ts-nocheck
'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { AnimationMixer } from 'three'

const CharacterWithExternalAnimation = ({ modelUrl, animUrl, scale = 0.01, position = [0, 0, 0] }) => {
	const model = useLoader(FBXLoader, modelUrl)
	const anim = useLoader(FBXLoader, animUrl)
	const mixerRef = useRef<AnimationMixer | null>(null)

	useEffect(() => {
		if (!model) return

		model.traverse(child => {
			if (child.isMesh) {
				child.castShadow = true
				child.receiveShadow = true
				child.material.side = 2 // render both sides
			}
		})

		mixerRef.current = new AnimationMixer(model)
		if (anim.animations && anim.animations.length > 0) {
			const clip = anim.animations[0]
			const action = mixerRef.current.clipAction(clip)
			action.play()
			console.log('🎬 Playing animation:', clip.name)
		}

		return () => mixerRef.current?.stopAllAction()
	}, [model, anim])

	useFrame((_, delta) => {
		if (mixerRef.current) mixerRef.current.update(delta)
	})

	return <primitive object={model} />
}

const CharacterScene = () => {
	return (
		<Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
			<ambientLight intensity={0.6} />
			<directionalLight position={[5, 10, 7]} intensity={1} castShadow />
			<OrbitControls />
			<gridHelper args={[10, 10]} />

			<Suspense fallback={null}>
				<CharacterWithExternalAnimation
					modelUrl='/models/character.fbx'
					animUrl='/models/idle.fbx'
					scale={0.01}
					position={[0, 0, 0]}
				/>
			</Suspense>
		</Canvas>
	)
}

export default CharacterScene
