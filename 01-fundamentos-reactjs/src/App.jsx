import { Header } from './components/Header';
import {Post} from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/SideBar';
export function App() {
  return (
    <div>
      <Header>
        
      </Header>
      <div className={styles.wrapper}>

        <Sidebar>
          
        </Sidebar>

        <main>
          <Post
          author = "Irineu voce n sabe e nem eu"
          content = "A cada flagrante, uma reação negativa, Além do gesto obsceno. Nenhuma vontade de falar com a reportagem, - Você não vai falar o nome do senhor pra gente? Irineu, você não sabe nem eu!"
          />
          <Post
            author = "Luan"
            content ="Eu n sei oq to fazendo kakakaka" 
          />
        </main>
      </div>

    </div>

  )
}

