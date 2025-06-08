import { UserProps } from '@/interfaces'

export default function UserCard({ name, email, address, company }: UserProps) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {email}
            </p>
            <p className="text-gray-600 mb-1">
                <span className="font-medium">Address:</span> {address.suite}, {address.street}, {address.city}
            </p>
            <p className="text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {company.name}
            </p>
            <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
        </div>
    )
}