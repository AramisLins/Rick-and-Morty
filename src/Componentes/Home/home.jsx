import styles from "/src/Componentes/Home/home.module.css"


function Home(){
    return (
        <>
            <main>
                <div className={styles.fundoVideo}>
                <video className={styles.video} autoplay loop muted>
                    <source src="/src/Componentes/Home/fundo.mp4"></source>
                </video>
                </div>
                <div className={styles.corpo}>
                    <p className={styles.text}> “Rick and Morty” é uma animação estadunidense de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim. A série narra as aventuras de Rick, um cientista alcoólatra e de seu neto Morty, um adolescente que acompanha seu avô em suas jornadas através das dimensões intergalácticas.</p>
                    <img className={styles.img} src="./src/Componentes/Home/foto.png"></img>
                </div>
            </main>
        
        </>
    )
}

export default Home