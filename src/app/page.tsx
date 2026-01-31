import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Navigation */}
      <header className="w-full py-6 px-8 flex items-center justify-between">
        <h1 className="text-xl font-bold">I-WILL Laboratory</h1>
        <nav className="flex items-center gap-4">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <Link href="/arc-01" className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm">ARC-01</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">I-WILL Laboratory</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Innovating at the intersection of immersive interaction, robotics, and human-centered design. We research, prototype, and deploy creative technology solutions to real-world problems.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/arc-01" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold">Explore ARC-01</Link>
            <a href="#about" className="text-gray-300 hover:underline">Learn more</a>
          </div>

          <div className="mt-12 text-sm text-gray-400">Tip: Click "Explore ARC-01" to open the interactive dashboard for the ARC-01 project.</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About I-WILL Laboratory</h3>
          <p className="text-gray-300 mb-4">I-WILL Laboratory is a multidisciplinary research group focused on interactive systems, robotics, and immersive experiences. We collaborate with industry, academic partners, and the wider community to build prototypes, run user studies, and publish open-source tools.</p>

          <ul className="grid gap-3 md:grid-cols-3 mt-6">
            <li className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Research</h4>
              <p className="text-gray-400 text-sm">Exploring novel human-machine interactions, AI-assisted robotics, and tangible interfaces.</p>
            </li>
            <li className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Prototyping</h4>
              <p className="text-gray-400 text-sm">Rapid prototyping of hardware and software to validate ideas and inform design decisions.</p>
            </li>
            <li className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Education</h4>
              <p className="text-gray-400 text-sm">Workshops, student projects, and open materials to grow the next generation of creators.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Selected Projects</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-xl mb-2">ARC-01 (Interactive Dashboard)</h4>
                <p className="text-gray-400 mb-4">A dynamic Rive-based dashboard combining data visualization and interactive storytelling. Ideal for demonstrations and research showcases.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/arc-01" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">Open ARC-01</Link>
                <a href="#contact" className="text-gray-300 text-sm hover:underline">Contact team</a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-2">Robotics & Field Trials</h4>
              <p className="text-gray-400">Field-deployable robotic platforms for environmental monitoring and assistive applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
          <p className="text-gray-300 mb-6">For collaboration, demos or research inquiries, reach out to <a href="mailto:hello@iwill.example" className="text-purple-400 hover:underline">hello@iwill.example</a>.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="mailto:hello@iwill.example" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-md">Email Us</a>
            <a href="#" className="text-gray-300 hover:underline">Join our mailing list</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} I-WILL Laboratory — Built with ❤️ by the team
      </footer>
    </main>
  );
}
