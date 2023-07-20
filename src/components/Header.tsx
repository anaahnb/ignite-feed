import styles from './Header.module.css';
import ignteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignteLogo} alt="Logotipo Ignite" />
        </header>
    );
}