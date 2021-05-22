interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

// key = 'job' этот ключ нельзя задать ошибка

type User = {
    _id: number
    name: string
    email: string
    createAt: Date

}

// создаем свой тип на основе выше
// пробегаемся оператором keyof исключаем id и createAT
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'> // 'name' | 'email'
//есть другая запись где мы указываем что нам нужно забрать
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' будет ошибка так как мы можем в данном случаи задавать только name и email

