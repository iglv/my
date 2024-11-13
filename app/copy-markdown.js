

export default function CopyMarkdown() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Markdown Copy Extension
          </h1>
          <p className="text-xl text-gray-600">
            Transform web content into clean Markdown with just one click
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Quick Convert</h2>
            <p className="text-gray-600">
              Use Ctrl+Shift+M (Cmd+Shift+M on Mac) to instantly convert selected text
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Smart Formatting</h2>
            <p className="text-gray-600">
              Automatically handles images, links, and text formatting
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Install Extension
          </a>
        </section>
      </div>
    </main>
  )
}

    </main>
  )
}
