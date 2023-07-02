/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects.jsx'
import NotFound from './components/NoPage/NotFound.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="skills" element={<Skills/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
