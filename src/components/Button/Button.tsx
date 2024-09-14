export type ButtonProps = {
    children: React.ReactNode,
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button ({children, className}: ButtonProps)  {
    return (
        <button
        className={`
            bg-primary rounded-[8px] px-[32px] py-2 text-white theme-primary
            ${className}
            `}
        >
        { children }
        </button>
    )
}

