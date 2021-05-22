interface Rect {
    readonly id: string
    color?: string // ? знак вопроса значит не обьязательный
    size: {
        width: number
        height: number
    }
}

// Выше создали интерфейс теперь можем создавать различный обекты которые будут являться типом Rect

const obj1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc' // color не обьязательно писать в этом обьекте 
}

const obj2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

obj2.color = 'black'
console.log(obj2)

const obj3 = {} as Rect
const obj4 = <Rect>{} // старая запись аналог выше

// Наследования interface в обектах
interface RectWithArea extends Rect {
    getArea: () => number
}

const obj5: RectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// Наследования interface в классах

interface IClock { // interface называют с большой буквы I
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    
    setTime(date: Date): void {
        this.time = date;
    }
}

// Создание interface для обекта с большим количеством динамических ключей

interface Styles {
    [key: string]: string // [key: string] относиться к border, marginTop, borderRadius

}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}