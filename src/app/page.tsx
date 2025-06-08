'use client';

import { useState } from 'react';
import styles from './main.module.scss';
import { Header, HistoryBlock, LoginForm, Modal, SideBar, TextAreaBlock } from '@/components';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <SideBar />
            <div className={styles.main}>
                <Header onLoginClick={() => setModalOpen(true)} />
                <main className={styles.container}>
                    <TextAreaBlock />
                    <HistoryBlock />
                </main>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <LoginForm />
            </Modal>
        </div>
    );
}
