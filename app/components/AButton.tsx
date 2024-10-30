export default function AButton({
    children,
    ...rest
}: {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...rest}
            className="
                h-9
                bg-blue-700
                rounded-md
                cursor-pointer
                disabled:bg-gray-500
                disabled:cursor-not-allowed"
        >
            {children}
        </button>
    );
}
