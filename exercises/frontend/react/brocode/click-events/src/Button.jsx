

function Button() {
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    
    // let count = 0;
    // const handleClick = (name) => {
        
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you click me ${count} time/s`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!`)
    //     }

    // };

    const handleClick = (e) => e.target.textContent = "OUCH!"


    return (
        <>
            {/* <button onClick={() => handleClick2("UMut")}>Click me</button> */}
            {/* <button onClick={() => handleClick('Umut')}>Click me</button> */}
            <button onDoubleClick={(e) => handleClick(e)}>Click me</button>

        </>
    );


    
}export default Button