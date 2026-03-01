// Type Intersections (&)
// This type of intersections, doesn't work with primitive types, for example: string & number or string & Human

interface Robot {
    material: string,
    fuel: string
}

interface Human {
    name: string,
    age: string
}

type Cyborg = Robot & Human

// const cyborg: Cyborg = {
    
// }


interface MyFetchOptions {
    printTime?: boolean;
    printInput?: boolean;
}

type RequestOptions = MyFetchOptions & RequestInit

export function myFetch(input: string, options?: RequestOptions){
    if (options?.printInput){
        console.log("Input", input);
    }
    if (options?.printTime){
        console.log("Time", new Date().toDateString())
    }
    return fetch(input, options);
}

myFetch("http://localhost:8080/auth", {

})