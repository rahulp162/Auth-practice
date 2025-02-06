"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
    const { user, error, isLoading } = useUser();
    console.log("OOO",user)
    return (
        <div className="py-4 flex w-full justify-between text-white bg-gray-800 px-44">
            <div className="flex gap-8">
                <a href="/">Home</a>
                <a href="/profile">Server Protected Profile</a>
                <a href="/middleware">Middleware Protected</a>
                <a href="/auth-protected">Auth Protected</a>
                <a target="_black" href="/api/data">
                    Protected Api
                </a>
            </div>
            <div className="flex gap-4">
                {!user && !isLoading && (
                <>
                    <a href="/api/auth/login">
                        <Button>Login</Button>
                    </a>
                    <a href="/api/auth/login">
                        <Button>Signup</Button>
                    </a>
                </>
                )}
                {user && !isLoading && (
                <>
                    <a href="/api/auth/logout">
                        <Button>Logout</Button>
                    </a>
                </>
                )}
            </div>
        </div>
    );
};

export default NavBar;