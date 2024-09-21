// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу). 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останнє введення користувача і завершує функцію.


function userInput(){
    let maxIterations = 10;
    for(let i = 0; i < maxIterations; i++){
        let userInput = parseInt(prompt(`Hi! Enter a number > 100, please:`));

        if(userInput < 100 || isNaN(userInput)){
            alert(`The number must be > 100, try one more time, please!`);
        }else if(userInput > 100){
            console.log(`The last number you entered: ${userInput}`);
            break;
        }
    }
}
userInput();