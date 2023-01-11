import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Tracking: NextPage = () => {

    const [icon, setIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>)

    const [clicks, setClicks] = useState("N/A")
    const [lastClicked, setLastClicked] = useState('N/A')

    const getTrackingInfo = async () => {
        const data = await fetch('https://qwq.sh/api/track', {
            method: 'POST',
            body: JSON.stringify({
                key: (document.getElementById("input") as HTMLInputElement).value
            })
        })
        const json = await data.json()

        if (json.success) {
            setClicks(json.clicks)
            const date = new Date(json.lastClick)
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            setLastClicked(`${monthNames[date.getMonth()]} ${date.getDay()}`)
        }

        setIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
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
                    <div className="bg-white m-auto px-8 py-3 rounded-md shadow-lg">
                        <h1 className="text-gray-500">Clicks</h1>
                        <p className="font-bold text-xl text-start">{clicks}</p>
                    </div>
                    <div className="bg-white m-auto px-8 py-3 rounded-md shadow-lg">
                        <h1 className="text-gray-500">Last clicked</h1>
                        <p className="font-bold text-xl text-start">{lastClicked}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tracking