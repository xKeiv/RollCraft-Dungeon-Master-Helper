import { useState } from 'react'
import Header from "./Notes/Header"
import Notes from "./Notes/Notes"


function App() {

  return (
    <div className="bg-[#0b140d] text-[#376744] h-screen font-montserrat">
      <Header />
      <Notes />
    </div>
  )
}

export default App
