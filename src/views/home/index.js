import React from "react"

import Skill from '../../components/Skill'

import "../../styles/global.css"
import './styles.css'


function Home() {
  return (
    <>
      <section className="container">
        <div className="image-container">
          <img src="img/illustration.png" alt="Imagem da página home" />
        </div>
        <div className="home-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className='sobre'>
        <div className='about-container'>
          <h1 className="title">Sobre</h1>
          <p className='content'>Somos uma empresa de desemvolvimento
          de sites e sistemas recém criada. Essa será sua maior oportunidade
          de explorar estes jovens programadores que se protituem
          todos os dias, utilizando toda sua energia por salários baixíssimos.
          Não perca essa oportunidade, seja um membro desse grupo que
                    só tem a crescer!</p>
        </div>
      </section>
      <section className='skills'>
        <div className='about-container'>
          <h1 className="title">Skills</h1>
          <div className="skill-cards">
            <Skill image="docker" nivel="50" />
            <Skill image="javascript" nivel="50" />
            <Skill image="javascript" nivel="50" />
            <Skill image="javascript" nivel="50" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
