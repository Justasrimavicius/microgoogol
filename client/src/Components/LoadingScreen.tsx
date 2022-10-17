import React, { useEffect, useRef } from 'react';

function LoadingScreen() {

    const loadingScreenRef = useRef<any>(null);

    useEffect(()=>{
        console.log(loadingScreenRef)
        setTimeout(() => {
        loadingScreenRef.current.style.opacity='1';
        }, 10);
    },[])

    return (
        <div className='LoadingScreen' ref={loadingScreenRef}>
            <div className="ring">Loading
                <span></span>
            </div>
        </div>
    );
}

export default LoadingScreen;