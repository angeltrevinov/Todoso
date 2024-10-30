import AInput from "@/app/components/AInput";
import ALink from "@/app/components/ALink";

export default function LoginPage() {
    return (
        <form className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-center">
                <h1 className="text-2xl font-bold">Log In</h1>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="emailInput">Email:</label>
                <AInput type="email" id="emailInput"/>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="passInput">Password:</label>
                <AInput type="password" id="passInput"/>
            </div>
            <div className="w-full flex flex-col">
                <button className="h-9 bg-blue-700 rounded-md">Log In!</button>
            </div>
            <div className="w-full flex flex-row justify-center">
                <span>Don't have an account?&nbsp;</span>
                <ALink href="/signup">Sign Up</ALink>
            </div>
        </form>
    );
};