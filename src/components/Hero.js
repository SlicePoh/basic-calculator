import React from 'react'
import { useState } from 'react';
export default function Hero() {

    const [result, setResult] = useState("");

    const handleClick = (o) => {
        setResult(result.concat(o.target.name));
    }
    const clear=()=>{
        setResult("");
    }
    const backspace=()=>{
        setResult(result.slice(0,-1));
    }
    const calculate=()=>{
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error")
        }
    }

    return (
        <div className=" calculator text-white font-bold my-40 mx-auto bg-black p-5 rounded-xl">
            <form className=" flex text-center text-xl" >
                <input className=" text-right p-4 w-full h-20 mb-2 bg-gray-800 rounded-md" type="text" value={result} />
            </form>
            
            <div className=" grid grid-cols-4 rounded-lg " id='keypad' >
                <button type="submit" onClick={clear} className=" bg-pink-500 hover:bg-pink-700 text-black  m-1 rounded-md " id="clear">Clear</button>
                <button type="submit" onClick={backspace} className=" bg-pink-500 hover:bg-pink-700 text-black h-10 m-1 w-16 rounded-md " id="backspace">C</button>
                <button type="submit" name="/" onClick={handleClick} className=" bg-indigo-800 hover:bg-indigo-600 h-10 m-1 w-16 rounded-md ">&divide;</button>
                <button type="submit" name="7" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">7</button>
                <button type="submit" name="8" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">8</button>
                <button type="submit" name="9" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">9</button>
                <button type="submit" name="*" onClick={handleClick} className=" bg-indigo-800 hover:bg-indigo-600 h-10 m-1 w-16 rounded-md ">&times;</button>
                <button type="submit" name="4" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">4</button>
                <button type="submit" name="5" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">5</button>
                <button type="submit" name="6" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">6</button>
                <button type="submit" name="-" onClick={handleClick} className=" bg-indigo-800 hover:bg-indigo-600 h-10 m-1 w-16 rounded-md ">&ndash;</button>
                <button type="submit" name="1" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">1</button>
                <button type="submit" name="2" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">2</button>
                <button type="submit" name="3" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">3</button>
                <button type="submit" name="+" onClick={handleClick} className=" bg-indigo-800 hover:bg-indigo-600 h-10 m-1 w-16 rounded-md ">+</button>
                <button type="submit" name="0" onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">0</button>
                <button type="submit" name="." onClick={handleClick} className=" bg-slate-600 hover:bg-slate-400 h-10 m-1 w-16 rounded-md   ">.</button>
                <button type="submit" onClick={calculate } className=" bg-pink-500 hover:bg-pink-700 text-black m-1 rounded-md  " id="equal">=</button>
            </div>
        </div>
    )
}
