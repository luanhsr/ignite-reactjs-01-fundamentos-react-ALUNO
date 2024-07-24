import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
              <img 
                className= {styles.avatar}
                src="https://scontent.fmii8-1.fna.fbcdn.net/v/t39.30808-6/439953862_122104102826289452_624579252792590806_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=K_LeXKH1Mk8Q7kNvgH1ktcz&_nc_ht=scontent.fmii8-1.fna&oh=00_AYCdv2NGpxGhuOxiBfQRKtZxkCIiRKKexdVIuM6b9Xznnw&oe=66A6F5DB"
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
      </article>
      
  )
}
