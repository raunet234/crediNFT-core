import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind + Shadcn is working! 🎉</h1>
      <Button>Click Me</Button>
    </main>
  )
}
