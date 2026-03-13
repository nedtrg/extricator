import Navbar from '@/components/layout/Navbar'

export default function Roadmap() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#0a0008' }}>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-white text-4xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
          Roadmap — Coming Soon
        </h1>
      </div>
    </main>
  )
}
