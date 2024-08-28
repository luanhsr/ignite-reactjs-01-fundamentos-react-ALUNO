interface AvatarProps {
  hasBorder?: boolean; // o sinal '?' siginifica que a propriedade e opcional
  src: string;
  alt?: string;
  

}


import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
