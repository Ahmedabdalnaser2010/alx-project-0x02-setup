import Button from "@/components/common/Button"

export default function AboutPage() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">About Page</h1>
            <div className="flex flex-col gap-4">
                <Button size="small" shape="rounded-sm">
                    Small Button
                </Button>
                <Button size="medium" shape="rounded-md">
                    Medium Button
                </Button>
                <Button size="large" shape="rounded-full">
                    Large Button
                </Button>
            </div>
        </div>
    )
}