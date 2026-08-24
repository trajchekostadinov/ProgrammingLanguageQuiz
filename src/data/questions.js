// Секој јазик има низа од нивоа (levels), секое ниво има 7 прашања.
// difficulty: 'лесно' | 'средно' | 'тешко'

export const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', color: '#f0db4f', textColor: '#1a1a1a', icon: 'JS' },
  { id: 'python', name: 'Python', color: '#3776ab', textColor: '#fff', icon: 'PY' },
  { id: 'java', name: 'Java', color: '#e76f00', textColor: '#fff', icon: 'JV' },
  { id: 'cpp', name: 'C++', color: '#00599c', textColor: '#fff', icon: 'C++' },
  { id: 'react', name: 'React', color: '#61dafb', textColor: '#0b1220', icon: 'RX' },
  { id: 'go', name: 'GoLang', color: '#00add8', textColor: '#0b1220', icon: 'GO' },
  { id: 'csharp', name: 'C#', color: '#9b4f96', textColor: '#fff', icon: 'C#' },
]

export const QUESTIONS = {
  javascript: [
    [
      { q: 'Кој клучен збор се користи за декларирање константа во JavaScript?', options: ['var', 'let', 'const', 'static'], correct: 2, difficulty: 'лесно' },
      { q: 'Што враќа typeof null во JavaScript?', options: ["'null'", "'undefined'", "'object'", "'number'"], correct: 2, difficulty: 'средно' },
      { q: 'Кој метод додава елемент на крајот на низа?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 0, difficulty: 'лесно' },
      { q: 'Кој оператор се користи за поврзување на низи (стрингови)?', options: ['&', '+', '.', '%'], correct: 1, difficulty: 'лесно' },
      { q: 'Која функција конвертира стринг во цел број?', options: ['parseInt()', 'toString()', 'Number.isInt()', 'toFixed()'], correct: 0, difficulty: 'лесно' },
      { q: 'Со кој клучен збор се дефинира функција во JavaScript?', options: ['func', 'def', 'function', 'lambda'], correct: 2, difficulty: 'лесно' },
      { q: 'Кој метод претвора JSON стринг во JavaScript објект?', options: ['JSON.parse()', 'JSON.stringify()', 'Object.parse()', 'JSON.toObject()'], correct: 0, difficulty: 'средно' },
    ],
    [
      { q: 'Што прави операторот "===" за разлика од "=="?', options: ['Споредува само вредност', 'Споредува вредност и тип', 'Ги додава двете вредности', 'Нема разлика'], correct: 1, difficulty: 'средно' },
      { q: 'Што е "closure" во JavaScript?', options: ['Функција затворена во try/catch', 'Функција која има пристап до опсегот на надворешната функција', 'Метод за затворање на прозорецот', 'Тип на јамка'], correct: 1, difficulty: 'тешко' },
      { q: 'Кој метод се користи за трансформација на секој елемент од низа во нова низа?', options: ['forEach()', 'map()', 'filter()', 'reduce()'], correct: 1, difficulty: 'средно' },
      { q: 'Што враќа Promise кога е "pending"?', options: ['Резултат веднаш', 'Уште не е решен', 'Секогаш грешка', 'null'], correct: 1, difficulty: 'средно' },
      { q: 'Што прави async/await?', options: ['Го блокира главниот thread засекогаш', 'Овозможува пишување асинхрон код во синхрона форма', 'Ги брише промисите', 'Само за DOM манипулација'], correct: 1, difficulty: 'тешко' },
      { q: 'Која вредност ја враќа this во arrow функција?', options: ['Секогаш window', 'Наследена од опкружувачкиот опсег', 'Секогаш undefined', 'Новосоздаден објект'], correct: 1, difficulty: 'тешко' },
      { q: 'Кој метод спречува промена на постоечки објект?', options: ['Object.freeze()', 'Object.seal()', 'Object.lock()', 'Object.const()'], correct: 0, difficulty: 'средно' },
    ],
  ],
  python: [
    [
      { q: 'Кој симбол се користи за коментар во Python?', options: ['//', '#', '<!-- -->', '/* */'], correct: 1, difficulty: 'лесно' },
      { q: 'Која функција се користи за да се испечати текст на екран?', options: ['echo()', 'print()', 'console.log()', 'write()'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој тип на податоци е "list" во Python?', options: ['Неизменлив', 'Изменлив, подреден', 'Само за броеви', 'Клуч-вредност пар'], correct: 1, difficulty: 'средно' },
      { q: 'Како се дефинира функција во Python?', options: ['function ime():', 'def ime():', 'func ime():', 'lambda ime():'], correct: 1, difficulty: 'лесно' },
      { q: 'Што враќа len([1, 2, 3])?', options: ['2', '3', '6', 'Грешка'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој оператор се користи за проверка на еднаквост?', options: ['=', '==', '===', 'eq'], correct: 1, difficulty: 'лесно' },
      { q: 'Која јамка се извршува "додека" услов е точен?', options: ['for', 'while', 'loop', 'repeat'], correct: 1, difficulty: 'лесно' },
    ],
    [
      { q: 'Која структура се користи за парови клуч-вредност во Python?', options: ['list', 'tuple', 'dict', 'set'], correct: 2, difficulty: 'средно' },
      { q: 'Што прави декораторот @staticmethod?', options: ['Прави методот приватен', 'Дозволува повик на метод без инстанца на класата', 'Го брише методот', 'Автоматски го тестира методот'], correct: 1, difficulty: 'тешко' },
      { q: 'Која е разликата помеѓу list и tuple?', options: ['Нема разлика', 'tuple е неизменлив, list е изменлив', 'list е побрз секогаш', 'tuple може да содржи само броеви'], correct: 1, difficulty: 'средно' },
      { q: 'Што прави list comprehension [x*2 for x in range(3)]?', options: ['[0, 2, 4]', '[1, 2, 3]', '[2, 4, 6]', 'Грешка'], correct: 0, difficulty: 'средно' },
      { q: 'Кој метод се користи за додавање елемент во множество (set)?', options: ['append()', 'add()', 'insert()', 'push()'], correct: 1, difficulty: 'средно' },
      { q: 'Што претставува "self" во метод на класа?', options: ['Глобална променлива', 'Референца кон тековната инстанца', 'Клучен збор за наследување', 'Тип на податок'], correct: 1, difficulty: 'тешко' },
      { q: 'Која конструкција се користи за ракување со исклучоци?', options: ['try/except', 'try/catch', 'catch/throw', 'error/handle'], correct: 0, difficulty: 'средно' },
    ],
  ],
  java: [
    [
      { q: 'Која метода е влезна точка на секоја Java апликација?', options: ['start()', 'main()', 'run()', 'init()'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој клучен збор се користи за создавање нов објект?', options: ['create', 'new', 'make', 'init'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој тип се користи за единечен карактер во Java?', options: ['char', 'string', 'letter', 'symbol'], correct: 0, difficulty: 'лесно' },
      { q: 'Со која наставка завршуваат Java изворните фајлови?', options: ['.js', '.jav', '.java', '.class'], correct: 2, difficulty: 'лесно' },
      { q: 'Кој модификатор прави променлива достапна само во класата?', options: ['public', 'private', 'static', 'final'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој оператор се користи за споредба на примитивни вредности?', options: ['equals()', '==', '.compare()', '==='], correct: 1, difficulty: 'лесно' },
      { q: 'Која колекција не дозволува дупликати?', options: ['List', 'Set', 'Array', 'Map'], correct: 1, difficulty: 'средно' },
    ],
    [
      { q: 'Што е "interface" во Java?', options: ['Класа со имплементирани методи', 'Договор кој класите го имплементираат', 'Тип на јамка', 'Пакет за увоз'], correct: 1, difficulty: 'средно' },
      { q: 'Што прави клучниот збор "extends"?', options: ['Имплементира интерфејс', 'Наследува од друга класа', 'Го затвора програмот', 'Создава нов thread'], correct: 1, difficulty: 'средно' },
      { q: 'Кој механизам автоматски го ослободува неискористената меморија?', options: ['Manual free()', 'Garbage Collector', 'Destructor', 'Compiler optimization'], correct: 1, difficulty: 'средно' },
      { q: 'Која е разликата помеѓу ArrayList и LinkedList?', options: ['Нема разлика', 'ArrayList користи низа, LinkedList користи јазли', 'LinkedList е секогаш побрз', 'ArrayList не поддржува генерики'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави клучниот збор "final" на променлива?', options: ['Ја брише по употреба', 'Вредноста не може повторно да се менува', 'Ја прави статичка', 'Ја прави приватна'], correct: 1, difficulty: 'средно' },
      { q: 'Кој блок секогаш се извршува, без разлика на исклучок?', options: ['try', 'catch', 'finally', 'throw'], correct: 2, difficulty: 'средно' },
      { q: 'Што овозможува "polymorphism" во Java?', options: ['Повеќекратно наследување на класи', 'Ист метод да се однесува различно според типот на објект', 'Побрзо компајлирање', 'Автоматско тестирање'], correct: 1, difficulty: 'тешко' },
    ],
  ],
  cpp: [
    [
      { q: 'Која заглавна датотека е потребна за стандарден влез/излез во C++?', options: ['<stdio.h>', '<iostream>', '<input.h>', '<console>'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој оператор се користи за испис на конзола во C++?', options: ['print', '<<', 'echo', '>>'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој симбол означува покажувач (pointer) во C++?', options: ['&', '*', '#', '%'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој клучен збор дефинира класа во C++?', options: ['class', 'struct only', 'object', 'type'], correct: 0, difficulty: 'лесно' },
      { q: 'Која функција се повикува автоматски при создавање објект?', options: ['destructor', 'constructor', 'main()', 'init()'], correct: 1, difficulty: 'лесно' },
      { q: 'Со кој оператор се добива адреса на променлива?', options: ['*', '&', '%', '@'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој тип се користи за вредности без децимали?', options: ['float', 'int', 'char', 'bool'], correct: 1, difficulty: 'лесно' },
    ],
    [
      { q: 'Што прави клучниот збор "virtual" во C++?', options: ['Ја брише функцијата', 'Овозможува преклопување (polymorphism) во наследување', 'Ја прави функцијата приватна', 'Забранува наследување'], correct: 1, difficulty: 'тешко' },
      { q: 'Која е разликата помеѓу "new" и "malloc"?', options: ['Нема разлика', 'new повикува конструктор, malloc не', 'malloc е побрз секогаш', 'new е само за низи'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави деструкторот на класа?', options: ['Создава нов објект', 'Го ослободува ресурсот при уништување на објектот', 'Го копира објектот', 'Го иницијализира објектот'], correct: 1, difficulty: 'средно' },
      { q: 'Која класа во STL се користи за динамична низа?', options: ['array', 'vector', 'list', 'set'], correct: 1, difficulty: 'средно' },
      { q: 'Што претставува "reference" (&) параметар во функција?', options: ['Копија на вредноста', 'Алијас за постоечка променлива', 'Нов тип на податок', 'Секогаш константа'], correct: 1, difficulty: 'средно' },
      { q: 'Кој концепт овозможува иста функција да работи со различни типови?', options: ['Overloading', 'Templates (генерики)', 'Inheritance', 'Encapsulation'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави "const" пред параметар на функција?', options: ['Го брише параметарот', 'Спречува промена на вредноста внатре во функцијата', 'Го прави глобален', 'Го конвертира во покажувач'], correct: 1, difficulty: 'средно' },
    ],
  ],
  react: [
    [
      { q: 'Што е "component" во React?', options: ['CSS фајл', 'Повторно употреблив дел од интерфејсот', 'База на податоци', 'Сервер рута'], correct: 1, difficulty: 'лесно' },
      { q: 'Со кој синтакса React прикажува HTML-слична структура во JavaScript?', options: ['JSX', 'YAML', 'Pug', 'HAML'], correct: 0, difficulty: 'лесно' },
      { q: 'Кој hook се користи за да се додаде состојба (state) во функционална компонента?', options: ['useEffect', 'useState', 'useMemo', 'useRef'], correct: 1, difficulty: 'лесно' },
      { q: 'Како се пренесуваат податоци од родителска кон детска компонента?', options: ['Преку state', 'Преку props', 'Преку CSS', 'Преку cookies'], correct: 1, difficulty: 'лесно' },
      { q: 'Која функција се повикува за рендерирање на React апликација (React 18)?', options: ['ReactDOM.render()', 'createRoot().render()', 'App.start()', 'render.init()'], correct: 1, difficulty: 'средно' },
      { q: 'Што треба да има секој елемент во листа (list) во React?', options: ['className', 'уникатен key', 'id атрибут', 'style'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој hook се користи за споредни ефекти (на пр. API повици)?', options: ['useState', 'useEffect', 'useCallback', 'useContext'], correct: 1, difficulty: 'лесно' },
    ],
    [
      { q: 'Што прави "virtual DOM"?', options: ['Директно го менува вистинскиот DOM', 'Прави лесна копија на DOM за пресметување на промени', 'Го брише DOM-от', 'Е дел од CSS'], correct: 1, difficulty: 'средно' },
      { q: 'Која е целта на useMemo хукот?', options: ['Да прави API повици', 'Да меморира резултат од скапа пресметка', 'Да ги менаџира формите', 'Да рутира страници'], correct: 1, difficulty: 'тешко' },
      { q: 'Што е "lifting state up"?', options: ['Преместување на состојба во заедничка родителска компонента', 'Бришење на состојба', 'Користење на CSS transform', 'Оптимизација на CSS'], correct: 0, difficulty: 'средно' },
      { q: 'Која вредност ја враќа useState на почеток на масивот?', options: ['Функција за промена', 'Тековната вредност на состојбата', 'Референца кон DOM', 'Props објект'], correct: 1, difficulty: 'средно' },
      { q: 'Што е "Context API" во React?', options: ['Начин за стилизирање', 'Начин за споделување состојба без props drilling', 'Библиотека за рутирање', 'Тестирачки алат'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави React.memo()?', options: ['Спречува непотребно повторно рендерирање на компонента', 'Го брише кешот', 'Го стартува серверот', 'Прави глобална состојба'], correct: 0, difficulty: 'тешко' },
      { q: 'Кога се извршува useEffect со празна низа од зависности []?', options: ['На секое рендерирање', 'Само еднаш, при монтирање', 'Никогаш', 'Само при демонтирање'], correct: 1, difficulty: 'средно' },
    ],
  ],
  go: [
    [
      { q: 'Со кој клучен збор се дефинира функција во Go?', options: ['func', 'def', 'function', 'fn'], correct: 0, difficulty: 'лесно' },
      { q: 'Кој пакет е задолжителен за секоја извршна Go програма?', options: ['main', 'core', 'init', 'run'], correct: 0, difficulty: 'лесно' },
      { q: 'Со кој оператор се декларира и иницијализира променлива во еден чекор?', options: ['=', ':=', '==', '->'], correct: 1, difficulty: 'лесно' },
      { q: 'Која функција испишува текст на конзола во Go?', options: ['echo()', 'fmt.Println()', 'print()', 'console.log()'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој тип на податок се користи за листа со фиксна должина?', options: ['slice', 'array', 'list', 'map'], correct: 1, difficulty: 'средно' },
      { q: 'Која структура во Go се користи за парови клуч-вредност?', options: ['struct', 'map', 'array', 'slice'], correct: 1, difficulty: 'лесно' },
      { q: 'Со кој клучен збор се стартува конкурентна рутина (goroutine)?', options: ['async', 'go', 'thread', 'spawn'], correct: 1, difficulty: 'лесно' },
    ],
    [
      { q: 'Што е "goroutine"?', options: ['Тип на грешка', 'Лесна конкурентна нишка управувана од Go рантајмот', 'Библиотека за тестирање', 'Компајлерска оптимизација'], correct: 1, difficulty: 'средно' },
      { q: 'За што служат "channels" во Go?', options: ['За стилизирање конзолен излез', 'За комуникација и синхронизација помеѓу goroutines', 'За читање фајлови', 'За дефинирање типови'], correct: 1, difficulty: 'тешко' },
      { q: 'Која е разликата помеѓу array и slice во Go?', options: ['Нема разлика', 'slice е динамичен и флексибилен, array има фиксна големина', 'array е побрз секогаш', 'slice не поддржува индексирање'], correct: 1, difficulty: 'средно' },
      { q: 'Како Go ракува со грешки, наместо exceptions?', options: ['try/catch блокови', 'Враќање на error вредност како резултат', 'Автоматско игнорирање', 'Global error handler'], correct: 1, difficulty: 'средно' },
      { q: 'Што прави клучниот збор "defer"?', options: ['Веднаш прекинува функција', 'Го одложува извршувањето до крајот на функцијата', 'Создава нов thread', 'Го брише резултатот'], correct: 1, difficulty: 'тешко' },
      { q: 'Како Go имплементира однесување слично на интерфејси од OOP?', options: ['Преку класи', 'Преку interfaces базирани на методи', 'Преку наследување', 'Преку макроа'], correct: 1, difficulty: 'средно' },
      { q: 'Која вредност ја има непроверена (uninitialized) покажувач променлива во Go?', options: ['0', 'nil', 'undefined', 'null pointer exception'], correct: 1, difficulty: 'средно' },
    ],
  ],
  csharp: [
    [
      { q: 'Која метода е влезна точка на C# конзолна апликација?', options: ['Start()', 'Main()', 'Run()', 'Init()'], correct: 1, difficulty: 'лесно' },
      { q: 'Со кој клучен збор се декларира константа во C#?', options: ['const', 'let', 'final', 'static'], correct: 0, difficulty: 'лесно' },
      { q: 'Која функција се користи за испис на конзола?', options: ['print()', 'Console.WriteLine()', 'echo()', 'System.out.print()'], correct: 1, difficulty: 'лесно' },
      { q: 'Кој тип се користи за вистина/лага вредности?', options: ['bit', 'bool', 'flag', 'byte'], correct: 1, difficulty: 'лесно' },
      { q: 'Со која наставка завршуваат C# изворните фајлови?', options: ['.cs', '.csx', '.c#', '.cx'], correct: 0, difficulty: 'лесно' },
      { q: 'Кој клучен збор се користи за наследување во C#?', options: ['extends', ':', 'inherits', 'implements'], correct: 1, difficulty: 'средно' },
      { q: 'Која колекција чува уникатни клучеви со вредности?', options: ['List', 'Dictionary', 'Array', 'Stack'], correct: 1, difficulty: 'лесно' },
    ],
    [
      { q: 'Што е "LINQ" во C#?', options: ['Тип на база на податоци', 'Јазик/синтакса за пребарување колекции', 'Веб сервер', 'Alat за тестирање'], correct: 1, difficulty: 'средно' },
      { q: 'Која е целта на "async/await" во C#?', options: ['Забрзување на компајлирање', 'Пишување асинхрон код кој изгледа синхрон', 'Бришење на нишки', 'Само за UI бои'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави "interface" во C#?', options: ['Дефинира договор кои методи мора да ги имплементира класата', 'Создава инстанца на класа', 'Е тип на јамка', 'Автоматски генерира UI'], correct: 0, difficulty: 'средно' },
      { q: 'Која е разликата помеѓу "struct" и "class" во C#?', options: ['Нема разлика', 'struct е вредносен тип, class е референтен тип', 'class е секогаш побрз', 'struct поддржува наследување на класи'], correct: 1, difficulty: 'тешко' },
      { q: 'Што прави операторот "??" (null-coalescing) во C#?', options: ['Секогаш фрла грешка', 'Враќа вредност од десно ако левата е null', 'Го брише null објектот', 'Прави нов thread'], correct: 1, difficulty: 'средно' },
      { q: 'Кој механизам автоматски управува со меморија во C#?', options: ['Manual free()', 'Garbage Collector', 'Reference counting само', 'Compiler pragma'], correct: 1, difficulty: 'средно' },
      { q: 'Што е "delegate" во C#?', options: ['Тип на база', 'Тип кој претставува референца кон метод', 'UI компонента', 'Начин за коментирање код'], correct: 1, difficulty: 'тешко' },
    ],
  ],
}

export const TIME_PER_QUESTION = 15 // секунди
export const POINTS_CORRECT = 10
export const JOKER_COST = 30