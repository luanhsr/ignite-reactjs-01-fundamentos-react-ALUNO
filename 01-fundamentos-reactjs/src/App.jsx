import { Header } from './components/Header';
import {Post} from './components/Post'
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/SideBar';
import './global.css';

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
    publishedAt: new Date('2024-08-19 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/564x/22/0b/d3/220bd39d2bf6c9b951fafec3d98d162d.jpg',
      name: 'Ronaldinho Gaucho',
      role: 'Jogador de Futebol Aposentado - Bruxo'
    },
    content: [
      {type: 'paragraph' , content: 'Para quem está acostumado com a torcida do Flamengo, isso não é muito barulho, não"' },
      {type: 'link' , content: 'https://www.flamengo.com.br'},
    ],
    publishedAt: new Date('2024-05-08 20:00:00'),
  },
  
]
export function App() {
  return (
            <div>
                <Header/>
                <div className={styles.wrapper}>
                  <Sidebar />
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