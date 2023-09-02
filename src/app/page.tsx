import { Fragment } from 'react'
import LeftNav from '@/components/LeftNav'
import RightNav from '@/components/RightNav'
import Main from '@/components/Main'

export default function Home() {
  return (
    <main className='h-screen w-full flex'>
      <LeftNav/>
      <Main/>
      <RightNav/>
    </main>
  )
}
