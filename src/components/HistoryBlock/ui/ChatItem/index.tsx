import styles from './ChatItem.module.scss';

interface ChatItemProps {
    name: string;
    lastText: string;
    onClick: () => void;
}

export const ChatItem = ({ name, lastText, onClick }: ChatItemProps) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <div className={styles.name}>{name}</div>
            <div className={styles.lastText}>{lastText}</div>
        </div>
    );
};
