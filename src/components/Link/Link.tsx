import React from "react"

export type LinkProps = {
    children: React.ReactNode
    disabled?: boolean
    className?: string
    href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ children, href, disabled, className, ...rest }: LinkProps) {
    return (
        <a
        href={disabled ? undefined: href}
        className={`text-primary aria-disabled:text-disabled ${className}`}
        aria-disabled={disabled}
        {...rest}
        >
            {children}
        </a>
    )
}