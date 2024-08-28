import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
    /* funcoes sao declaradas assim, alem do parametro tambem e preciso
    declarar seu retorno, no caso: void (seria 'nada' pq a func em si nao retorna nada.) */
}


export function Comment ({content , onDeleteComment}:CommentProps) {
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeletComment() {
        onDeleteComment(content)
    }
    function handleLikeComment () {
        setLikeCount((state)=> {
            return state + 1
        })
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
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                                Aplaudir <span> {likeCount} </span>
                        </button>
                    
                </footer>
            </div>
        </div>
    )
}