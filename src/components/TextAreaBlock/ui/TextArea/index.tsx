import ArrowSVG from '@/icons/arrow.svg';
import styles from './TextArea.module.scss';

export const TextArea = () => {
    return (
        <div className={styles.wrapper}>
            <textarea
                placeholder="Задать вопрос"
                className={styles.textArea}
                name="chatArea"
                id="chatArea"
            />
            <div className={styles.icon}>
                <ArrowSVG />
            </div>
        </div>
    );
};
