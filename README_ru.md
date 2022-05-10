### Интерфейс
![Sample screenshot](https://x0.at/RegY.png)



### Детали

Веб клиент для Telegram разработанный с использованием ReactJS и TDLib. Посмотреть можно [здесь](https://exterasquad.github.io/web).

### Запуск
1. **Получите API ключи.**

[Подробнее, где их получить](https://github.com/telegramdesktop/tdesktop/blob/dev/docs/api_credentials.md)

2. **Вставьте их в .env файл**

Самостоятельно вставьте их на место REACT_APP_TELEGRAM_API_ID и REACT_APP_TELEGRAM_API_HASH в .env файле.

3. **Установите node.js & npm**
Вероятно, вам понадобится [nvm](https://github.com/nvm-sh/nvm).

4. **Установите зависимости.**

```bash
npm install
```
Все файлы библиотеки TDLib установятся в node_modules/tdweb/dist/. 

5. **Самостоятельно скопируйте файлы TDLib в /public.**

```bash
cp node_modules/tdweb/dist/* public/
```

6. **Запустите приложение.**

```bash
npm start
```

Откройте http://localhost:3000 в браузере.


