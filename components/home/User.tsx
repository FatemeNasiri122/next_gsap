// "use client"
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { isEven } from "@/util/isEven";

gsap.registerPlugin(useGSAP);

interface Props {
    user: {
        type: string;
        login: string;
        avatar_url: string;
        html_url: string;
    }
    index: number;
}

const User: React.FC<Props> = ({ user, index }) => {
    const box = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const timeline = gsap.timeline();
        const boxes = document.querySelectorAll(".box");
        const boxesEven = document.querySelectorAll(".box-even");
        const boxesOdd = document.querySelectorAll(".box-odd");
        if (window.innerWidth >= 900) {
            timeline.fromTo(boxes,
                { opacity: "0", duration: 3, delay: 100 },
                { opacity: "1", duration: 3, stagger: { each: 0.3 }, }
            ).add('move').to(boxesEven, { x: "100%" }, "move").add('move').to(boxesOdd, { x: "-110%" }, "move");
        } else {
            timeline.fromTo(boxes,
                { opacity: "0", duration: 3, delay: 100 },
                { opacity: "1", duration: 3, stagger: { each: 0.3 }, }
            ).add('move').to(boxesEven, { y: "112%" }, "move").add('move').to(boxesOdd, { y: "-100%" }, "move");
        }

    },
        { scope: box }
    );

    return <div ref={box} className={`${isEven(+index) ? "box-even" : "box-odd"} m-2 box p-4 bg-midnight-500 rounded-md`}>
        <img className="w-full rounded-sm" src={user.avatar_url} alt="user" loading="lazy" />
        <p className="flex justify-between text-gray-100 mt-4">
            <span>type</span>
            <span>{user.type}</span>
        </p>
        <p className="flex justify-between text-gray-100 mt-4">
            <span>username</span>
            <Link href={user.html_url} className="text-primary">{user?.login}</Link>
        </p>

    </div>
}

export default User;