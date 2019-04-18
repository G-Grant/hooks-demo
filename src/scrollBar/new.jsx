import React, { useState } from 'react';
import LeftContainer from './left/old.jsx';
import RightContainer from './right/old.jsx';
import './index.css';

export default function NewScrollBar(){
    const [scrollTop, setScrollTop] = useState(0);
    function onScroll(e){
        let { scrollTop } = e.target;
        setScrollTop(scrollTop);
    }
    return(
        <div className="scroll-bar">
            <LeftContainer scrollTop={scrollTop} onScroll={onScroll} />
            <RightContainer scrollTop={scrollTop} onScroll={onScroll} />
        </div>
    );
}

// export default function NewScrollBar(){
//     const scroll = useScroll(0);

//     return(
//         <div className="scroll-bar">
//             <LeftContainer {...scroll} />
//             <RightContainer {...scroll} />
//         </div>
//     );
// }

// function useScroll(){
//     const [scrollTop, setScrollTop] = useState(0);
//     function onScroll(e){
//         let { scrollTop } = e.target;
//         setScrollTop(scrollTop);
//     }
//     return {
//         scrollTop,
//         onScroll
//     }
// }