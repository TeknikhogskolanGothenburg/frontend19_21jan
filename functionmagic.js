function functionFactory(exponent) {
    return function (base) {
        return base**exponent;
    }
}


var ff = (e) => {
    return (b) => {
        return b**e;
    };
};

console.log(ff(2)(3));


var funcs = [];
for(var i = 0; i < 100; i++) {
    funcs.push(ff(i));
}

funcs.forEach((f, _) => {
    console.log(f(2));
    
});




