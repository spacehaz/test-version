# Дипломная работа news-explorer

## Описание
Инфраструктура фронтенда дипломной работы и вёрстка страниц макета новостного приложения, для инфраструктуры используется плотная конфигурация webpack а для вёрстки методология бэм. Ссылка на gh-pages: [https://fuchsoria.github.io/news-explorer-frontend/](https://fuchsoria.github.io/news-explorer-frontend/), на сервере: [https://news-explorer.info](https://news-explorer.info).

## Установка
Для установки необходимо наличие установленного nodejs и npm. Если установка проводится на **linux или mac** то вам может понадобиться установленная библиотека **libXi.so.6 (libxi6 libgconf-2-4)**.

Сохраните проект у себя на компьютере:

    git clone https://github.com/Fuchsoria/news-explorer-frontend.git

В корне проекта через консоль/терминал запустите команду:

    npm install
### После успешной установки станут доступны команды:
Поднятие локального сервера с режимом разработки:

    npm run dev
Сборка продакшн версии:

    npm run build

Деплой на gh-pages:

    npm run deploy
Деплой на сервер:

    npm run deploy-scp

## Основные страницы для тестирования вёрстки (gh-pages)

### Главная страница (Неавторизован)
[https://fuchsoria.github.io/news-explorer-frontend](https://fuchsoria.github.io/news-explorer-frontend)
### Страница сохраненных новостей (Авторизован)
[https://fuchsoria.github.io/news-explorer-frontend/savednews](https://fuchsoria.github.io/news-explorer-frontend/savednews)

## Дополнительные состояния вёрстки на страницах (gh-pages)

### Главная страница (Авторизован)
[https://fuchsoria.github.io/news-explorer-frontend/mainloggedin](https://fuchsoria.github.io/news-explorer-frontend/mainloggedin)
### Главная страница - Результаты (Неавторизован)
[https://fuchsoria.github.io/news-explorer-frontend/mainresultsnotloggedin](https://fuchsoria.github.io/news-explorer-frontend/mainresultsnotloggedin)
### Главная страница - Результаты (Авторизован)
[https://fuchsoria.github.io/news-explorer-frontend/mainresultsloggedin](https://fuchsoria.github.io/news-explorer-frontend/mainresultsloggedin)
### Главная страница - Поиск результатов (Неавторизован)
[https://fuchsoria.github.io/news-explorer-frontend/mainresultsloading](https://fuchsoria.github.io/news-explorer-frontend/mainresultsloading)
### Главная страница - Нет результатов (Неавторизован)
[https://fuchsoria.github.io/news-explorer-frontend/mainresultsnoresults](https://fuchsoria.github.io/news-explorer-frontend/mainresultsnoresults)

## Команды для тестирования вёрстки:
### Для открытия/закрытия мобильного меню при разрешение меньше 768px:

    document.querySelector('.nav').classList.toggle('nav_opened');
    document.querySelector('.nav__items').classList.toggle('nav__items_opened');
    document.querySelector('.nav__burger').classList.toggle('nav__burger_opened');
    document.querySelector('.overlay').classList.toggle('overlay_opened');

### Для открытия/закрытия popup 'Входа'

    document.querySelector('.popup_login').classList.toggle('popup_opened');
    document.querySelector('.nav__burger').classList.toggle('nav__burger_opened');

### Для открытия/закрытия popup 'Регистрации'

    document.querySelector('.popup_signup').classList.toggle('popup_opened');
    document.querySelector('.nav__burger').classList.toggle('nav__burger_opened');

### Для открытия/закрытия popup 'после регистрации'

    document.querySelector('.popup_registered').classList.toggle('popup_opened');
    document.querySelector('.nav__burger').classList.toggle('nav__burger_opened');

