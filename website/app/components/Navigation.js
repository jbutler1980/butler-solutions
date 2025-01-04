export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Butler Solutions</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#case-studies" className="hover:text-blue-600">Case Studies</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}