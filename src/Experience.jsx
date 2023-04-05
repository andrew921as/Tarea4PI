import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three';
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import Door from './Door'
import Floor from './Floor'
import Sphere from './Sphere'

export default function Experience() {
    const directionalLightRef= useRef()
    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    const hemisphereLightRef= useRef()
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)

    const pointLightLightRef= useRef()
    useHelper(pointLightLightRef, PointLightHelper, 1)

    const spotLightLightRef= useRef()
    useHelper(spotLightLightRef, SpotLightHelper, 1)
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <spotLight ref={spotLightLightRef} position={[0, 5, -3]} intensity={2} castShadow={true} /> */}
        <pointLight ref={pointLightLightRef} position={[0, 5, -3]} intensity={2} castShadow={true} />
        {/* <hemisphereLight ref={hemisphereLightRef} position={[0, 5, -3]} intensity={2} castShadow={true} /> */}
        {/* <directionalLight ref={directionalLightRef} position={[0, 5, -3]} intensity={1.5} castShadow={true} /> */}
        <ambientLight intensity={0.5} />
        <Door/>
        <Sphere/>
        <Floor/>
    </>
}