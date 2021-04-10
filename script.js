const input = document.getElementById('input'),
    submitBtn = document.getElementById('submit'),
    result = document.getElementById('result'),
    trueResult = document.getElementById('true'),
    falseResult = document.getElementById('false');

function initiate() {
    result.classList.remove('d-none');
    trueResult.classList.add('d-none');
    falseResult.classList.add('d-none');
}

initiate();

function showTrue() {
    result.classList.toggle('d-none');
    trueResult.classList.toggle('d-none');
}

function showFalse() {
    result.classList.toggle('d-none');
    falseResult.classList.toggle('d-none');
}

var splitArraySameAverage = function (A) {
    const sum = A.reduce((a, b) => a + b);
    const N = A.length;
    const dp = {};

    A.sort((a, b) => b - a);
    for (let i = 1; i < A.length; i++) {
        if (sum * i % N === 0 && dfs(0, sum * i / N, i)) {
            return true;
        }
    }
    return false;

    function dfs(start, target, k) {
        if (target === 0 && k === 0) return true;
        if (target < 0 || k === 0) return false;
        if (target > k * A[start]) return false;

        const hash = [start, target, k].join(',');
        if (dp[hash] !== undefined) {
            return dp[hash];
        }

        for (let i = start; i < N; i++) {
            if (dfs(i + 1, target - A[i], k - 1)) {
                return true;
            }
        }
        dp[hash] = false;
        return false;
    }
}

function doIt() {
    initiate();
    if (input.value.length > 0) {
        let array = input.value.replace(/[\[\]']+/g, '').replace(/,\s*$/, "").split(",").map(el => +el);
        input.value = '[' + array.join(', ') + ']';
        return splitArraySameAverage(array) ? showTrue() : showFalse();
    }
}

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") doIt();
});
submitBtn.addEventListener('click', doIt);
