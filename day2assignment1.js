//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 


function findPrime(...num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true
}

function primeNumber(...num) {
    for (let i = 0; i < num.length; i++)
        if (findPrime(num[i])) {
            console.log(`${num[i]} is a prime number.`)
        }
        else {
            console.log(`${num[i]} is not a prime number.`)
        }
}
primeNumber(2, 17, 28, 37, 61, 72);

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.



let total1 = 0
let total2 = 0

function isFriend(n1, n2) {
    for (let i = 0; i < n1; i++) {
        if (firstNum % i == 0) {
            total1 += i
        }
    }
    for (let i = 0; i < n2; i++) {
        if (secondNum % i == 0) {
            total2 += i
        }
    }
    return (total1 === n2 && total2 === n1 ? `${n1} and ${n2} are friend numbers.` : `${n1} and ${n2} are not friend numbers.`)
};

const firstNum = 220
const secondNum = 284

console.log(isFriend(firstNum, secondNum));

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


function findPerfect(num) {
    for (let i = 2; i < num; i++) {
        let total = 0
        for (let k = 1; k < i; k++) {
            if (i % k === 0) {
                total += k
            }
        }
        if (total == i) {
            console.log(`${i} is perfect number`)
        }
    }

}
findPerfect(1000);

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function listPrime() {

    let result = []
    for (let i = 2; i < 1000; i++) {
        let num2 = 0
        for (let k = 2; k < i; k++) {
            if (i % k == 0) {
                num2++;
                break
            }
        }
        if (num2 == 0) {
            result.push(i)
        }
    }
    console.log(result)
}
listPrime();





