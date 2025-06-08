import { ChatItem } from './ui';
import { chatData } from '@/constants';
import styles from './HistoryBlock.module.scss';

interface Message {
    id: number;
    text: string;
    isCurrentUser: boolean;
}

export interface SelectedChatType {
    name: string;
    lastText: string;
    messages: Message[];
}

interface HistoryBlockProps {
    onChatClick: (chat: SelectedChatType) => void;
}

export const HistoryBlock = ({ onChatClick }: HistoryBlockProps) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>История</h1>
            {chatData.map((item, index) => (
                <ChatItem
                    key={index}
                    name={item.name}
                    lastText={item.lastText}
                    onClick={() => onChatClick(item)}
                />
            ))}
        </section>
    );
};
