import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {

    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    const [size, setSize] = useState({ width: "10px", height: "10px" })

    useEffect(() => {
        gsap.set(cursorRef, { 
            xPercent: -50, 
            yPercent: -50 
        })
        // gsap.set(followerRef, { 
        //     xPercent: -50, 
        //     yPercent: -50 
        // })
        let targets = gsap.utils.toArray(".cursor");
        window.addEventListener("mousemove",
        (e) => {
            
            gsap.to(targets, {
                duration: 1,
                x: e.clientX,
                y: e.clientY,
                ease: "power1.out",
                overwrite: "auto",
                stagger: 0.02,
            });
        }
    );
    }, [])

    const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
        })
        gsap.to(followerRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
        })
    }

    return (
        <div>
            <div ref={cursorRef} className='cursor bg-transparent md:bg-[#03d8e7]' style={{ width:size.width, height: size.height }} ></div>
            {/* <div ref={followerRef} style={{ width:size.width, height: size.height }} className='follower-cursor'></div> */}
        </div>
    )
}

export default CustomCursor