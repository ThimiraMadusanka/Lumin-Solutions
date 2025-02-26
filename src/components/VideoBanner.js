import React, { useState, useEffect } from 'react'

const VideoBanner = () => {
  const TOP_OFFSET = 50;
  const [isScroll, setIsScroll] = useState(false)

  // Handle Scroll for style changes
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={!isScroll && "lg:mx-auto lg:max-w-7xl lg:py-10 lg:px-8"}>
        <video src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4" autoPlay loop muted type="video/mp4" />
    </div>
  )
}

export default VideoBanner