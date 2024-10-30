export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    //<div className="w-full md:w-3/4 md:mx-auto md:border-slate-700 md:border-solid md:border-2 md:rounded-md px-4 flex flex-col items-center gap-4 ">

    return (
        <main className="h-dvh flex items-center">
            <div
                className="
                w-full
                h-full
                md:w-3/4
                md:h-2/4
                md:max-w-lg
                mx-auto
                md:border-slate-700
                md:border-solid
                md:border-2
                md:rounded-md
                flex
                flex-col
                justify-center
                items-center
                px-4
                md:px-12
                gap-4"
            >
                {children}
            </div>
        </main>
    );
}
