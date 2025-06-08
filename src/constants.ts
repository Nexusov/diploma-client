export const chatData = [
    {
        name: 'Валидация для формы создания заявки',
        lastText:
            'Нормализуй до 11 цифр. Принимаем +7 и 8, удаляем скобки и пробелы перед отправкой.',
        messages: [
            {
                id: 1,
                text: 'В форме заявки поле ФИО — не принимает фамилии с дефисом, типа Иванов-Петров. Это нормально?',
                isCurrentUser: false,
            },
            {
                id: 2,
                text: 'По умолчанию поле ФИО допускает только буквы, пробелы и дефис. Нужно проверить регулярку.',
                isCurrentUser: true,
            },
            { id: 3, text: 'Какая регулярка считается допустимой?', isCurrentUser: false },
            {
                id: 4,
                text: 'Пример: /^[А-Яа-яA-Za-z\\s-]{2,100}$/ — буквы, пробелы, дефис, от 2 до 100 символов.',
                isCurrentUser: true,
            },
            {
                id: 5,
                text: 'А что по телефону? Разные форматы ломают валидацию.',
                isCurrentUser: false,
            },
            {
                id: 6,
                text: 'Нормализуй до 11 цифр. Принимаем +7 и 8, удаляем скобки и пробелы перед отправкой.',
                isCurrentUser: true,
            },
            { id: 7, text: 'А если число меньше 11 цифр после удаления?', isCurrentUser: false },
            {
                id: 8,
                text: 'Тогда это ошибка — нужно вывести сообщение об этом.',
                isCurrentUser: true,
            },
            { id: 9, text: 'Можно ли отправлять форму без email?', isCurrentUser: false },
            {
                id: 10,
                text: 'Если это поле не обязательно — можно, но стоит это явно указывать в интерфейсе.',
                isCurrentUser: true,
            },
        ],
    },
    {
        name: 'UX поведения при создании заявки',
        lastText: 'Показать toast или текст сверху формы. И кнопку снова разблокировать.',
        messages: [
            {
                id: 1,
                text: 'Нужно ли показывать спиннер на кнопке отправки?',
                isCurrentUser: false,
            },
            {
                id: 2,
                text: 'Да. Пользователь должен видеть, что идёт отправка.',
                isCurrentUser: true,
            },
            { id: 3, text: 'И сразу блокировать кнопку, да?', isCurrentUser: false },
            { id: 4, text: 'Да, иначе могут быть двойные отправки.', isCurrentUser: true },
            {
                id: 5,
                text: 'После успешной отправки сбрасываем форму или нет?',
                isCurrentUser: false,
            },
            {
                id: 6,
                text: 'Сбрасываем, и желательно показать подтверждение — например, toast.',
                isCurrentUser: true,
            },
            { id: 7, text: 'Если ошибка на бэке — как отобразить?', isCurrentUser: false },
            {
                id: 8,
                text: 'Показать toast или текст сверху формы. И кнопку снова разблокировать.',
                isCurrentUser: true,
            },
            {
                id: 9,
                text: 'Нужно ли фокусить первый пустой input при валидации?',
                isCurrentUser: false,
            },
            {
                id: 10,
                text: 'Хорошая практика — да. Это ускоряет исправление ошибки.',
                isCurrentUser: true,
            },
        ],
    },
    {
        name: 'Дизайн и адаптивность формы',
        lastText:
            'Ты можешь использовать нативный `<select>`, или стилизовать с учётом тач-интерфейса для мобильных и планшетных устройств. Вот как это можно сделать:.',
        messages: [
            { id: 1, text: 'Какая минимальная ширина для мобильной формы?', isCurrentUser: false },
            {
                id: 2,
                text: 'Ориентируйся на 320px. Лучше — 360px. Используй % и min-width.',
                isCurrentUser: true,
            },
            { id: 3, text: 'Полям нужно задавать фиксированную высоту?', isCurrentUser: false },
            {
                id: 4,
                text: 'Не обязательно, но стоит задать min-height, чтобы текст не обрезался.',
                isCurrentUser: true,
            },
            {
                id: 5,
                text: 'Инпуты часто вылетают за границы на iPhone SE. Как решить?',
                isCurrentUser: false,
            },
            {
                id: 6,
                text: 'Проверь padding и box-sizing. Также проверь масштаб страницы (viewport).',
                isCurrentUser: true,
            },
            { id: 7, text: 'Нужно ли адаптировать dropdown под мобильные?', isCurrentUser: false },
            {
                id: 8,
                text: 'Да. Или использовать нативный `<select>`, или стилизовать с учётом тач-интерфейса.',
                isCurrentUser: true,
            },
        ],
    },
    {
        name: 'Обработка ошибок при отправке',
        lastText: 'Лучше подсвечивать поля и показывать сообщения под ними.',
        messages: [
            {
                id: 1,
                text: 'Какие коды ошибок нужно обрабатывать на клиенте?',
                isCurrentUser: false,
            },
            {
                id: 2,
                text: '400 (валидация), 401/403 (доступ), 500 (сервер). Для каждого — своя реакция.',
                isCurrentUser: true,
            },
            { id: 3, text: 'Нужно ли логировать ошибки?', isCurrentUser: false },
            {
                id: 4,
                text: 'В проде — нет, но можно отправлять в Sentry или аналог.',
                isCurrentUser: true,
            },
            { id: 5, text: 'Что показывать при 500?', isCurrentUser: false },
            {
                id: 6,
                text: 'Что-то нейтральное: "Ошибка сервера. Попробуйте позже."',
                isCurrentUser: true,
            },
            { id: 7, text: 'А при валидации?', isCurrentUser: false },
            {
                id: 8,
                text: 'Лучше подсвечивать поля и показывать сообщения под ними.',
                isCurrentUser: true,
            },
        ],
    },
    {
        name: 'Форма и сохранение состояния',
        lastText: 'Да, лимит ~5 МБ. Храни только нужное и очищай после отправки.',
        messages: [
            {
                id: 1,
                text: 'Хочу сохранять состояние формы при переходе между страницами. Это норм?',
                isCurrentUser: false,
            },
            {
                id: 2,
                text: 'Да. Используй localStorage или global state, например Zustand.',
                isCurrentUser: true,
            },
            { id: 3, text: 'Какие поля стоит сохранять, а какие — нет?', isCurrentUser: false },
            {
                id: 4,
                text: 'Только те, что пользователь заполняет вручную. Генерируемые или системные — нет.',
                isCurrentUser: true,
            },
            {
                id: 5,
                text: 'Нужно ли показывать пользователю, что данные восстановлены?',
                isCurrentUser: false,
            },
            {
                id: 6,
                text: 'Желательно — "данные восстановлены из черновика".',
                isCurrentUser: true,
            },
            { id: 7, text: 'localStorage может переполниться?', isCurrentUser: false },
            {
                id: 8,
                text: 'Да, лимит ~5 МБ. Храни только нужное и очищай после отправки.',
                isCurrentUser: true,
            },
        ],
    },
    {
        name: 'Интеграция с backend',
        lastText: 'Оборачивай в try/catch и проверяй `error.response` и `error.message`',
        messages: [
            {
                id: 1,
                text: 'Какой формат предпочтителен — JSON или FormData?',
                isCurrentUser: false,
            },
            {
                id: 2,
                text: 'Если без файлов — JSON. Если с файлами — только FormData.',
                isCurrentUser: true,
            },
            { id: 3, text: 'Нужно ли делать сериализацию вручную?', isCurrentUser: false },
            {
                id: 4,
                text: 'Для JSON — да, через `JSON.stringify()`. Для FormData — вручную добавляешь поля.',
                isCurrentUser: true,
            },
            { id: 5, text: 'Какой Content-Type указать?', isCurrentUser: false },
            {
                id: 6,
                text: 'Для JSON — application/json. Для FormData вообще не указывать — браузер сам проставит.',
                isCurrentUser: true,
            },
            { id: 7, text: 'Что возвращает API при успехе?', isCurrentUser: false },
            {
                id: 8,
                text: 'Обычно статус 200 или 201 и тело: { success: true } или id новой заявки.',
                isCurrentUser: true,
            },
            { id: 9, text: 'Как отлавливать ошибки сети?', isCurrentUser: false },
            {
                id: 10,
                text: 'Оборачивай в try/catch и проверяй `error.response` и `error.message`.',
                isCurrentUser: true,
            },
        ],
    },
];
