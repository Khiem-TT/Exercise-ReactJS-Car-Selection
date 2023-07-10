import {useState} from "react";

function Car() {
    const [car, setCar] = useState('');
    const [color, setColor] = useState('');
    const choice = (e, setState) => {
        setState(e.target.value);
    }
    return (
        <div>
            <h1>Select your car</h1>
            Select a car
            <select onChange={e => choice(e, setCar)}>
                <option value="BMW">BMW</option>
                <option value="Toyota">Toyota</option>
                <option value="Kia">Kia</option>
                <option value="Mazda">Mazda</option>
            </select>
            Select a color
            <select onChange={e => choice(e, setColor)}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            <h3>You selected a {color} - {car}</h3>
        </div>
    )
}

export default Car;