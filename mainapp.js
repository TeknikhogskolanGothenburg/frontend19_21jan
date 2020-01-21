const y = 10;

function otherFunction() {
    x = 11;
}

function main() {
    otherFunction();
    console.log("inside main " + x);

}

main();