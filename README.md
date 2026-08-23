# КодКвиз — Квиз за учење програмски јазици

Фронтенд апликација направена со **Vue 3 + Vite** и **Firebase** (Authentication + Firestore),
со демонстрација на повик кон надворешен јавен API (JokeAPI).

## Функционалности

- 🔐 Најава / регистрација со е-пошта и лозинка (Firebase Auth)
- 🗂️ Избор на програмски јазик (JavaScript, Python — лесно се додаваат нови во `src/data/questions.js`)
- 🧩 Прашања организирани по **нивоа** и **тежина** (лесно / средно / тешко)
- ⏱️ Временско ограничување од **15 секунди** по прашање — автоматски продолжува на следно ако не се одговори навреме
- 🔓 Отклучување на следно ниво откако ќе се одговори точно на сите прашања од тековното
- 🃏 **Џокер** потег — троши собрани поени за да се прикаже точниот одговор
- 📊 Табела со вкупен резултат и историја на претходни обиди (Firestore)
- 🌐 Повик кон надворешен јавен API (JokeAPI) за случаен факт/шега поврзана со програмирање

## Поставување

### 1. Инсталирај зависности

```bash
npm install
```

### 2. Креирај Firebase проект

1. Оди на [Firebase Console](https://console.firebase.google.com/) и креирај нов проект.
2. Оди на **Build → Authentication → Sign-in method** и овозможи **Email/Password**.
3. Оди на **Build → Firestore Database → Create database** (може во test mode за развој).
4. Оди на **Project settings → General → Your apps → Web app** и копирај ја конфигурацијата.

### 3. Внеси ги податоците во `src/firebase.js`

Замени ги плейсхолдерите (`YOUR_API_KEY` итн.) со твоите вредности од Firebase Console.

### 4. Стартувај ја апликацијата

```bash
npm run dev
```

Отвори го линкот што ќе се прикаже (стандардно `http://localhost:5173`).

## Firestore структура на податоци

```
users/{uid}
  ├── totalScore: number
  ├── jokerPoints: number
  ├── progress: { javascript: { unlockedLevel }, python: { unlockedLevel } }
  └── attempts/{attemptId}
        ├── language, level, score
        ├── correctCount, totalQuestions
        └── timestamp
```

## Проширување

- Нови јазици/прашања: додади во `src/data/questions.js`.
- Промени го бројот на поени, времето или цената на џокерот во истиот фајл
  (`POINTS_CORRECT`, `TIME_PER_QUESTION`, `JOKER_COST`).
- Промени го дизајнот преку CSS променливите во `src/style.css`.

## Firestore правила (пример за продукција)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      match /attempts/{attemptId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```
