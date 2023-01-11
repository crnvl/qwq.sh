import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Tracking: NextPage = () => {

    const [icon, setIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>)

    const getTrackingInfo = async () => {
        const data = await fetch('https://qwq.sh/api/track', {
            method: 'POST',
            body: JSON.stringify({
                key: (document.getElementById("input") as HTMLInputElement).value
            })
        })
        const json = await data.json()
        console.log(json);

        setIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>)
    }

    return <>
        <Head>
            <title>qwq.sh</title>
            <meta name="description" content="Track your URLs." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex w-screen h-screen bg-custom-200 flex-col'>
            <div className={`justify-center m-auto`}>
                <div className="flex flex-col md:flex gap-4">
                    <input id='input' type="text" className="px-8 py-4 text-custom-400 font-bold rounded-md outline-none focus:shadow-lg transition ease-in-out duration-300" placeholder='Key (f.e. xd27y1)' />
                    <button onClick={getTrackingInfo} className="flex justify-center px-8 py-4 font-bold rounded-md bg-black text-white shadow-lg hover:shadow-none transition ease-in-out duration-300 active:scale-95 active:bg-white active:text-custom-400">
                        {icon}
                    </button>
                </div>
                <div className="flex flex-row justify-between gap-4 py-4">
                    <div className="bg-white m-auto px-8 py-4 rounded-md shadow-lg">
                        <h1 className="font-bold text-xl text-start">Clicks</h1>
                        <p className="text-gray-500">12</p>
                    </div>
                    <div className="bg-white m-auto px-8 py-4 rounded-md shadow-lg">
                        <h1 className="font-bold text-xl text-start">Last clicked</h1>
                        <p className="text-gray-500">December 12th</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tracking