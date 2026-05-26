'use client'

import { Suspense } from 'react'
import Navbar from './navbar'

function NavbarContent() {
  return <Navbar />
}

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="h-16" />}>
      <NavbarContent />
    </Suspense>
  )
}
