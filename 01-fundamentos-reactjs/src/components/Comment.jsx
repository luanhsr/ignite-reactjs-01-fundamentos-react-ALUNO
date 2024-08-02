import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
export function Comment () {
    return (
        <div className={styles.comment}>
            <img 
                src="https://images.8tracks.com/cover/i/010/113/033/e1e3c8944fedfc713dcac39606232597-4832.jpg?rect=0,0,736,736&q=98&fm=jpg&fit=max&w=300&h=300" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Darlene Alderson</strong>
                            <time title = "24 de Julho as 11:34h" dateTime="2024-07-25 09:07:30">Cerca de 2H atras</time>
                        </div>
                        <button title='Deletar comentario'> <Trash size={24} /> </button>
                    </header>
                    <p>
                        Elliot voce tomou seus remedios hoje? ja ta com ideia torta
                    </p>


                </div>
                <footer>
                        <button>
                            <ThumbsUp />
                                Aplaudir <span>20</span>
                        </button>
                    
                </footer>
            </div>
        </div>
    )
}