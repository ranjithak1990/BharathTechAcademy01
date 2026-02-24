let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let m:string[]=paragraph.match(/java/gi);
console.log(m.length)

function triangle(num:number):void{
     let star:string =""   
    for(let a=1;a<=num;a++){      
        for(let i=0;i<a;i++){
          star=star+" * "  // * **
    }
    console.log(star)
star=""}
}
triangle(5)
console.log("=====================")
const n: number = 5;   // Total number of rows for the pattern
function revtriangle(n:number):void{
// Outer loop controls the number of rows
for (let i: number = 1; i <= n; i++) {
    let line: string = "";

    // Inner loop to print spaces before stars in each row
    for (let j: number = i; j < n; j++) {
        line += " ";
    }
    // Inner loop to print stars in each row
    for (let j: number = 1; j <= i; j++) {
        line += "*";
    }

    console.log(line);
}}


revtriangle(5)