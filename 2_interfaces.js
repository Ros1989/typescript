// Выше создали интерфейс теперь можем создавать различный обекты которые будут являться типом Rect
var obj1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc' // color не обьязательно писать в этом обьекте 
};
var obj2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
obj2.color = 'black';
console.log(obj2);
