import { ContextControlGroup, TextArea } from './ui/';
import styles from './TextAreaBlock.module.scss';

export const TextAreaBlock = () => {
    return (
        <div className={styles.container}>
            <TextArea />
            <ContextControlGroup />
        </div>
    );
};
