// Да, будет. Объявление const защищает только саму переменную от изменений.
// Но содержимое объекта менять можно.
const user = {
    name: 'John'};
user.name = "Pete";
console.log(user.name)

