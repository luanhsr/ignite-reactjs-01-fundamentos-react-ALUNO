import { Avatar } from './Avatar';
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar () {
    return (
        <aside className={style.sidebar} >
         <img 
            src='https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="" 
         />
            <div className= {style.profile}>
                <Avatar
                    src="https://i.pinimg.com/originals/30/64/b4/3064b48282103769f667cca0b705703b.jpg"       
                /> 
                    
              
                <strong>Eliot Anderson</strong>
                <span>Hacker / Pentester </span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}