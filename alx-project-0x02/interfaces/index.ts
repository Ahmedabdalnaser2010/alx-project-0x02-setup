
export interface CardProps {
    title: string;
    content: string

}

export interface ModalProps {
    isOpen: boolean;
    onSubmit: (title: string, content: string) => void
    onClose: () => void
}