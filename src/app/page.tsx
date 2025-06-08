'use client';

import { useState } from 'react';
import styles from './main.module.scss';
import {
    Header,
    HistoryBlock,
    LoginForm,
    Modal,
    SideBar,
    TextAreaBlock,
    ChatPage,
} from '@/components';
import type { SelectedChatType } from '@/components/HistoryBlock';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [activeChat, setActiveChat] = useState<SelectedChatType | null>(null);

    const handleChatClick = (chat: SelectedChatType) => {
        setActiveChat(chat);
        setChatOpen(true);
    };

    return (
        <div className={styles.wrapper}>
            <SideBar />
            <div className={styles.main}>
                <Header onLoginClick={() => setModalOpen(true)} />
                <main className={styles.container}>
                    {chatOpen && activeChat ? (
                        <ChatPage chat={activeChat} onClose={() => setChatOpen(false)} />
                    ) : (
                        <>
                            <TextAreaBlock />
                            <HistoryBlock onChatClick={handleChatClick} />
                        </>
                    )}
                </main>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <LoginForm />
            </Modal>
        </div>
    );
}
