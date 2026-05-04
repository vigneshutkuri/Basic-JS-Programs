function prime(a) {
    if (a <= 1) {
        return "False";
    }

    for (i = 2; i < a; i++) {
        if (a % i === 0) {
            return "False";
        }
    }

    return "TRUE";
}
console.log(prime(6));