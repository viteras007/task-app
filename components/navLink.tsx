import Link from "next/link";
import React from "react";

interface NavLinkProps {
    name: string;
    icon: React.ReactNode;
    href: string;
}

export default function NavLink({ name, icon, href }: NavLinkProps) {
    return (
        <Link href={href}
           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            {React.cloneElement(icon as React.ReactElement, {
                className: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                'aria-hidden': "true"
            })}
            <span className="ms-3">{name}</span>
        </Link>
    )
}