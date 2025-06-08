import { ContextGroupItem } from '../ContextGroupItem';
import FileSVG from '@/icons/file.svg';
import PencilSVG from '@/icons/pencil.svg';
import styles from './ContextControlGroup.module.scss';

export const ContextControlGroup = () => {
    return (
        <div className={styles.container}>
            <ContextGroupItem
                title="Добавить файл"
                description="Прикрепите файл с информацией о проекте"
                icon={<FileSVG />}
            />
            <ContextGroupItem
                title="Добавить контекст о проекте"
                description="Напишите информацию о проекте"
                icon={<PencilSVG />}
            />
        </div>
    );
};
