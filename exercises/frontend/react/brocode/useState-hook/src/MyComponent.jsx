import React,{useState} from "react"

function MyComponent() {
    
    let [name, setName] = useState();
    let [age, setAge] = useState(0);
    let [bol, setBol] = useState(true);
    const updateName = () => {
        setName("Spongebob")
        console.log(name);
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const updateBol = () => {
        setBol(!bol)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Bol: {bol ? "TRUE" :"FALSE"}</p>
            <button style={{ width: "100px", height:"100px", backgroundColor: bol ? "green" : "red" }} onClick={updateBol}></button>
        </div>
    );



}export default MyComponent