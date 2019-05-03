import React, { useState, useEffect, useRef } from 'react';

export default function New(){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const wrapper = useRef(null);

    function mousemove(e){
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        // useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

        wrapper.current.addEventListener('mousemove', mousemove)

        return ()=>{
            wrapper.current.removeEventListener('mousemove', mousemove)
        };
    })

    return (
        <div className="event-emitter" ref={wrapper}>
            {`你的鼠标位置${x},${y}`}
        </div>
    )
}