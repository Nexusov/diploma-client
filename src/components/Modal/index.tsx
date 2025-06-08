'use client';

import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            return;
        }

        document.body.style.overflow = '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Закрыть"
                    type="button"
                >
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body,
    );
};
