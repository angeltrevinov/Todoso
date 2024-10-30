"use client";

import { isValidEmail } from "@/app/_lib/validators";
import AButton from "@/app/components/AButton";
import AInput from "@/app/components/AInput";
import ALink from "@/app/components/ALink";
import { useEffect, useState } from "react";

export default function LoginPage() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({
            ...loginForm,
            [e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        if (!loginForm.email || isValidEmail(loginForm.email)) {
            setFormIsValid(false);
            return;
        }

        if (!loginForm.password) {
            setFormIsValid(false);
            return;
        }

        setFormIsValid(true);
    }, [loginForm]);

    const handleSubmit = (e: React.FormEvent) => {
        console.log(loginForm);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-center">
                <h1 className="text-2xl font-bold">Log In</h1>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="email">Email:</label>
                <AInput
                    type="email"
                    id="email"
                    required
                    value={loginForm.email}
                    onChange={handleInputChanged}
                />
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="password">Password:</label>
                <AInput
                    type="password"
                    id="password"
                    required
                    value={loginForm.password}
                    onChange={handleInputChanged} 
                />
            </div>
            <div className="w-full flex flex-col">
                <AButton disabled={!formIsValid}>Log In!</AButton>
            </div>
            <div className="w-full flex flex-row justify-center">
                <span>Don't have an account?&nbsp;</span>
                <ALink href="/signup">Sign Up</ALink>
            </div>
        </form>
    );
}
