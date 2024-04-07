import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Banner from './banner/Banner'
import MyTech from './mytechs/MyTech'
import Projects from './projects/Projects'
import Footer from './footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <MyTech/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
''