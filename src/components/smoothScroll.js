import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll ({ children }) {
    useEffect(() => {
        const lenis = new Lenis()
    
        lenis.on('scroll', (e) => {
          console.log(e)
        })
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])

      return (
        <> 
          {children}
      </>
      )
}