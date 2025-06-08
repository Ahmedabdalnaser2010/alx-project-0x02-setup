import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'
import React, { useState } from 'react'

const home = () => {

    const [isModalOpened, setIsModalOpened] = useState(false)
    const [postcontent, setPostContent] = useState([
        {
            title: 'project one', content: 'hello project one'
        },
        {
            title: 'project two', content: 'hello project two'

        },
        {
            title: 'project three', content: 'hello project three'
        }
    ])
    const handleAddPost = (title: string, content: string) => {
        setPostContent([...postcontent, { title, content }])
    }

    return (
        <>
            <Header />
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Home Page</h1>
                <button
                    onClick={() => setIsModalOpened(true)}
                    className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
                >
                    Add New Post
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {postcontent.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))}
                </div>
                <PostModal
                    isOpen={isModalOpened}
                    onClose={() => setIsModalOpened(false)}
                    onSubmit={handleAddPost}
                />
            </div>
        </>

    )
}

export default home
