let aa={  
    a:25,
    name: "Ram",
    age:25,
    obj:{name:"rahul",age:26},
    add:function(a,b){
       return  a+b;
    },
    sub:(a,b)=>a-b,
    get value(){
       return {name:this.obj.name ,age:this.obj.age}
    },
    set value(newage){
        return {name:this.a=newage,name,age:this.age=newage.age}
    }

}
console.log(aa.name)
console.log(aa.age)
console.log(aa.add(30,20))
console.log(aa.sub(30,20))
console.log(aa.value)
aa.obj={name:"mani",age:35}
console.log(aa.value)


class Arraymethods{
constructor(a,b){
    this.a=a,
    this.b=b
}
methoad1(a,b){
 return a+b;
}
get method(){
  return this.a+this.b;
}
set method(a){
 return (this.a=a + this.b)
}
}

let mm=new Arraymethods(6,7)
console.log(mm.methoad1(1,2))
console.log(mm.method)
mm.method=89
console.log(mm.method)