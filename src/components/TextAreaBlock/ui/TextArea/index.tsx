import styles from './TextArea.module.scss';

export const TextArea = () => {
    return (
        <textarea
            placeholder="Задать вопрос"
            className={styles.textArea}
            name="chatArea"
            id="chatArea"
        ></textarea>
    );
};
