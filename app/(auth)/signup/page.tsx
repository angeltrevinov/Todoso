"use client";

import AInput from "@/app/components/AInput";
import ALink from "@/app/components/ALink";
import { useEffect, useState } from "react";
import AButton from "@/app/components/AButton";
import { isValidEmail } from "@/app/_lib/validators";

export default function SignupPage() {
    const [singupForm, setSignupForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupForm({
            ...singupForm,
            [e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        if (!singupForm.email || !isValidEmail(singupForm.email)) {
            setFormIsValid(false);
            return;
        }

        if(!singupForm.password) {
            setFormIsValid(false);
            return;
        }

        if (!singupForm.confirmPassword) {
            setFormIsValid(false);
            return;
        }

        if (singupForm.password !== singupForm.confirmPassword) {
            setFormIsValid(false);
            return;
        }
        setFormIsValid(true);
    }, [singupForm]);

    const handleSubmit = (e: React.FormEvent) => {
        console.log(singupForm);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-center">
                <h1 className="text-2xl font-bold">Create an Account</h1>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="email">Email:</label>
                <AInput
                    type="email"
                    id="email"
                    required
                    value={singupForm.email}
                    onChange={handleInputChanged}
                />
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="password">Password:</label>
                <AInput
                    type="password"
                    id="password"
                    required
                    value={singupForm.password}
                    onChange={handleInputChanged}
                />
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <AInput
                    type="password"
                    id="confirmPassword"
                    required
                    value={singupForm.confirmPassword}
                    onChange={handleInputChanged}
                />
            </div>
            <div className="w-full flex flex-col">
                <AButton
                    disabled={!formIsValid}
                >
                    Sign Up!
                </AButton>
            </div>
            <div className="w-full flex flex-row justify-center">
                <span>Already have an Accout?&nbsp;</span>
                <ALink href="/login">Log In!</ALink>
            </div>
        </form>
    );
}
