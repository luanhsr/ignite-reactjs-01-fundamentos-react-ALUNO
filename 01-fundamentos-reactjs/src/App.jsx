import { Header } from './components/Header';
import {Post} from './components/Post'
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/SideBar';

  // author {avatarUrl: "string" , name: "string" , role:""}
  // publishedAt: Date
  // content: String 

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://i.pinimg.com/originals/30/64/b4/3064b48282103769f667cca0b705703b.jpg',
        name: 'Eliot Anderson',
        role: ' Chief Information Security Officer (CISO)'
      },
      content: [
        {type: 'paragraph' , content: 'Alguma coisa disso é real? Olhe para isso. Olhe! Um mundo construído em fantasia.' },
        {type: 'paragraph' , content:  'Emoções sintéticas em pílulas, guerra psicológica em propagandas, produtos químicos em comida que alteram a mente, seminários de lavagem cerebral em mídia, bolhas de controle em forma de redes sociais.'},
        {type: 'link' , content: 'https://www.vulnhub.com'},
      ],
      publishedAt: new Date ('2024-15-03 04:51:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://pin.it/1TSrlMU7d',
        name: 'Ronaldinho Gaucho',
        role: 'Jogador de Futebol Aposentado - Bruxo'
      },
      content: [
        {type: 'paragraph' , content: 'Para quem está acostumado com a torcida do Flamengo, isso não é muito barulho, não"' },
        {type: 'link' , content: 'https://www.flamengo.com.br'},
      ],
      publishedAt: new Date ('2024-15-0 04:55:00'),
    },
    
  ]


export function App() {
  return (
    <div>
      <Header>
        
      </Header>
      <div className={styles.wrapper}>

        <Sidebar>
          
        </Sidebar>

        <main>
        {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>

  )
}

