import { Header } from './components/Header';
import {Post} from './components/Post'
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
          <Post>
            
          </Post>
        </main>
      </div>

    </div>

  )
}

