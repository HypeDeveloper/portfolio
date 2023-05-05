import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLoading } from './components/loading'
import Home from './pages/home'
import { Layout } from './pages/layouts'


// style

import { GridDots } from './components/tools'
import NavBar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import './style/main.css'
import './style/responsive.css'
import { ProjectId } from './pages/projectId'
import NotFound from './pages/404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  const [doneLoading, setDoneLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDoneLoading(true)
    }, 11000)
  }, [])
  return (

    <>
      <GridDots />
      {doneLoading ? <RouteLayout /> : <MainLoading />}


    </>
  )
}

function RouteLayout() {
  return (
    <>

      <BrowserRouter>
      <NavBar />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Layout />} >
              <Route index element={<Projects/>}/>
              <Route path=':id' element={<ProjectId/>}/>
            </Route>
            <Route path='contact' element={<Contacts />} />
          </Route>
          <Route path='404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}