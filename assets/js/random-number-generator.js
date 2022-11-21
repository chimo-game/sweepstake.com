function randWithVariation(min, max, variation) {
    var seed = (Math.floor(Math.random() * max) % (max - min)) + min; // attempts to keep the result within the bounds
    var min = min, max = max, variation = variation;
    var r = function () {
        var offset = Math.floor(Math.random() * variation);
        if (Math.random() < 0.5) offset *= -1; // chance that number will decrease
        seed += offset;
        if (seed < min) return max - seed; // also attempts to keep the result within the bounds
        if (seed > max) return min + (seed - max);
        else return seed;
    }
    return r;
}

var rand = randWithVariation(100, 400, 10);
document.getElementById('rnd').innerHTML = rand();
setInterval(() => {
    document.getElementById('rnd').innerHTML = rand();
}, 2800);