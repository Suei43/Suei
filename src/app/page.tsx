import { Fragment } from 'react'
import LeftNav from '@/components/LeftNav'
import RightNav from '@/components/RightNav'
import Main from '@/components/Main'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className='w-screen flex flex-col'>
      <LeftNav/>
      <RightNav/>
      <Main/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}
