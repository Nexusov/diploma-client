'use client';

import { TextArea } from '../TextAreaBlock/ui';
import styles from './ChatPage.module.scss';
import { SelectedChatType } from '@/components/HistoryBlock';

interface ChatPageProps {
    chat: SelectedChatType;
    onClose: () => void;
}

export const ChatPage = ({ chat, onClose }: ChatPageProps) => {
    return (
        <div className={styles.chatPage}>
            <header className={styles.header}>
                <h2 className={styles.title}>{chat.name}</h2>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Закрыть"
                    type="button"
                >
                    ×
                </button>
            </header>
            <div className={styles.messanger}>
                <div className={styles.messagesСontainer}>
                    {chat.messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`${styles.message} ${
                                msg.isCurrentUser ? styles.sent : styles.received
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <TextArea />
            </div>
        </div>
    );
};
