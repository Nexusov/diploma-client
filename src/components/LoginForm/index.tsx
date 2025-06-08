'use client';

import { useState } from 'react';
import { Input } from '@/components';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={styles.form}>
            <h2 className={styles.title}>Вход</h2>
            <div className={styles.inputGroup}>
                <Input type="text" placeholder="Логин" value={login} onChange={setLogin} required />
            </div>
            <div className={styles.inputGroup}>
                <Input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={setPassword}
                    required
                />
            </div>
            <button type="submit" className={styles.loginButton}>
                Войти
            </button>
        </form>
    );
};
