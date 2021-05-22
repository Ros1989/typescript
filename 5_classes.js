var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "] Typescript version is " + this.version;
    };
    return TypeScript;
}());
// class Car {
//     readonly model: string
//     readonly numberOfWHeels: number = 4
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
//Аналог записи выше, но короче
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numderOfWHeels = 4;
    }
    return Car;
}());
///========МОДИФИКАТОРЫ ПОЛЕЙ======
//есть три вида модификаторов: protected, public, private
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
        this.color = "black";
        this.go();
    }
    Animal.prototype.go = function () {
        console.log("GO");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
//=========АБСТРАКТНЫЕ КЛАССЫ=========
//они нужны на этапе разработки для того чтобы от них наследововаться, не компилируются
// и помимо этого присуствуют абстрактные методы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Component on render");
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
