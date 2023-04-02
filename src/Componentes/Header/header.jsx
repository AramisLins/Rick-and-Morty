
import styles from "/src/Componentes/Header/header.module.css"
import { Link } from 'react-router-dom'

function Header(){

    return (
        <>
        <header>
            <h1>The Rick and Morty</h1>
            <nav>
                <ul className={styles.lista}> 
                    <li> <Link to="/">Inicio</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/episodios">Episódios</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )

}

export default Header