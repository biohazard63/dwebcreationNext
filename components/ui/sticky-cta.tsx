'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.3)
    }
    
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <Link 
        href="/contact"
        className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-2xl hover:shadow-orange-500/25 dark:hover:shadow-orange-400/25 transform hover:scale-105 transition-all duration-300 font-medium"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Demander un devis</span>
      </Link>
    </div>
  )
}
