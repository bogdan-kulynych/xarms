Сторінка книжкової крамниці «Хармс».


## Розробка


### Вимоги

Системні: `git node npm ruby compass`

Yeoman: `npm install -g yo`

Локальні пакети `node.js`: `npm install`


### Локальний сервер

Запуск сервера на `localhost:9000`

    grunt server


### Запуск на Github pages

Використовується `git subtree`. Команди виконувати з кореневої папки:

    # Будуємо
    grunt build

    # Коміт побудованих файлів
    git add dist && git commit -m "..."

    # Власне запуск
    git subtree push --prefix dist gh-pages


## Ліцензія

MIT (Expat)



