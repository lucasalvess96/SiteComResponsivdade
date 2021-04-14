import MenuComponentent from "../../Components/Menu"
import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './style.css'
function ComponentAbout(){
    return(
        <>
            <MenuComponentent />
            <div id="about-aside">
                <aside>
                    <header>
                        <h2>Lucas Alves</h2>
                        <p>
                            Buscando primeiro estágio ou emprego na area de
                            Desenvolvedor WEB
                        </p>
                    </header>

                    <footer>
                        <strong>Web-Developer</strong>
                        <span>na pratica</span>
                    </footer>
                </aside>

                <main>
                    <article>
                        <img src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZWRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </article>
                    <div className="dados">
                        <h2>Lucas Eduardo Chagas Alves</h2>
                        <div className="separacaoInf"></div>
                        <h3>Dados Pessoais</h3>
                        <span>Estado Civil: Solteiro</span>
                        <span>Nacionalidade: Brasileiro</span>
                        <span>Naturalidade: Paraense</span>
                        <span>Email:Lucasalves.57@hotmail.com</span>
                    </div>
                    <div className="separacaoInf"></div>

                    <div className="infoescolar">
                        <h3>Formação Escolar</h3>
                        <span>Ensino Médio Técnico em Secretariado (Completo)</span>
                        <span>Cursando Ensino Superior, atualmente no 5º período
                        Em Sistema de Informação - Estácio - FAP</span>
                    </div>
                    <div className="separacaoInf"></div>

                    <div className="conhecimento">
                        <h3>conhecimento</h3>
                        <span>Básico HTML, CSS, JavaScript, ReactJS,</span>
                        <span>Básico GitHub</span>
                        <span>Comandos básicos de SQLServer</span>
                    </div>
                    <div className="separacaoInf"></div>

                    <div className="git">
                        <h3>GitHub</h3>
                        <Link to=" https://github.com/lucasalvess96?tab=repositories"> https://github.com/lucasalvess96?tab=repositories</Link>
                        <div className="separacaoInf"></div>
                    </div>

                    <div className="linkedin">
                    <h3>linkedin</h3>
                        <Link to="/https://www.linkedin.com/feed/"> https://www.linkedin.com/feed/</Link>
                        <div className="separacaoInf"></div>
                    </div>
                </main>
                <Link to="/" className="link-homeback"> <FiArrowLeft size={32} color="#FFF"/> </Link>
            </div>
        </>
    )
}

export default ComponentAbout