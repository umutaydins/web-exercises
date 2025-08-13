import React,{useState,useEffect}from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    function addCount() {
        setCount(c => c + 1);
    } 
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });
    // //same
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count]);
    
    useEffect(() => {
        document.title = `Count: ${count} Color: ${color}`;

    }, [count, color])
    
    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }
    return (
      

        <>
            <p style={{color: color}}>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={changeColor}>Change Color</button>
        </>
        

  )
}

export default MyComponent