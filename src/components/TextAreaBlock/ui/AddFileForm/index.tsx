'use client';

import { useRef, useState } from 'react';
import FileSVG from '@/icons/file.svg';
import styles from './AddFileForm.module.scss';

export const AddFileForm = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    return (
        <form className={styles.form}>
            <h2 className={styles.title}>Загрузка файла</h2>

            <div className={styles.uploadArea} onClick={handleClick}>
                {selectedFile ? (
                    <div className={styles.fileName}>{selectedFile.name}</div>
                ) : (
                    <div className={styles.svgGroup}>
                        <FileSVG className={styles.icon} />
                        <p>Выберите файл</p>
                    </div>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    className={styles.hiddenInput}
                    onChange={handleFileChange}
                />
            </div>

            <button className={styles.button}>Добавить</button>
        </form>
    );
};
