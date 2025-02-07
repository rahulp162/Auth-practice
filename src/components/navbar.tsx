"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
    const { user, isLoading } = useUser();
    return (
        <div className="py-4 flex w-full justify-between text-white bg-gray-800 px-44">
            <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/middleware">Middleware Protected</Link>
                <Link href="/protected">Protected Route</Link>
                <Link target="_black" href="/api/data">
                    Protected Api
                </Link>
            </div>
            <div className="flex gap-4">
                {!user && !isLoading && (
                <>
                    <Link href="/api/auth/login">
                        <Button>Login</Button>
                    </Link>
                </>
                )}
                {user && !isLoading && (
                <>
                    <Link href="/api/auth/logout">
                        <Button>Logout</Button>
                    </Link>
                </>
                )}
            </div>
        </div>
    );
};

export default NavBar;