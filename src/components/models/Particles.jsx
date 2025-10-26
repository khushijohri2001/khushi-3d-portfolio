import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { useRef, useState } from 'react'

function Particles() {
  const ref = useRef()
  const [positions] = useState(() => random.inSphere(new Float32Array(2000), { radius: 5 }))
  
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}
export default Particles