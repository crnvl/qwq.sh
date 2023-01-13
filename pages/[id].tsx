import { NextPage } from "next";
import Link from "next/link";

export async function getServerSideProps(context: any) {
    const key = context.query.id.toString();

    const res = await fetch("https://qwq.sh/api/redirect", {
        method: "POST",
        body: JSON.stringify({ key: key }),
    });

    if (res.status !== 200) {
        return {
            notFound: true,
        };
    }

    const data = await res.json();
    
    return {
        redirect: {
            destination: data.url,
            permanent: false,
        }
    };
};

const Redirect: NextPage = () => {
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