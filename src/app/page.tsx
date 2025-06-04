"use client"

import { useState } from 'react';
import axios from 'axios';
import styles from './main.module.css'

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/ask', { question });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer('Ошибка при получении ответа');
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1 style={{marginBottom: '50px'}}>Информационно-аналитическая система для участников ИТ-проектов</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Введите ваш вопрос..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: '300px', height: '40px', marginRight: '10px' }}
          className={styles.input}
        />
        <button type="submit" disabled={loading} style={{height: '30px'}} className={styles.button}>
          {loading ? 'Загрузка...' : 'Задать вопрос'}
        </button>
      </form>
      {answer && (
        <div style={{ marginTop: '20px' }}>
          <h2>Ответ:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
