import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three';
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import Door from './Door'
import Floor from './Floor'
import Sphere from './Sphere'

export default function Experience() {
    const directionalLightRef= useRef()
    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight ref={directionalLightRef} position={[0, 1, -3]} intensity={1.5} castShadow={true} />
        <ambientLight intensity={0.5} />
        <Door/>
        <Sphere/>
        <Floor/>
    </>
}