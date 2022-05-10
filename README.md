# exteraWeb

 [Russian Readme](./README_ru.md)
### Interface
![Sample screenshot](https://x0.at/RegY.png)

### Details

Web client for Telegram developed using ReactJS and TDLib. View it [here](https://exterasquad.github.io/web).

### Launch.
1. **Get the API keys.**

[Read more about where to get them](https://github.com/telegramdesktop/tdesktop/blob/dev/docs/api_credentials.md)

2. **Paste them into the .env file.**

Insert them yourself in place of REACT_APP_TELEGRAM_API_ID and REACT_APP_TELEGRAM_API_HASH in the .env file.

3. **Install node.js & npm**.
You will probably need [nvm](https://github.com/nvm-sh/nvm).

4. **Install dependencies.**

```bash
npm install
```


All TDLib library files will be installed in node_modules/tdweb/dist/. 

5. **Copy the TDLib files into /public.**.

```bash
cp node_modules/tdweb/dist/* public/
```


6. **Run the applicaton.**

```bash
npm start
```
