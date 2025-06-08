import { useEffect, useState } from 'react'
import UserCard from '@/components/common/UserCard'
import { type UserProps } from '@/interfaces'

export default function UsersPage() {
    const [users, setUsers] = useState<UserProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if (loading) return <p className="p-4">Loading...</p>

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
        </div>
    )
}