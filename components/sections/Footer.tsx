import Link from 'next/link'
import { Mail, Phone, Linkedin, Instagram, Facebook, MapPin, Clock } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Sites Web Vitrine', href: '/services#sites-web' },
    { name: 'E-commerce', href: '/services#ecommerce' },
    { name: 'Applications Web', href: '/services#applications' },
    { name: 'Optimisation SEO', href: '/services#seo' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/quentin-dwebcreation',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dwebcreation',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/dwebcreation',
      icon: Facebook,
    },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      {/* Animated soft gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-10 bg-orange-300 dark:bg-orange-600 animate-pulse" />
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-5 bg-yellow-300 dark:bg-yellow-600 animate-pulse" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">D Web Créations</span>
            </Link>
            <p className="mt-6 max-w-md text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg leading-relaxed">
              Développeur web freelance à Clermont-Ferrand, je crée des sites web modernes et performants pour faire grandir votre business.
            </p>
            <div className="mt-8 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-orange-900 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 mb-6">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-base">quentin@dwebcreations.fr</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-base">+33 6 11 38 62 37</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-base">Clermont-Ferrand, France</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-base">Lun-Ven : 9h-17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300" />
        
        {/* Bas de page */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 text-sm">
            © 2025 D Web Créations. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
