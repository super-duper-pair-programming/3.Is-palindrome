const $palindromeChecker = document.querySelector('.palindrome-checker');
const $palindromeInput = document.querySelector('.palindrome-input');
const $palindromeResult = document.querySelector('.palindrome-result');

function isPalindrome(str) {
  const processedStr = str.replace(/[^a-z|A-Z|ㄱ-ㅎ|가-힣|0-9]/g, '').toLowerCase();
  return processedStr === processedStr.split('').reverse().join('') && processedStr !== '';
}

$palindromeChecker.addEventListener('submit', e => {
  e.preventDefault();
  const input = $palindromeInput.value;
  if (input.trim() === '') {
    $palindromeInput.value = '';
    return;
  }
  $palindromeResult.innerHTML = `"${input}" is ${isPalindrome(input) ? '' : 'not'} a palindrome`;
  $palindromeInput.value = '';
});
