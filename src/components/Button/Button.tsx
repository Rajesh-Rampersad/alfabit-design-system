

export type ButtonProps = {
    children: React.ReactNode,
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button ({children, className}: ButtonProps)  {
    return (
        <button
        className={`
            bg-primary bg-opacity-50 rounded-[8px] px-[32px] py-[12px] text-white 
            ${className}`}
        >
        { children }
        </button>
    )
}

