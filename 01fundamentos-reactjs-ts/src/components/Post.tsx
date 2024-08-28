import { format, formatDistanceToNow } from 'date-fns'; 
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: 'string';
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}
// definido as 'propriedades' do objeto Post, na verdade definindo todas as tipagem dos atributos do post
// para que o js compreenda
/* 
Outra maneira de fazer o codigo a cima que eu gostei:
interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }
  publishedAt: Date;
  content: string;
}
*/
export function Post({author, publishedAt, content}:PostProps) {
  
  const [comments, setComments] = useState ([
    'Elliot voce tomou seus remedios hoje? ja ta com ideia torta'
  ]);
  const [newCommentText, setNewCommentText] = useState ('')
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:MM'h'" ,{
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  })
  function handleCreateNewComent (event: FormEvent) {
    event.preventDefault();
    setComments ([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(''); // tinha esquecido kakaka
    setNewCommentText(event.target.value);
  }
  function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  function deleteComment (commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete;
    }) 
    setComments(commentsWithoutDeletedOne)
  }
  return (
    <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <Avatar
                  src={author.avatarUrl}
                />
                <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
                </div>
            </div>
            <time title ={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
              {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type == 'paragraph') {
              return <p key={line.content}> {line.content}</p>;
            } else if (line.type == 'link') {
              return <p key={line.content}><a href='#'> {line.content}</a></p>;
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
              name='comment'
              value={newCommentText}
              placeholder='Deixe um comentario'
              onChange={handleNewCommentChange}
              onInvalid={handleNewCommentInvalid}
              required
            />
            <footer>
                <button type='submit'> Publicar </button>
            </footer>

        </form>
        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })}
        </div>
    </article>
      
  )
}
