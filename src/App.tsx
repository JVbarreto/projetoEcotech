import React from 'react';
import { Leaf, Lightbulb, Recycle, ChevronRight, Sun, Wind, Droplets } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EcoTech Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600 transition">Início</a>
              <a href="#solutions" className="text-gray-600 hover:text-green-600 transition">Soluções</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition">Sobre</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Soluções Sustentáveis para um Futuro Melhor
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transformando o mundo através da tecnologia verde e inovação sustentável.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full flex items-center hover:bg-green-700 transition">
                Saiba mais
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800"
                alt="Sustainable Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg">
              <Sun className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Solar</h3>
              <p className="text-gray-600">Soluções de energia solar eficientes e personalizadas para sua casa ou empresa.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Wind className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Eólica</h3>
              <p className="text-gray-600">Tecnologia de ponta em energia eólica para geração sustentável.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Droplets className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Água</h3>
              <p className="text-gray-600">Sistemas inteligentes para economia e reuso de água.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800"
                alt="Nossa Missão"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
              <p className="text-gray-600 mb-6">
                Na EcoTech Solutions, nossa missão é desenvolver e implementar soluções tecnológicas
                sustentáveis que contribuam para um futuro mais verde e consciente.
              </p>
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">Inovação Sustentável</span>
              </div>
              <div className="flex items-center">
                <Recycle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">Compromisso Ambiental</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Entre em Contato</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold">EcoTech Solutions</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-sm">
                Transformando o futuro através de soluções sustentáveis e tecnologia verde.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Carreira</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Soluções</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Energia Solar</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Energia Eólica</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Gestão de Água</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacidade</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Termos</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoTech Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;