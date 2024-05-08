function primeNumbers (start, end) {
    const arr = []
    for (let i = start; i <= end; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            arr.push(i)
        }
    }
    return arr
}
