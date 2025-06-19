import React from 'react'
import { useState, useEffect } from 'react';
// id size opacity animationDuration, x,y
// id size delay animationDuration, x,y
const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])
    const generateStars = () => {
        const noOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for(let i = 0; i < noOfStars; i++){
            newStars.push({
                id : i,
                size : Math.random()*3 +1,
                x : Math.random() * 100,
                y : Math.random() * 100,
                opacity : Math.random() * 0.5 + 0.5,
                animationDuration : Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    }
    const generateMeteors = () => {
        const noOfMeteors = 10;
        const newMeteors = [];
        for(let i = 0; i < noOfMeteors; i++){
            newMeteors.push({
                id : i,
                size : Math.random()*2 +1,
                x : Math.random() * 100,
                y : Math.random() * 20,
                delay : Math.random() * 15,
                animationDuration : Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => (
            <div key={star.id} className='star animation-pulse-subtle' style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`
            }}>
            </div>
        ))}

        {meteors.map((meteors) => (
            <div key={meteors.id} className='meteor animate-meteor' style={{
                width: `${meteors.size* 40}px`,
                height: `${meteors.size*1}px`,
                left: `${meteors.x}%`,
                top: `${meteors.y}%`,
                delay: meteors.delay,
                animationDuration: `${meteors.animationDuration}s`
            }}>
            </div>
        ))}
    </div>
  )
}

export default StarBackground
