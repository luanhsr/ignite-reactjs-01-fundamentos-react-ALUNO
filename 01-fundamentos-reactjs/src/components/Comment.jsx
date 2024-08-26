import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment ({content , onDeleteComment}) {
    function handleDeletComment () {
        onDeleteComment(content);
    }
    return (
        <div className={styles.comment}>

            <Avatar 
                hasBorder={false}
                src="https://images.8tracks.com/cover/i/010/113/033/e1e3c8944fedfc713dcac39606232597-4832.jpg?rect=0,0,736,736&q=98&fm=jpg&fit=max&w=300&h=300" 
                alt="" 
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Darlene Alderson</strong>
                            <time title = "24 de Julho as 11:34h" dateTime="2024-07-25 09:07:30">Cerca de 2H atras</time>
                        </div>
                        <button onClick={handleDeletComment} title='Deletar comentario'> <Trash size={24} /> </button>
                    </header>
                    <p>
                        {content}
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