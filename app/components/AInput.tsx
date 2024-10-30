import { InputHTMLAttributes } from 'react';

interface AInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function AInput(props: AInputProps) {
    return (
        <input
            {...props}
            className="
                h-8
                bg-white
                dark:bg-neutral-900
                text-neutral-900 
                dark:text-white 
                border-slate-700 
                border-solid border-2 
                rounded-md"
        />
    );
}
