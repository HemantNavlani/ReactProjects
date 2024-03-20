import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/HemantNavlani')
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res);
    //         setData(res)
    //     })
    // },[])
  return (
    <div className='text-center flex flex-col gap-y-5 py-3 items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1>Github followers: {data.followers}</h1>
    <img className='' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}


export async function githubInfoLoader  () {
    const response = await fetch('https://api.github.com/users/HemantNavlani')
    return response.json()
}