Сторінка книжкової крамниці «Хармс».


## Розробка

### Вимоги

Системні: `node.js git git-subtree ruby compass`

Вимоги node.js: `npm install -g yo`

### Локальний сервер

Запуск сервера на localhost:9000

    grunt server

### Запуск на Github pages

Команди виконувати з кореневої папки:

    # Будуємо
    grunt build

    # Коміт побудованих файлів
    git add dist && git commit -m "..."

    # Власне запуск
    git subtree push --prefix dist gh-pages

## Ліцензія

MIT (Expat)



