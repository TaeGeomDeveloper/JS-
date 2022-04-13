# JS_Class
자바 스크립트 함수 공부

< _main.js_ 참조 >

## 1. 연산자
- 산술, 할당
	```javascript
		console.log(1 + 2);
		console.log(5 - 7);
		console.log(3 * 4);
		console.log(10 / 2);
		console.log(7 % 5);
	```
- 비교 논리
	```javascript
		function isEqual(x, y) {
		  return x === y
		}
	```
- 삼항 연산자
	```javascript
		if(d) {
		  console.log('참');
		} else {
		  console.log('거짓');
		}
	```
## 2. 조건문
- IF / Else
	```javascript
		if(r === 0) {
		  console.log('a is 0');
		} else if (r === 2){
		  console.log('a is 2');
		}else {
		  console.log('rest...');
		}
	```
- Switch
	```javascript
		switch (r) {
		  case 0: console.log('a is 0'); break;
		  case 2: console.log('a is 2'); break;
		  case 4: console.log('a is 4'); break;
		}
	```
## 3. 반복문 
- For / while
	```javascript
		for(let i =0; i < 3; i++){}
	```

## 4. 변수 유효 범위
- scope()
	```javascript
		function scope() {
		  if( true) {
		    const y = 123
		    console.log(y)
		  }
		}
	```

## 5. 형변환
- Type conversion
	```javascript
		// Truthy (참 같은 값)
		// true, {}, [], 1, 2, 'false', -12, '3.14' ...

		// Falsy (거짓 같은 값)
		// false, '', null, undefined, 0, -0, NaN
	```
	
## 6. 생성자 함수
- prototype
- function


## 7. ES6 Classes
- 화살표 함수
- IIFE
- 호이스팅
- 타이머 함수
- 콜백
	
