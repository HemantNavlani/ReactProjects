import {useState} from "react"
function App() {
  const [color,setColor] = useState('black')
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>

      <div className="flex fixed flex-wrap bottom-12 justify-center px-2 inset-x-2 ">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg px-4 py-2 rounded-2xl bg-cyan-400">
          <button 
          onClick={()=>setColor('red')}
          className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'red'}}
          >Red</button>

           <button 
           onClick={()=>setColor('green')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'green'}}
          >Green</button>


           <button 
           onClick={()=>setColor('blue')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'blue'}}
          >Blue</button>


           <button
           onClick={()=>setColor('olive')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'olive'}}
          >Olive</button>

           <button
            onClick={()=>setColor('gray')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'gray'}}
          >Gray</button>

           <button 
           onClick={()=>setColor('yellow')}
           className="text-black font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'yellow'}}
          >Yellow</button> 
          
          <button
          onClick={()=>setColor('pink')}
           className="text-black font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'pink'}}
          >Pink</button> 
          
          <button 
           onClick={()=>setColor('purple')}
          className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'purple'}}
          >Purple</button>

           <button 
          onClick={()=>setColor('lavender')}
           className="text-black font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'lavender'}}
          >Lavender</button>


          <button 
           onClick={()=>setColor('white')}
          className="text-black font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'white'}}
          >White</button> 
          
          <button
          onClick={()=>setColor('black')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'black'}}
          >Black</button> 

          <button 
           onClick={()=>setColor('orange')}
           className="text-white font-bold rounded-3xl outline-none px-3 py-1 shadow-2xl"
          style={{backgroundColor:'orange'}}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
