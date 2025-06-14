
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

export interface PostProps {
    id: number
    title: string
    body: string
    userId: number
}

// Add to existing interfaces
export interface Geo {
    lat: string
    lng: string
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface UserProps {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}