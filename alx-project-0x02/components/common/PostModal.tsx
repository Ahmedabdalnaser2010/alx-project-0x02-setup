import { type CardProps, type ModalProps } from '@/interfaces'
import React, { useState } from 'react'

const PostModal: React.FC<ModalProps> = ({ onClose, isOpen, onSubmit }) => {

    const [post, setPost] = useState<CardProps>({
        title: "", content: ""
    })

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(post.title, post.content)
        onClose()


    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" id='title' name='title' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
            <label htmlFor="content">content</label>
            <input type="text" id='content' name='content' value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} />
            <button type='button' onClick={onClose}>Cancel</button>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PostModal
