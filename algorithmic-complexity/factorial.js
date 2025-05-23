function factorial(n) {
    if(n == 0) {
        console.log('**************************');
        return;
    }

    for(let i = 0; i < n; i++) {
        factorial(n - 1);
    }
}

factorial(3);