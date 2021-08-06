const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  let num1 = Number(n1);
  let num2 = Number(n2);

  switch(operator){
    case '+': result = num1 + num2;
    break;
    case '-': result = num1 - num2;
    break;
    case '*': result = num1 * num2;
    break;
    case '/': result = num1 / num2;
    break;
    default: 0
  }

  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      if(firstOperend.textContent === '0'){
        firstOperend.textContent = buttonContent;
      }else secondOperend.textContent = buttonContent;
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      operator.textContent = '+';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      let result = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
      calculatedResult.textContent = result;
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      // previousKey가 'operator'일때, undefined일때 둘 다 해당
      if(previousKey === undefined){
        if(display.textContent === '0'){
          display.textContent = buttonContent;
          firstNum = display.textContent;
        }else{ 
          display.textContent += buttonContent;
          firstNum += buttonContent;
        }
      }

      if(previousKey === 'operator'){
        if(display.textContent === firstNum){
          display.textContent = buttonContent;
          previousNum = display.textContent;
        }else{
          display.textContent += buttonContent;
          previousNum += buttonContent;
        }
      }
    }
    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
      previousKey = 'operator';
    }

    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = '0';
      previousKey = undefined;
    }
    if (action === 'calculate') {
      let result = calculate(firstNum, operatorForAdvanced, previousNum);
      display.textContent = result;
    }
  }

});


  /*if(display.textContent === '0'){
        display.textContent = buttonContent;
      }else{
        display.textContent += buttonContent;
      }

      if(previousKey !== 'operator'){
        firstNum = display.textContent;
      }else{
        previousNum = display.textContent;
      }*/

// 1. 엔터를 연속으로 누른 경우
// 2. 소수점 계산의 경우
// 3. 바로바로 연산이 된 모습이 디스플레이에 보이도록 구현

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

/*const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
// 365+345
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      //! 숫자 버튼을 눌렀을 때
      if(display.textContent === "0" || previousKey === "operator" || previousKey === "calculate") {
        display.textContent = buttonContent;
      }
      else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = "number"
    }
    if (action === 'operator') {
      //! 연산자 버튼을 눌렀을 때
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent
      previousKey = "operator"
    }
    if (action === 'decimal') {
      previousKey = "decimal"
    }
    if (action === 'clear') {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = "0";
      previousKey = "clear";
    }
    if (action === 'calculate') {
      //! 엔터버튼을 눌렀을때
      //따로저장된 숫자 = firstNum
      //계산기 화면에 보이는 숫자(display.textContent) = previousNum
      previousNum = display.textContent;
      display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
      previousKey = "calculate"
    }
  }
});*/