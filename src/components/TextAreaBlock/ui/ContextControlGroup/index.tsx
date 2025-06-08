'use client';

import { ContextGroupItem } from '../ContextGroupItem';
import FileSVG from '@/icons/file.svg';
import PencilSVG from '@/icons/pencil.svg';
import styles from './ContextControlGroup.module.scss';
import { useState } from 'react';
import { Modal } from '@/components/Modal';
import { AddFileForm } from '../AddFileForm';
import { AddContextForm } from '../AddContextForm';

type ModalType = 'file' | 'text' | null;

export const ContextControlGroup = () => {
    const [modalType, setModalType] = useState<ModalType>(null);

    const handleClose = () => setModalType(null);

    return (
        <>
            <div className={styles.container}>
                <ContextGroupItem
                    title="Добавить файл"
                    description="Прикрепите файл с информацией о проекте"
                    icon={<FileSVG />}
                    onClick={() => setModalType('file')}
                />
                <ContextGroupItem
                    title="Добавить контекст о проекте"
                    description="Напишите информацию о проекте"
                    icon={<PencilSVG />}
                    onClick={() => setModalType('text')}
                />
            </div>

            <Modal open={!!modalType} onClose={handleClose}>
                {modalType === 'file' && <AddFileForm />}
                {modalType === 'text' && <AddContextForm />}
            </Modal>
        </>
    );
};
