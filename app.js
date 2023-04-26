import React, {useState,useEffect} from 'react'

const API_URL = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

function App() {
    const [joke, setjoke] = useState('');

    const generatejoke= () =>{
        fetch(API_URL)
            .then(res => res.json())
            .then(data=> setjoke(data.value.joke));
    }
    useEffect( () => {
        generatejoke();
    }, [])
    return ( 
    <div className='box' >
        <p dangerouslySetInnerHTML={{__html: joke}}/>   
        <button onClick={generatejoke}> Get a new one </button>  
    </div>
    );
}

export default App;