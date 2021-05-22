//TypeScript используеться только на этапе разработки
// команда в консоли tsc 1таб компилирует файл ts в файл js
//Потом в терминале пишем node 1tab  js



const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // эта запись Array<number> наз. дженерик типы <сдесь указываеться с чего состоит например данный класс или обьект>

const words: string[] = ['Hello', 'TypeScript']

//TUPLE это тип данных в TypeScript. Его идея создания массива с разных типов данных
const contact: [string, number] = ['Rostyslav', 0930312455]

//Как переопределить тип данных. Для этого есть такой тип данных Any

//Any
let variable: any = 42
// переопределили число в строку
variable = 'New String'
variable = []

//Function  void -это тип который говорит что функция ничего не возвращает
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Rostyslav')

//Never этот тип указываеться когда функция возвращает ошибку и никогда не заканчивает свое выполнения 
// или когда она постоянно что то делает

function throwError(message: string): never {
            throw new Error(message)
}
        
function infinite(): never {
    while (true) {

    }
}

//Type использования примитивных типов и создавать для них элиасы
// для этого сущесвует специальное ключевое слово type
type Login = string //создали свой тип

const login: Login = 'admin'
const login2: string = 'admin' // аналог записи выше

type ID = string | number | boolean
const id1: ID = 1234
const id2: ID = '1234'
const id3: ID = true