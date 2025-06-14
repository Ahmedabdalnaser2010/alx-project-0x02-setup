import { type ButtonProps } from "@/interfaces"

export default function Button({
    size = 'medium',
    shape = 'rounded-md',
    children,
    onClick,
    className = ''
}: ButtonProps) {
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    }

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full'
    }

    return (
        <button
            onClick={onClick}
            className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}
        >
            {children}
        </button>
    )
}