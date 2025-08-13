

import React, { useState } from "react";



function MyComponent() {
    const [car, setCar] = useState({
                                        year: 2024,
                                        make: "Ford",
                                        model: "Mustang"
    })
    
    function handleYearChange(event) {
        // setCar({ ...car, year: event.targer.value });
        
        setCar(c=>({...car, year:event.target.value}));


    }
    function handleMakeChange(event) {
        // setCar({...car, model:event.targer.value});
        setCar(c=>({...car, make:event.target.value}))

    }
    
    function handleModelhange(event) {
        // setCar({...car, model:event.targer.value});
        setCar(c=>({...car, model:event.target.value}))


    }
                                    
    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} { car.model}</p>    
        
             <input type="number"  value={car.year} onChange={handleYearChange}/> <br />
             <input type="text"  onChange={handleMakeChange} value={car.make} /> <br />
             <input type="text" onChange={handleModelhange} value={car.model} /> <br />

        </div>
    );

}export default MyComponent