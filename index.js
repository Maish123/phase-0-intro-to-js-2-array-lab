// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name){
    cats.push('Ralph')
};

function destructivelyPrependCat(name){
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat(name){
    cats.pop()
};

function destructivelyRemoveFirstCat(name){
    cats.shift()
};

function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats];
}

function removeFirstCat(){
    return cats.slice(1)
};

function removeLastCat(){
    return cats.slice (0, cats.length - 1)
};



