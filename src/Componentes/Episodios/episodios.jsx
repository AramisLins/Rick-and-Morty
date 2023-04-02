import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '/src/Componentes/Episodios/episodios.module.css'
import { Link }  from 'react-router-dom'


function Episodios() {
    const [chapter, setChapter] = useState([])

    async function GetChapter() {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21`)
        setChapter(response.data)
    }
    useEffect(() => {
        GetChapter()
    })

    return (
        <div>
            <h1 className={styles.inicio}>Episodios</h1>
            {chapter !== "vazio" && (
                <ul>
                    {chapter.map((item, index) => (
                        <div className={styles.card}>
                            <Link to="./src/Componentes/Cards/cards.jsx">
                                <img className={styles.foto} src="./src/assets/logo.jpg" alt={item.name} key={index} />
                                <li key={index} className={styles.text}>{item.name}</li>
                                <li key={index} className={styles.text}>{item.air_date}</li>
                                <li key={index} className={styles.text}>{item.episode}</li>
                            </Link>
                        </div>

                    ))}
                </ul>
            )}


        </div>
    )
}

export default Episodios