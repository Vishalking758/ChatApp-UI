import {useState} from 'react';

export default function RendomeJoke(){
const [joke , setJoke]=useState();


document.onreadystatechange=()=>{

	const fetchApi = async()=>{
const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=64067fa4f55a924d3e8b99f9d19a`;
const response = await fetch(url);
const responsejson = await response.json();
setJoke(responsejson.jokeContent)
};fetchApi();
}

function changeJoke() {

	const fetchApi = async()=>{
const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=64067fa4f55a924d3e8b99f9d19a`;
const response = await fetch(url);
const responsejson = await response.json();
setJoke(responsejson.jokeContent)
};fetchApi();


}


return(
<div className='h-screen bg-slate-900 text-white font-mono font-bold flex justify-center items-center'>
<div className='w-96 flex flex-col justify-around ring-4 items-center border rounded-2xl p-3 h-48'>

<h1>{joke}</h1>

<button onClick={changeJoke} className='w-48 border rounded-2xl ring-8' >change</button>

</div>


</div>

)};