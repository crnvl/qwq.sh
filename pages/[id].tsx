import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Redirect: NextPage = () => {
    const nav = useRouter();
    fetch("https://qwq.sh/api/redirect", {
        method: "POST",
        body: JSON.stringify({ key: nav.asPath.replace("/", "") }),
    })
        .then((res) => res.json())
        .then((data) => {
            nav.push(data.url);
        });

    return <>
        <div className="flex w-screen h-screen justify-center items-center bg-black text-white">
            <div className="text-center max-w-sm">
                <h1 className="font-bold text-2xl">Redirecting you.</h1>
                <p>If you are not being redirected within a few seconds, your link might be invalid.</p>
                <p className="text-custom-400 font-bold py-8"><Link href="/">qwq.sh</Link></p>
            </div>
        </div>
    </>;
}

export default Redirect