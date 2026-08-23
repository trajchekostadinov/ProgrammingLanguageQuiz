// Секој јазик има низа од нивоа (levels), секое ниво има низа од прашања.
// difficulty: 'лесно' | 'средно' | 'тешко'

export const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', color: '#f0db4f', icon: 'JS' },
  { id: 'python', name: 'Python', color: '#3776ab', icon: 'PY' },
]

export const QUESTIONS = {
  javascript: [
    // Ниво 1
    [
      {
        q: 'Кој клучен збор се користи за декларирање константа во JavaScript?',
        options: ['var', 'let', 'const', 'static'],
        correct: 2,
        difficulty: 'лесно',
      },
      {
        q: 'Што враќа typeof null во JavaScript?',
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correct: 2,
        difficulty: 'средно',
      },
      {
        q: 'Кој метод додава елемент на крајот на низа?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correct: 0,
        difficulty: 'лесно',
      },
    ],
    // Ниво 2
    [
      {
        q: 'Што прави операторот "===" за разлика од "=="?',
        options: [
          'Споредува само вредност',
          'Споредува вредност и тип',
          'Ги додава двете вредности',
          'Нема разлика',
        ],
        correct: 1,
        difficulty: 'средно',
      },
      {
        q: 'Што е "closure" во JavaScript?',
        options: [
          'Функција затворена во try/catch',
          'Функција која има пристап до опсегот на надворешната функција',
          'Метод за затворање на прозорецот',
          'Тип на јамка',
        ],
        correct: 1,
        difficulty: 'тешко',
      },
      {
        q: 'Кој метод се користи за трансформација на секој елемент од низа во нова низа?',
        options: ['forEach()', 'map()', 'filter()', 'reduce()'],
        correct: 1,
        difficulty: 'средно',
      },
    ],
  ],
  python: [
    // Ниво 1
    [
      {
        q: 'Кој симбол се користи за коментар во Python?',
        options: ['//', '#', '<!-- -->', '/* */'],
        correct: 1,
        difficulty: 'лесно',
      },
      {
        q: 'Која функција се користи за да се испечати текст на екран?',
        options: ['echo()', 'print()', 'console.log()', 'write()'],
        correct: 1,
        difficulty: 'лесно',
      },
      {
        q: 'Кој тип на податоци е "list" во Python?',
        options: ['Неизменлив', 'Изменлив, подреден', 'Само за броеви', 'Клуч-вредност пар'],
        correct: 1,
        difficulty: 'средно',
      },
    ],
    // Ниво 2
    [
      {
        q: 'Што враќа len([1, 2, 3])?',
        options: ['2', '3', '6', 'Грешка'],
        correct: 1,
        difficulty: 'лесно',
      },
      {
        q: 'Која структура се користи за парови клуч-вредност во Python?',
        options: ['list', 'tuple', 'dict', 'set'],
        correct: 2,
        difficulty: 'средно',
      },
      {
        q: 'Што прави декораторот @staticmethod?',
        options: [
          'Прави методот приватен',
          'Дозволува повик на метод без инстанца на класата',
          'Го брише методот',
          'Автоматски го тестира методот',
        ],
        correct: 1,
        difficulty: 'тешко',
      },
    ],
  ],
}

export const TIME_PER_QUESTION = 15 // секунди
export const POINTS_CORRECT = 10
export const JOKER_COST = 30
