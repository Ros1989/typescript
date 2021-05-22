class TypeScript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}] Typescript version is ${this.version}`;
  }
}

// class Car {
//     readonly model: string
//     readonly numberOfWHeels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

//Аналог записи выше, но короче
class Car {
  readonly numderOfWHeels: number = 4;
  constructor(readonly model: string) {}
}

///========МОДИФИКАТОРЫ ПОЛЕЙ======
//есть три вида модификаторов: protected, public, private
class Animal {
  protected voice: string = "";
    public color: string = "black";
    
    constructor() {
        this.go()
    }

  private go() {
    console.log("GO");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)

//=========АБСТРАКТНЫЕ КЛАССЫ=========
//они нужны на этапе разработки для того чтобы от них наследововаться, не компилируются
// и помимо этого присуствуют абстрактные методы

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log("Component on render")
    }
    info(): string {
        return 'This is info'
    }
}
