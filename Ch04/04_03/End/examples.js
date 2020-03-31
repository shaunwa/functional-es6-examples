const countUp = (x, max) => {
    if (x > max) return;
    console.log(x);
    countUp(x + 1, max);
};

countUp(0, 10);