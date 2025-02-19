import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGene = () => {

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%&}{*+";
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyText=useCallback(()=>{
        passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
     setShowPopup(true);
     setTimeout(() => setShowPopup(false), 2000);

    },[password])
      

    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, charAllowed, generatePassword]);

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500  to-indigo-500'>
            <div className='flex flex-col justify-center h-auto shadow-2xl bg-gray-300 shadow-black w-[40%] mt-10 p-6 rounded-lg '>
                <h1 className='text-2xl font-bold text-center mb-4 text-gray-800'>Password Generator</h1>
                <div className='flex gap-5 w-full mb-4'>
                    <input className=' w-full rounded border-none outline-none bg-gray-100 h-10 p-2 text-gray-800' type="text" value={password} ref={passwordRef} readOnly />
                    <button onClick={copyText} className='bg-blue-600 text-white px-4 py-2 rounded cursor-pointer  hover:bg-blue-700 transition duration-300 '>Copy</button>
                </div>
                <div className='flex gap-4 mt-8 items-center'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer w-full'
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label className='text-gray-800'>Length: {length}</label>
                </div>
                <div className='flex gap-4 mt-4 items-center'>
                    <input type="checkbox" id='numberInput' checked={numberAllowed}
                        onChange={() => { setNumberAllowed((prev) => !prev) }}
                    />
                    <label className='text-gray-800' htmlFor='numberInput'>Include Numbers</label>
                </div>
                <div className='flex gap-4 mt-4 items-center'>
                    <input type="checkbox" id='characterInput' checked={charAllowed}
                        onChange={() => { setCharAllowed((prev) => !prev) }}
                    />
                    <label htmlFor='characterInput' className='text-gray-800'>Include Special Characters</label>
                </div>
            </div>
            {showPopup && (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-800">Password copied to clipboard!</p>
        </div>
    </div>
)}
        </div>

        
    )
}

export default PasswordGene