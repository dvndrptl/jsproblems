// var dist = 50
// var money = 30
// var rate = 40
// var milage =40

// if(money/rate * milage > dist){
//     console.log("yes")
// }else{
//     console.log("no")

// }

// var product = {
//     price: 10000,
//     sale: ""

// }

// var a = product.sale==""? product.price:(product.sale<product.price? product.sale:"not able to sale")
// console.log(a)


// var isfrnd = false
// var cost = 10000
// var sale= 9000

// if(isfrnd){
//     console.log("sale it")
// }else{
//     if(sale-cost> (cost/sale)*100){
//     console.log("sale it")

//     }else{
//     console.log("dont sale")

//     }
// }
//  var iscold = true
//  var imp = true
//  var empl = true


//  if(empl){
//      console.log("come")
//  }else{
//      if(imp){
//      console.log("come")

//      }else{
//          if(iscold){
//      console.log("dont come")

//          }
//      }


// }







//  if(imp){
//     if(iscold){
//     console.log("come") }
// var a = "A"
// if(a==a ||a==e ||a==i ||a==o ||a==u ||a==A || a==E ||a==I||a==O ||a==U ||){
// IBFW
// }

// switch (a){
//     case "a":
//     case "a":
//     case "a":
//     case "a":
//     case "a":
//     case "a":
// }



// for (var i = 0; i <= 4; i++) {
//     console.log("devendra", i)
// }

// for (var i = 1; i <= 10; i++) {

//     console.log(i * 4)
// }
// var prod= [
//     {name: "pro1", qua: 10},
//     {name: "pro2", qua: 4},
//     {name: "pro3", qua: 9},
//     {name: "pro4", qua: 6},
//     {name: "pro5", qua: 8}
// ]
// var a = prod[0].qua
// var name = `${prod[0].qua}`

// for(var i =0; i<=4; i++){
// // var a= a+ prod[i].qua
// if(prod[i].qua>a){
//     a = prod[i].qua
//     name = prod[i].name
// }

// }
// console.log(name ,"ans")



var a = 20
var b = 0
for (var i = 2; i <= a; i++) {
    if (a % i == 0) {
        b++

    }
}
if (b == 1) {
    console.log("prime")
} else {
    console.log("non prime")

}
// var c = 0
// var d = 0
// do {
//     c++
//     if (a % c == 0) {
//         d++
//     }

// } while (c <= a)
// if (d == 2) {
//     console.log("prime")

// } else {
//     console.log("non prime")

// }

// var a = [1,3,5,6,3,2,4,5,6]
// var b = {

// }

// for(var j=0; j<=8;j++){
// var temp = 0

// for(var i =0; i<=8; i++){

// if([j]=[i]){
//     temp++
// }




// console.log(temp)

// }               



// }
// console.log(b)


// var stu = ["devndra","taha","krishna","arjun","sanjay", "pervesh","priyanka","himanshu","arbaj","pyragya"]
// var day = ["monday","teusday","wednesday","thursday","friday"]
// var int=[]
// var a = 0

// // int.length==1
// while(a<=2000){


// a++
//     day.forEach(function(el,ind){
//     var rand= parseInt(Math.random()*100000)%9
//     var mand= parseInt(Math.random()*1000)%9

//         var intobj={
//             day:"",
//             fst:"",
//             snd:""
//         }


//         if((stu[rand]!=="") && (intobj.fst==="") ){
//         intobj.fst=stu[rand]
//         stu[rand]=""
//         }

//         if((stu[mand]!=="") && (intobj.snd==="")){
//             intobj.snd=stu[mand]
//             stu[mand]=""
//             }


//         if( (intobj.snd!== "") && (intobj.fst!== "")  ){
//             if((intobj.day==="")&&(el!=="") ){
//                 intobj.day= el
//     el=""
//             }
//             int.push(intobj)
//             // intobj.day=""
//             // intobj.fst=""
//             // intobj.snd=""

//         }
//     })

// }
//       console.log(int)



var stu = ["devndra", "taha", "krishna", "arjun", "sanjay", "pervesh", "priyanka", "himanshu", "arbaj", "pyragya"]
var day = ["monday", "teusday", "wednesday", "thursday", "friday"]
var int = []
var a = 0
var x = 9

day.forEach(function (el, ind) {
    var rand = parseInt(Math.random() * 100000) % x

    var intobj = {
        day: "",
        fst: "",
        snd: ""
    }

    if (intobj.fst === "") {
        intobj.fst = stu[rand]
        stu.splice(rand, 1)
        x = x - 1

    }


    if ((intobj.snd === "")) {
        intobj.snd = stu[rand]
        stu.splice(rand, 1)
        x = x - 1

    }


    intobj.day = el

    int.push(intobj)
})
console.log(int)

//       var a = [66,2,3,4,54,5,343,2,4,545,3]
// console.log(a)
//  var b= a.shift() // only for end element
//  var c = a.pop() // only for starting element
//  var c = a.pop()
//  console.log(c)
//  console.log(a)
//  console.log(b)
//  //for selective deletion = splice , for selective element

//  var a = [ 2,3,8,5,7,2,5,6,6,3,32,54,65,66]
//  console.log(a)
// a.splice(0,3,8,)
// console.log(a)

function forPrime(num) {
    var isPrime = false
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {

        }
    }
}


function frac(num) {
    let number = num
    var fract = 1
    for (var i = 1; i <= number; i++) {
        fract = fract * i
    }
    return fract
}
console.log("fract", frac(4))


function pow(num, topow) {
    let power = num
    for (var i = 1; i <= topow - 1; i++) {
        power = power * num
    }
    return power
}
console.log("power", pow(4, 3))

var till = 10
var till1 = parseInt(till / 2)

for (var i = 0; i <= till1; i++) {
    var temp = i * 2
    console.log((temp * -1))



}




var obj = {
    name: "devendra ",
    surname: "patel",
    course: "MERN",

}
var key = "course"

console.log('ams ni milega lya', obj[key]);

for (var key in obj) {
    console.log(obj[key])
}



function ClassA(a, b, c, z) {
    this.one = a,
        this.two = b,
        this.three = c
    this.four = z
}



var d = function (bac) {
    return (console.log("yeah h d", bac))
}
var newobj = new ClassA("golu", "amar", d)

console.log("chalo dekhte hai dkamaka", newobj);
// console.log(d());
console.log("apan function call kara kar dekgte hai", d("HELLO"));



var a = 100
var b = 500
var c = []
for (var i = a; i <= b; i++) {
    var d = 0
    for (var j = 2; j <= i / 2; j++) {

        if (i % j == 0) {
            d++
            break
        }
    }


    if (d == 0) {
        c.push(i)

    }

}
console.log(c)


// var products = [
//     { title: "Iphone X", mrp: "98765", sale_price: 87654, category: "mobile" },
//     { title: "Dell keyboard", mrp: "2300", sale_price: 1200, category: "electronics" },
//     { title: "Benq LED", mrp: "18000", sale_price: 15500, category: "Screen" },
//     { title: "Iphone XR", mrp: "198765", sale_price: 187654, category: "mobile" },
//     { title: "Iphone", mrp: "298765", sale_price: 287654, category: "mobile" },
//     { title: "Iphone 1", mrp: "2765", sale_price: 2654, category: "mobile" },
//     { title: "Iphone 2", mrp: "29875", sale_price: 27654, category: "mobile" },
//     { title: "go1", mrp: "265", sale_price: 24, category: "glass" },
//     { title: "local", mrp: "265", sale_price: 254, category: "viper" },
//     { title: "go2", mrp: "285", sale_price: 254, category: "glass" },

// ]



// var x = products.filter(function (el, ind) {
//     return el.category == "mobile"
// })

// var y = products.filter(function (ele, ind) {
//     // if(ele.sale_price>=1000 && ele.sale_price<=10000){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     return ele.sale_price >= 1000 && ele.sale_price <= 10000
// })

// console.log("hello", y);

// // function power(a,b) {
// //     pow=1;
// //     for(var i=1;i<=b;i++){
// //         pow*=a
// //     }
// //     return pow

// // }

// // var x=2
// // var n=5
// // square=0;
// // var term =2

// // for(var i=1;i<=n;i++){
// //     term++
// //     b=2*i-1;
// //     if(term%2==0){
// //         square+= -power(x,b)
// //     }else{

// //    square+= power(x,b)
// //     }

// // }
// // console.log(square)



// // var b = false
// // var c = 
// // var a= [ 30,40,50,20]
// // for(var i =0; i<=a.length-1; i++){
// //     if(a[i]==40){
// //         b = true
// //     }
// // }
// // console.log(b)

// var a = [1, 3, 4, 5, 6, 7, 5, 43, 23, 2, 2, 2, 3, 4]
// var b = []
// a.forEach(function (ele, ind) {
//     if (!b.includes(ele)) {
//         b.push(ele)
//     }
// })
// console.log(b);

// // var a= [1,2,[5,2],3,4]
// // a.map(function(el,ind){
// //     if(Array.isArray(el)){
// //         return (...el)
// //     }
// // })
// var a = [1, 2, [5, 2], 3, 4]

// var b = a.map(function (el, ind) {
//     if (Array.isArray(el)) {

//         for (var i = 0; i <= el.length - 1; i++) {
//             console.log(i)

//             return el[i]
//         }
//     } else {
//         return el
//     }
// })
// console.log("hello aya kya", b)


// var a = [1, 3, 4, 5, 6, 7, 5, 43, 23, 2, 2, 2, 3, 4]

// // function evenodd(arr, oddfn, evnfn){
// //     arr.forEach(function(ele,ind){
// //         if(ele%2==0){
// //             console.log(evnfn)
// //         }else{
// //             console.log(oddfn)

// //         }
// //     })
// // }

// // evenodd(a,oddfn,even)


// var a = [1, 3, 4, 5, 6, 7, 5, 4, 3, 2, 2, 2, 3, 4]
// var b = []
// var flat = 2
// for(var i =0; i<a.length; i++){
//    b.push(a.slice(i,i+2))
// }
// console.log(b)


// var a = [1, 3, 4, 5, 6, 7, 5, 4, 3, 2, 2, 2, 3, 4]
// var b = []
// var flat = 2
// for(var i =0; i<a.length; i+=2){
//    b.push(a.slice(i,i+2))
// }
// console.log(b)

// var a = [1, 2, 3, 4, 2, 1, 3]
// var b = [6, 3, 3, 2, 1, ]

// //1) union => [1, 2, 3, 4, 6]
// //2) a intersection b => [3, 1] (common not repeated)
// //3) a not b => [ 2 , 4]
// //4) b not a => [6]
// var c= []


// var products = [
//     { title: "Iphone X", mrp: "98765", sale_price: 87654, category: "mobile" },
//     { title: "Dell keyboard", mrp: "2300", sale_price: 1200, category: "electronics" },
//     { title: "Benq LED", mrp: "18000", sale_price: 15500, category: "Screen" },
//     { title: "Iphone XR", mrp: "198765", sale_price: 187654, category: "mobile" },
//     { title: "Iphone", mrp: "298765", sale_price: 287654, category: "mobile" },
//     { title: "Iphone 1", mrp: "2765", sale_price: 2654, category: "mobile" },
//     { title: "Iphone 2", mrp: "29875", sale_price: 27654, category: "mobile" },
//     { title: "go1", mrp: "265", sale_price: 24, category: "glass" },
//     { title: "local", mrp: "265", sale_price: 254, category: "viper" },
//     { title: "go2", mrp: "285", sale_price: 254, category: "glass" },

// ]
//  var e = products.sort(function(a, b){
//      return a.sale_price - b.sale_price

//  })
//  console.log( "sahi nahi hai kya", e);


var people = [
    { a: 'qdfqe', dob: 1994 },
    { a: 'qdfwrqe', dob: 1999 },
    { a: 'qgfqe', dob: 1998 },
    { a: 'qrgqe', dob: 2001 },
    { a: 'qerqe', dob: 2008 },


]


//  var a = people.filter(function(ele, ind){
//      return (2022-ele.dob)>
//  })



var a = [1, 2, 3, 4, 2]
var sum = 4
var res = []
var final = []
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] == sum) {
            res.push(a[i])
            res.push(a[j])
            final.push(res)
            res = []
        }
    }

}

console.log("aya kya", final)

// a.forEach(function (ele, ind) {
//     if (a[i] + ele == sum) {
//         res.push(a[i])
//         res.push(ele)
//         final.push(res)
//         res = []
//     }
// })

var a = [1, 2, 3, 4, 2, 5, 6, 8, 9]
var b = []
a.forEach(function (ele, ind) {
    if (ind <= a.indexOf(5)) {
        b.push(ele)
    } else {
        b.unshift(ele)
    }

})
console.log('ans yahi h', b);
var a = [1, 2, 3, 4, 5, 6, 8, 9]
var b = []
var num = 9
for (var i = 0; i < num; i++) {
    if (!a.includes(a[i])) {
        b.push(a[i])
    }
}

console.log(b);

var a = [1, 2, 3, 2, 9, 5, 6, 6, 4, 3, 3, 5, 6]
var result = []


a.forEach(function (el) {
    if (!result.includes(el)) {
        result.push(el)
    }
})

var ans = []
console.log("ans", result)
var per = 20
result.forEach(function (ele, ind) {
    var count = 0


    a.forEach(function (elem) {
        if (ele == elem) {
            count++
        }
    })
    var compare = (count / a.length) * 100

    if (compare > 20) {
        ans.push(ele)
    }

})
console.log('ans', ans)



var a = [1, 2, 3, 2, 9, 11, 5, 6, 6, 4, 1, 3, 5, 7]
var output = []
var temp1 = 0
var temp2 = 0
var temp3 = 0
var temp4 = 0
a.forEach(function (ele, ind) {
    temp1 = ele
    for (var i = ind + 1; i < a.length; i++) {
        temp2 = a[i]
        temp3 = temp1 + temp2
        if (temp4 < temp3) {
            temp4 = temp3
            output.push(ind, i)
        }
    }

})
var finalres = []
finalres.push(output[output.length - 2], output[output.length - 1])
console.log('output', output)

console.log('output', finalres)
console.log(a.length)




// var arr = [-1, -3, -1, 5, 2, -3, 5, -2]

// var sumZero= [ [-1, -3, -1, 5], [-3, 5, -2]]



var arr = [-1, -3, -1, 5, 2, -3, 5, -2]
var a = 0
var b = []
var c = []
for (var i = 0; i < arr.length; i++) {


    for (var j = i; j < arr.length; j++) {
        a += arr[j]
        b.push(arr[j])
        if (a == 0) {
            c.push(b)
            b = []
        }
    }
    b = []
    a = 0
}
console.log(c)





// function getArraySum(arr){
//     return arr.reduce(function(acc, el){
//       return acc+el
//     })
//   }

//   var sumZero = []

//   var arr = [-1, -3, -1, 5, 2, -3, 5, -2]

//   for (let i = 0; i < arr.length; i++) {

//     for(var j=i+1; j<arr.length; j++){
//       var subArr = arr.slice(i, j)
//       if(getArraySum(subArr) == 0){
//         sumZero.push(subArr)

//       }
//     }
//   }


//   console.log(sumZero)




var str = "welcome to geeksdoor. find a geek within. geeksdoor is a place where you can learn programming easily."

var count = 0

for (var i = 0; i < str.length; i++) {
    var temp = ""
    
        temp = str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] + str[i + 5] + str[i + 6] + str[i + 7] + str[i + 8]
        console.log("temp", temp)

        if (temp == "geeksdoor") {
            count++
        }

    
}
console.log("count", count)


console.log(otp)

function otp(digit){
    var otp = ""
    var a = "1234567890"
    for(var i = 0; i<=digit-1; i++){
    var b = parseInt(Math.random()*1000000)%11
    
        otp+= a[b]
    }
    return otp
}
console.log(otp(4))







console.log( "ans aya kya", aisa())


function aisa(){
    var az = 10
    console.log("direct", az)
    // return az
}

// console.log("by scope", az)