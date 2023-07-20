import styles from './Avatar.module.css'

interface AvatarProps {
    border?: boolean;
    src: string;
}

export function Avatar({border = true, src}: AvatarProps) {
    return (
        <img className={ border ? styles.avatarBorder : styles.avatar} src={src} />
    )
}