# Объект BooruPost
> Тип: JSON Object

| Поле        |  Тип              | Описание          |
| ----------- | ----------------- | ----------------- |
| `id`        | string            | ID поста          |
| `view`      | string            | Ссылка на пост    |
| `tags`      | string[]          | Теги поста        |
| `file`      | [BooruFile](./booru-file.md)         | Оригинальный файл |
| `sample`    | [BooruFile](./booru-file.md) \| null | Сэмпл файл        |
| `preview`   | [BooruFile](./booru-file.md) \| null | Превью файл       |
| `available` | boolean           | Доступность поста |
| `score`     | number            | Оценка поста      |
| `rating`    | string            | Рейтинг поста     |
| `source`    | string \| null    | Оригинал поста    |
| `createdAt` | string \| null    | Дата создания     |
