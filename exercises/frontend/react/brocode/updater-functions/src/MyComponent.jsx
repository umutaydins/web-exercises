// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(year+1)  nop setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions               





import React, { useState } from "react";

function MyComponent() {
    
    const [count, setCount] = useState(0);

    function increment() {
        // Uses the Current state to calculate the Next state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the Current state after an update.
        // setCount(count + 1);
        //UPDATE


        // Takes the PENDING state to calculate NEXT state.
        // React puts your update function in a queue (waiting in line)
        // During the next render, it will call them in the same order.
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement() {
        // setCount(count - 1);
        
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);


    }
    function reset() {
        setCount(c=> c=0);

    }


    return (
        <div>
            <p>Count : {count}</p>

        </div>
    );
    


}