import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <img 
                  className= {styles.avatar}
                  src="https://i.pinimg.com/originals/30/64/b4/3064b48282103769f667cca0b705703b.jpg"
                  alt=""
                />
                <div className={styles.authorInfo}>
                  <strong>Elliot Alderson </strong>
                  <span> Chief Information Security Officer (CISO) </span>
                </div>
            </div>
            <time title = "24 de Julho as 11:34h" dateTime="2024-07-24 11:34:30">Publicado a 1H</time>
        </header>

        <div className={styles.content}>
            <p>Alguma coisa disso é real? Olhe para isso. Olhe! Um mundo construído em fantasia. </p> 
            <p>Emoções sintéticas em pílulas, guerra psicológica em propagandas, produtos químicos em comida que alteram a mente, seminários de lavagem cerebral em mídia, bolhas de controle em forma de redes sociais.</p>
            <p><a href='https://www.vulnhub.com'> vulnhub.com</a></p> {' '}
            <p><a href="#"> #Fsociedadade #AbraOsOlhos </a></p> {' '}
        </div>

        <form className={styles.comentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
              placeholder='Deixe um comentario'
            />
            <footer>
                <button type='submit'> Publicar </button>
            </footer>

        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
      
  )
}
