import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import styles from "/src/Componentes/Galeria/galeria.module.css";


function Galeria() {
    const [personagens, pegarFullPerson] = useState("vazio")

    const getFullPerson = async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        pegarFullPerson(response.data.results)
        
    }
    useEffect(()=>{
        getFullPerson()
    })
    
    return (
        <div className={styles.back}>
            <h1 className={styles.textoh1}>Galeria de Personagens</h1>
            {/* <button className={styles.botao} onClick={getFullPerson}>PESQUISAR PERSONAGENS</button> */}
            {personagens !== "vazio" && (
                <ul>
                    {personagens.map((item, index) => (
                        <div className={styles.box}>
                            <img src={item.image} alt={item.name} key={index} />
                            <li key={index}>Nome: {item.name}</li>
                            <li key={index}>Status: {item.status}</li>
                            <li key={index}>Especie: {item.species}</li>
                            <li key={index}>Gênero: {item.gender}</li>
                            
                        </div>
                    ))}
                </ul>
            )}


        </div>
    )
}


export default Galeria