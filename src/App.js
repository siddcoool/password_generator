import logo from './logo.svg';
import { useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState(false)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      // if(numberAllowed) str += "0123456789"
      // if(charAllowed) str += "!@#$%^&*(){}[]"
      for (let i = 0; i < Array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char)
      }
      setPassword(pass)

    },
    [length, number, char, setPassword],
  )

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-500 bg-gray-300'>
        <h1 className='text-4xl text-center '>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 my-4 rounded-lg' placeholder='password' readOnly></input>
          <button className='rounded-lg mx-1 '> Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type='range' min={6} max={12} className='cursor-pointer'>
                <label>Length : {length}</label>
              </input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
