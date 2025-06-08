import { ChatItem } from './ui';
import styles from './HistoryBlock.module.scss';

export const HistoryBlock = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>История</h1>
            <ChatItem
                name="Валидация для формы создания заявки"
                lastText="ФИО — обязательное поле, от 2 до 100 символов, только буквы (кириллица или
                латиница), пробел и дефис."
            />
            <ChatItem
                name="Валидация для формы создания заявки"
                lastText="Телефон — обязательное поле, формат +7 (XXX) XXX-XX-XX или 8XXXXXXXXXX, допускаются только цифры, пробелы, скобки, дефис и плюс в начале, после очистки — ровно 11 цифр начиная с 7 или 8."
            />
            <ChatItem
                name="Валидация для формы создания заявки"
                lastText="E-mail — необязательное поле, но если заполнено, должно быть в формате user@example.com, только латиница, символы @, точка, дефис и нижнее подчёркивание, максимум 100 символов."
            />
        </section>
    );
};
