export function doSomething () {
    console.log(`Well, I am doin' someting, ain't I?`)
    return true;
}

export class SomeClass {
    invoke() {
        return true;
    }
}

// currently this will be my quick hack to comment this line out for the unit test. i have no idea how to handle this properly.
document.getElementById('button').addEventListener('click', doSomething);
