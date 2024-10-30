import Link from "next/link";

export default function ALink(props: any) {
    return (
        <Link
            {...props}
            className="text-blue-600 hover:underline"
        >
            {props.children}
        </Link>
    );
}