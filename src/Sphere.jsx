import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Sphere() {
    const PATH = "/static/textures/ball/"
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'aO.jpg',
        opacityMap: PATH + 'metallic.jpg'
    })
    return (


        <mesh position={[1, 2, 2]} castShadow={true}>
            <sphereGeometry args={[2, 90, 60]} />
            <meshStandardMaterial {...props} />
        </mesh>

    )
}
