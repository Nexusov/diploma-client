import styles from './ChatItem.module.scss';

interface ChatItemProps {
    name: string;
    lastText: string;
}

export const ChatItem = ({ name, lastText }: ChatItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.lastText}>
                {lastText}
            </div>
        </div>
    );
};

