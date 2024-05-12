let arr = [42, 12, 18]

function findCommonDivisors(arr) {
    function findDivisors(n) {
        let divisors = [];
        for (let i = 0; i <= n; i++) {
            if (n % i === 0 && i !== 1) {
                divisors.push(i);
            } 
        }
        return divisors;
    }

    let commonDivisors = findDivisors(arr[0]);

    for (let i = 0 ; i < arr.length; i++) {
        let divisors = findDivisors(arr[i]);
        commonDivisors = commonDivisors.filter(value => divisors.includes(value));
    }

    return commonDivisors;
}

