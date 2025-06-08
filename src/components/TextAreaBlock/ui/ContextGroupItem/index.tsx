import { ReactNode } from 'react';
import styles from './ContextGroupItem.module.scss';

interface ContextGroupItemProps {
    title: string;
    description: string;
    icon: ReactNode;
    onClick: () => void;
}

export const ContextGroupItem = ({ title, description, icon, onClick }: ContextGroupItemProps) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.lastText}>{description}</div>
            </div>
            <div className={styles.icon}>{icon}</div>
        </div>
    );
};
