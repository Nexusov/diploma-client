'use client';

import { useState } from 'react';
import styles from './AddContextForm.module.scss';

export const AddContextForm = () => {
    const [text, setText] = useState('');

    return (
        <form className={styles.form}>
            <h2 className={styles.title}>Контекст о проекте</h2>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Описание</label>
                <textarea
                    className={styles.textarea}
                    rows={6}
                    placeholder="Напишите информацию о проекте..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.button}>
                Сохранить
            </button>
        </form>
    );
};
