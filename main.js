import random from './getRandom'

// 산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);


// 할당 연산자
const a = 2;
let b = 4;
b += 1;

console.log(b);


// 비교 연산자
const a_1 = 1;
const b_1 = 1;

console.log(a_1 === b_1);

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1));
console.log(a_1 !== b_1);


// 논리 연산자
const a_2 = 1 === 1;
const b_2 = 'AB' === 'AB'
const c = false;

console.log(a_2)
console.log(b_2)
console.log(c)

console.log('&&: ', a_2&& b_2 && c);
console.log('||: ', a_2 || b_2 || c);


// 삼항 연산자

const d = 1 < 2;

if(d) {
  console.log('참');
} else {
  console.log('거짓');
}


// 조건문 if

const r = random();

if(r === 0) {
  console.log('a is 0');
} else if (r === 2){
  console.log('a is 2');
}else {
  console.log('rest...');
}


// 조건문 switch

switch (r) {
  case 0: console.log('a is 0'); break;
  case 2: console.log('a is 2'); break;
  case 4: console.log('a is 4'); break;
}


// 반복문 For

const ulEl = document.querySelector('ul');

for(let i =0; i < 3; i++){
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;
  if((i + 1) % 2 === 0) {
   // li.addEventListener('click', fucntion() {})
  }
  ulEl.appendChild(li);
}


// 변수 유효범위

function scope() {
  if( true) {
    const y = 123
    console.log(y)
  }
}

scope()


// 형 변환 (Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

const n_1 = 1
const n_2 = '1'

console.log(n_1 === n_2); // 2개말고 3개를 사용!!



// 생성자 함수 (prototype)

/*
const TaeGeom = {
  firstName : 'taegeom',
  lastName: 'Yoon',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
} 
console.log(TaeGeom.getFullName())

const Amy = {
  firstName : 'Amy',
  lastName: 'Clarke',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
} 
console.log(Amy.getFullName())

const neo = {
  firstName : 'neo',
  lastName: 'Smith',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
} 
console.log(neo.getFullName())
*/

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
  
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const TaeGeom = new User('TaeGeom','Yoon')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(TaeGeom.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())



// ES6 Classes

const taeGeom = {
  name: 'taeGeom',
  normal () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

taeGeom.normal()
//taeGeom.arrow()


// ES6 Classes

class User2 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const TaeGeom2 = new User2('TaeGeom','Yoon')
const amy2 = new User2('Amy','Clarke')
const neo2 = new User2('Neo','Smith')

console.log(TaeGeom.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())




class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
  getFullName() {
    return `${this.name} ${this.wheel}`
  }
}

const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle.getFullName())

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
  getFullName() {
    return `${this.name} ${this.wheel}`
  }
}

const myBicycle = new Bicycle('삼천리', 2);
const daughtersBicycle = new Bicycle('세발', 3);
console.log(myBicycle.getFullName());
console.log(daughtersBicycle.getFullName());

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license;
  }
  getFullName() {
    return `이름 : ${this.name}, 바퀴수 : ${this.wheel}, 면허 : ${this.license}`
  }
}

const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4, false);

console.log(myCar.getFullName());
console.log(daughtersCar.getFullName());