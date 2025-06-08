import UserCard from '../components/common/UserCard'
import { UserProps } from '../interfaces'

interface UsersPageProps {
    users: UserProps[]
}

export default function UsersPage({ users }: UsersPageProps) {
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

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json()

        return {
            props: {
                users,
            },
            revalidate: 60, // Optional: Re-generate page every 60 seconds
        }
    } catch (error) {
        console.error('Error fetching users:', error)
        return {
            props: {
                users: [],
            },
        }
    }
}