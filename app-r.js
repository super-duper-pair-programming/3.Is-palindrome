const isPalindrome = str => {
  const processedStr = str.replace(/[^a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]/g, '').toLowerCase();

  if (processedStr === '') return false;

  const reversedProcessedStr = processedStr.split('').reverse().join('');

  return processedStr === reversedProcessedStr;
};

const $palindromeInput = document.querySelector('.palindrome-input');

const render = input => {
  if (input.trim() !== '') {
    document.querySelector('.palindrome-result').textContent = `
    "${input}" is ${isPalindrome(input) ? '' : 'not'} a palindrome`;
  }

  $palindromeInput.value = '';
};

document.querySelector('.palindrome-checker').addEventListener('submit', e => {
  e.preventDefault();

  render($palindromeInput.value);
});
