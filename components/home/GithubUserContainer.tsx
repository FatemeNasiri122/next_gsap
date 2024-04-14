"use client"

import useApiGet from "../hook/useApiGet";
import User from "./User";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface User {
    login: string;
    id: number,
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean
}

gsap.registerPlugin(useGSAP);

const GithubUserContainer = () => {
    const { data, loading, error } = useApiGet("https://api.github.com/users");

    if (loading) {
        return <p className="p-4 text-gray-100">loading...</p>
    }
    if (error) {
        return <p className="p-4 text-gray-100">error</p>
    }
    return <div className="grid grid-cols-1 md:grid-cols-4 p-4 ">
        {data?.map((user: User, index: number) => <User key={user.id} user={user} index={index} />)}
    </div >
}

export default GithubUserContainer;