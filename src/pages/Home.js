import {useState} from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [inputName, setInputName] = useState('')

    return (
        <>
            Enter your Name: <input onChange={(e) => setInputName(e.target.value)} />
            <h1>Welcome {inputName}!</h1>
            <Link to='/questions'>Show questions List</Link>
        </>
    )
}