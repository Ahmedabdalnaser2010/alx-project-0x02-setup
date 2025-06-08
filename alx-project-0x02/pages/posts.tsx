import { useEffect, useState } from 'react'
import PostCard from '../components/common/PostCard'
import { PostProps } from '../interfaces'
import Header from '@/components/layout/Header'

export default function PostsPage() {
    const [posts, setPosts] = useState<PostProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setPosts(data.slice(0, 10)) // Get first 10 posts
            } catch (error) {
                console.error('Error fetching posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) return <p className="p-4">Loading...</p>

    return (
        <>
            <Header />
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-6">Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </>
    )
}