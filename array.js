var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for( var color in colors) {
    console.log(colors[color]);
}

colors.forEach(printit);

function printit(color, _) {
    console.log(color);  
}


colors.forEach(function (color, _){
    console.log(color); 
});

colors.forEach((color, _) => {
    console.log(color); 
});

var hello = () => { return "Hi there";};
console.log(hello());
