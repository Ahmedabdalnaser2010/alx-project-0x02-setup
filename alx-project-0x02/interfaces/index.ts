
export interface CardProps {
    title: string;
    content: string

}

export interface ModalProps {
    isOpen: boolean;
    onSubmit: (title: string, content: string) => void
    onClose: () => void
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large'
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
    children: React.ReactNode
    onClick?: () => void
    className?: string
}