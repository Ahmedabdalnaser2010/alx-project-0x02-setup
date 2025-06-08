import { type UserProps } from '@/interfaces'

export default function UserCard({ name, email, address, company }: UserProps) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-1">{email}</p>
            <p className="text-gray-600 mb-1">
                {address.suite}, {address.street}, {address.city}
            </p>
            <p className="text-gray-600 mb-1">{company.name}</p>
            <p className="text-sm text-gray-400">{company.catchPhrase}</p>
        </div>
    )
}