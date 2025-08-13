import React,{useState} from "react"

function MyComponent() {


    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    
    
    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarModel("");
        

        // setCars(f => [...f, newCar]);



    }
    function handleRemoveCar(index) {
        setCars( c=>c.filter( (_,i) =>i!==index))

    }


    function handleYearChange(event) {
        setCarYear(Number(event.target.value));
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value); 
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }



    return (
        <div>
            <h1>List of Car Objects</h1>

            <ul>
                {cars.map(
                    (car, index) =>
                        <li key={index} onClick={() =>
                            handleRemoveCar(index)}>
                            {car.year} - {car.make} - {car.model}
                        </li>


                 )}
            </ul>

            <input id="yearInput" value={carYear} type="number" onChange={handleYearChange} placeholder="Enter car year" /> <br />
            <input id="makeInput" value={carMake} type="text" onChange={handleMakeChange} placeholder="Enter car Make" /><br />
            <input id="modelInput" value={carModel} type="text" onChange={handleModelChange} placeholder="Enter car Model" /><br />
            <button onClick={handleAddCar// ()=>handleAddCar({year:carYear,make:carMake, model:carModel})
            }>Add Car</button>
        </div>
    );



    
}export default MyComponent