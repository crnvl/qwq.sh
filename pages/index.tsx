import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import SplineEmbed from "../components/spline";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const [showTracking, setShowTracking] = useState(false);
  const [icon, setIcon] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
      />
    </svg>
  );

  const [zw, setZw] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const [isZeroWidth, setIsZeroWidth] = useState(false);

  const createShortUrl = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("https://qwq.sh/api/create", {
      url: (document.getElementById("input") as HTMLInputElement).value,
      isZeroWidth: isZeroWidth,
    });
    const json = await res.data;

    navigator.clipboard.writeText(json.url);

    setIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
        />
      </svg>
    );
    setShowTracking(true);
  };

  function toggleZeroWidth() {
    setIsZeroWidth(!isZeroWidth);

    if (isZeroWidth) {
      setZw(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    } else {
      setZw(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      );
    }
  }

  useEffect(() => {
    document.getElementById("input")?.focus();
  }, []);

  return (
    <>
      <Head>
        <title>qwq.sh</title>
        <meta name="description" content="Easy to use & free URL Shortener." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 w-screen h-screen">
        <SplineEmbed />
      </div>
      <div className="flex w-screen h-screen bg-custom-pink">
        <div
          className={`flex flex-col md:flex-row justify-center m-auto gap-4`}
        >
          <form onSubmit={createShortUrl} className="z-50">
            <div className="relative">
              <div className="flex flex-row border border-white/25 focus-within:scale-110 focus-within:-translate-y-1 px-2 transition ease-in-out duration-300 items-center input-bg relative overflow-hidden rounded-md">
                <input
                  type="input"
                  id="input"
                  className="bg-transparent peer outline-none p-4 rounded-md !text-white placeholder-white font-semibold"
                  // className=" text-black font-bold rounded-md outline-none focus:shadow-lg transition ease-in-out duration-300"
                  placeholder="Enter your URL"
                  required
                />
                <Image
                  alt="acrylic-backimage"
                  width={600}
                  height={600}
                  priority
                  src="/acrylic.png"
                  className="-z-10 absolute top-0 left-0 scale-150 w-full aspect-square opacity-20"
                />

                <button
                  type="submit"
                  className="px-2 py-2 rounded-md font-bold text-white transition ease-in-out duration-300 active:scale-95 active:bg-white active:text-pink-500/75"
                >
                  {icon}
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center">
              {showTracking ? (
                <Link
                  className="px-8 rounded-md text-white opacity-50 hover:opacity-100 transition ease-in-out duration-300"
                  href="/tracking"
                >
                  Link tracking
                </Link>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
