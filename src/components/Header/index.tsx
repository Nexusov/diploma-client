import styles from './Header.module.scss';

interface HeaderProps {
    onLoginClick: () => void;
}

export const Header = ({ onLoginClick }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <img
                src="https://static.tildacdn.com/tild3635-6431-4561-a637-333931653263/Logo.svg"
                alt="logo"
            />
            <nav>
                <button className={styles.loginButton} onClick={onLoginClick}>
                    Войти
                </button>
            </nav>
        </header>
    );
};
