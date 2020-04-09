import { useState, useEffect } from 'react'

const useMousePosition = (deps: any[] = []) => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse= (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, deps)
  return positions
}

export default useMousePosition
