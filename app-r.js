const isPalindrome = str => {
  const processedStr = str.replace(/[^a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]/g, '').toLowerCase();

  if (processedStr === '') return false;

  const reversedProcessedStr = processedStr.split('').reverse().join('');

  return processedStr === reversedProcessedStr;
};

const $palindromeForm = document.querySelector('.palindrome-checker');
const $palindromeInput = document.querySelector('.palindrome-input');
const $palindromeResult = document.querySelector('.palindrome-result');

const renderResult = input => {
  if (input.trim() !== '') {
    $palindromeResult.textContent = `
    "${input}" is ${isPalindrome(input) ? '' : 'not'} a palindrome`;
  }

  $palindromeForm.reset();
};

$palindromeForm.addEventListener('submit', e => {
  e.preventDefault();
  renderResult($palindromeInput.value);
});

// [변경사항]
// - $palindromeChecker 변수명을 $palindromeForm으로 변경해 의미를 명확히 함
// - isPalindrome 함수 내에서 가독성을 위해 한 줄로 작성한 코드를 여러 줄로 나누어서 작성하고 변수를 추가함
// - eventListener 내부에서 $palindromeResult의 innerHTML을 갱신하는 부분을 renderResult 함수로 분리
// - $palindromeInput의 value를 빈 문자열로 초기화해주는 코드를 form의 reset 메서드로 변경하여 의미를 명확히 함
