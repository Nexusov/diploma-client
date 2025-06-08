import { ReactNode } from 'react';
import styles from './ContextGroupItem.module.scss';

interface ContextGroupItemProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export const ContextGroupItem = ({ title, description, icon }: ContextGroupItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.lastText}>{description}</div>
            </div>
            <div className={styles.icon}>{icon}</div>
        </div>
    );
};
