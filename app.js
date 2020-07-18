
//Chapter#1
document.write("Ch_1 <br><br>");

alert("Greetings!");//Q:1
alert("Error! Please enter a valid password.");//Q:2
alert("Welcome to JS Land...\nHappy coding!");//Q:3
alert("Welcome to JS Land..");//Q:4
alert("Happy coding!\nPrevent this page from creating additional dialogs");
alert("Hello... I can run JS through my web browser's console");//Q:5

//chapter#2
document.write("Ch_2 <br><br>");
var username;//Q:1
var myName="Duaa Shaikh";//Q:2
var message="Hello World";//Q:3
var studentName="John Doe";//Q:4
var studentAge="15 years old";
var studentProfession="Certified Mobile Application Development";
var display="PIZZA\nPIZZ\nPIZ\nPI\nP";//Q:5
var email="duashykh68%7@gmail.com"//Q:6
var book="A smarter way to learn Javascript"//Q:7
alert(message);
alert(studentName);
alert(studentAge);
alert(studentProfession);
alert(display);
alert("My email address is "+ email);
alert("Yah! I can write HTML content through JavaScript")//Q:8
alert("i am trying to learn from the Book "+ book);
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");//Q:9


//Chapter#3
document.write("Ch_3 <br><br>");
var username;//Q:1
var myName="Duaa Shaikh";//Q:2
var message="Hello World";//Q:3
var studentName="John Doe";//Q:4
var studentAge="15 years old";
var studentProfession="Certified Mobile Application Development";
var display="PIZZA\nPIZZ\nPIZ\nPI\nP";//Q:5
var email="duashykh68%7@gmail.com"//Q:6
var book="A smarter way to learn Javascript"//Q:7
alert(message);
alert(studentName);
alert(studentAge);
alert(studentProfession);
alert(display);
alert("My email address is "+ email);
alert("Yah! I can write HTML content through JavaScript")//Q:8
alert("i am trying to learn from the Book "+ book);
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");//Q:9

//Chapter#4
document.write("Ch_4 <br><br>");


var x,y,z; //Q:1

var a,_b,c1,b,d;//Q:2
//var 1s,2d,+b,82,9; 

document.write("Q:3 <br><br>");//Q:3
document.write("Rules for naming JS variables <br><br>");
var a="numbers,",b="$,",c="and _.",d="letter,";
document.write("Variables names can only contain"+a+b+c+"<br>Variables must begin with a"+d+b+c+"<br>Variable names are case sensitive"+"<br>Variables names should not be JS keywords<br>");

//Chapter#5
document.write("Ch:5 <br> <br>");

document.write("Q:1 <br><br>");//Q:1

var a= +prompt("Enter 1st number" );
var b= +prompt("Enter 2nd number" );
var c=a+b;
document.write("sum of " + a + " " + "and"+ " " + b + " "+ "is" + " "+ c +"<br><br>" );

document.write("Q:2 <br><br>");//Q:2
var val1= +prompt("Enter 1st number" );
var val2= +prompt("Enter 2nd number" );
var sub=val1-val2;
var mul=val1*val2;
var div=val1/val2;
var mod=val1%val2;
document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ sub +"<br><br>" );
document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mul +"<br><br>" );
document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ div +"<br><br>" );
document.write("Modulus of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mod +"<br><br>" );


document.write("Q:3 <br><br>");//Q:3
var v;
document.write("Value after variable declaration is: " + v + "<br>") ;
v=14;
document.write("Intial Value :" + v + "<br>");
document.write("Value after increment is :" + (++v) + "<br>");
v=v+7;
document.write("Value after addition is :" + v + "<br>");
document.write("Value after decrement is :" + (-- v) + "<br>");
document.write("The remainder is :" + v/3 + "<br><br>");

document.write("Q:4 <br><br>");//Q:4
var people=+prompt("Enter total number of people");
var tp=600*people;
document.write("Total cost to buy" + " " + people + " "+ "tickets to a movie is "+ ""+ tp+"PKR <br> <br>" );


document.write("Q:5 <br><br>");//Q:5
var num=+prompt("Enter any number for multiplication");
var length=+prompt("Enter length of table");
document.write("Table of" + " " + num  + " <br>" );
for(var i=1; i<=length;i++)
{
    var table=num*i;
    document.write(num + "*"+ i + "="+ table + "<br><br>");
}

document.write("Q:6 <br><br>");//Q:6
document.write("The Temperature Converter <br> <br>");
var celsius=+prompt("Enter temperature in celsius");
var fahrenheit=+prompt("Enter temperature in fahrenheit");
document.write(celsius+"oC" +" " + "is" +" "+((celsius*(9/5))+32)+"oF <br>");
document.write(fahrenheit+"oF" +" "+ "is"+" "+ ((fahrenheit-32)*(5/9)) +"oC <br> <br>");


document.write("Q:7 <br><br>");//Q:7
document.write("Shopping Cart <br><br>");
var item1=650;
var item2=100;
var quantity_item1=+prompt("Enter Quantity of item1");
var quantity_item2=+prompt("Enter Quantity of item2");
var ship_charges=100;
document.write("Price of item 1 is:" +" " + item1 +"<br>");
document.write("Quantity of item 1 is: "+ " " +  quantity_item1 +"<br>");
document.write("Price of item 2 is:" + " " + item2 +"<br>");
document.write("Quantity of item 2  is: " +" " + quantity_item2 +"<br>");
document.write("Shippment Charges :" + " " + ship_charges+"<br>");
document.write("Total cost of your order is:" +  " " + ((item1*quantity_item1)+(item2*quantity_item2)) +"<br><br>");

document.write("Q:8 <br><br>");//Q:8
document.write("Mark Sheet <br><br>");
var total_marks= +prompt("Enter total marks");
var obtained_marks=+prompt("Enter obtained marks");
var percentage=(obtained_marks/total_marks)*100;
document.write("Total marks: " + " " + total_marks+ "<br>");
document.write("Obtained marks: " + " " + obtained_marks+ "<br>");
document.write("Percentage: " + " " + percentage+ "%  <br><br>");

document.write("Q:9 <br><br>");//Q:9
document.write("Currency in PKR <br><br>");
var dollar_1 = 104.80;
var saudiRiyal_1=28;
document.write("Total Currency in PKR:"+" " + ((10*dollar_1)+(25*saudiRiyal_1)) +"<br><br>");

document.write("Q:10 <br><br>");//Q:10
var number=3;
document.write("Result:"+" "+ ((number+5)*10)/2 + "<br> <br>");

document.write("Q:11 <br><br>");//Q:11
document.write("Age Calculator <br><br>");
var current_year=2020;
var birth_year=+prompt("Enter your Birth Year");
document.write("Current Year: "+" "+ current_year+ "<br>");
document.write("Birth Year: "+" "+ birth_year + "<br>");
document.write("Your Age is: "+" "+ (current_year-birth_year) +"<br><br>");


document.write("Q:12 <br><br>");//Q:12
document.write("The Geometrize <br><br>");
var r=+prompt("Enter Radius");
var pi=3.142;
document.write("The Radius of Circle is: " +" "+ r +"<br>");
document.write("The Circumference is:"+ " " + 2*pi*r+ "<br>");
document.write("Area of circle is: "+" "+ pi*r*r + "<br> <br>");



document.write("Q:13 <br><br>");//Q:13
document.write("The Lifetime Supply Calculator<br><br>");
var fav_snack=prompt("Enter your Favourite Snack");
var current_age=+prompt("Enter your current age");
var max_age=+prompt("Enter your estimated maximum age");
var snack_perDay=+prompt("Enter estimated amount of snack per day");

document.write("Favourite Snack:"+" " + fav_snack + "<br>");
document.write("Current age:"+" " + current_age + "<br>");
document.write("Estimated Maximum Age:"+" " + max_age + "<br>");
document.write("Amount of snacks per day:"+" " + snack_perDay + "<br>");
document.write("You will need:"+" " +((max_age-current_age)*snack_perDay) +" "+ "chocolate chip to last you until the ripe old age of"+" "+ max_age+ "<br>" );


//chapter#6-9
document.write("Ch_6-9 <br><br>"); 

document.write("Q:1 <br><br>"); //Q:1

var a=+prompt("Enter a number");

document.write("Result:<br>The value of a is:"+a+"<br>...................<br>");
document.write("The value of ++a is:"+ ++a+"<br>Now the value of a is:"+a+"<br><br>");
document.write("The value of a++ is:"+a++ +"<br>Now the value of a is:"+a);
document.write("<br><br>The value of --a is:"+ --a+"<br>Now the value of a is:"+a);
document.write("<br><br>The value of a-- is:"+a-- +"<br>Now the value of a is:"+a);

document.write("Q:2 <br><br>");  //Q:2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;//1-0+1+1
document.write("<br>a is 2<br>b is 1<br>result is "+result);

document.write("<br>Q:3 <br><br>");  //Q:3

var user=prompt("Enter your name");
alert("Greetings "+user );

document.write("<br>Q:4 <br><br>");  //Q:4
var num=+prompt("Enter a number");
for(var i=1;i<=10;i++)
    {
    if (num=="")
    document.write("<br>5*"+i+"="+5*i ); 
    else    
    document.write("<br>"+num+"*"+i+"="+num*i);   
    }
    document.write("<br><br>"); 

    document.write("Q:5 <br><br>");  //Q:5

var sub1=prompt("Enter 1st subject name");
var sub2=prompt("Enter 2nd subject name");
var sub3=prompt("Enter 3rd subject name");
var marks1=+prompt("Enter marks of 1st subject");
var marks2=+prompt("Enter marks of 2nd subject");
var marks3=+prompt("Enter marks of 3rd subject");
var total=100;

//chapter#9-11
document.write("Chapter_9-11 <br> <br>");

document.write("Q:1 <br> <br>");//Q:1
var city = prompt("Enter City");
if(city === "karachi")
{
    document.write("Welcome to city of lights <br> <br>");
}

document.write("Q:2 <br> <br>");//Q:2
var gender= prompt("Enter your gender");
 if(gender === "male")
{
    document.write("Good Morning Sir <br><br>");
}
else{
    document.write("Good Morning Ma'am <br> <br> ")
}


document.write("Q:3 <br> <br>");//Q:3
var signal_color=prompt("Enter traffic signal color");
var red="Must Stop";
var yellow="Ready to move";
var green="Move now";
if(signal_color=== "red"){
document.write(red +" <br><br>");
}
else if(signal_color=== "yellow"){
    document.write(yellow +"<br><br>");
}
else{
    document.write(green +" <br><br>");
}

document.write("Q:4 <br> <br>");//Q:4
var fuel=+prompt("Enter remaining fuel of car in litres");
if(fuel < 0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("No need to refill the fuel <br> <br>");
}



document.write("Q:5 <br> <br>");//Q5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 } 
 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    } 
 var c = 12; 
 if (c++ === 13){
      alert("condition 1 is true"); 
    } 
 
 if (c === 13){ 
     alert("condition 2 is true"); 
    }
  if (++c < 14){ 
      alert("condition 3 is true"); 
    }
       if(c === 14){
            alert("condition 4 is true");
         } 
 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
} 
  if (true){ 
      alert("True");
     } 
  if (false){ 
      alert("False");
     } 
  if("car" < "cat"){ 
      alert("car is smaller than cat");
     } 
 
document.write("Q:6 <br> <br>");//Q:6
var subj1=+prompt("Enter marks of 1st subject");
var subj2=+prompt("Enter marks of 2nd subject");
var subj3=+prompt("Enter marks of 3rd subject");
var total_marks=300;
var obtained_marks=subj1+subj2+subj3;
var percentage=(obtained_marks/total_marks)*100;
document.write("Total Marks: "+" "+ total_marks+"<br>");
document.write("Obtained Marks: "+" "+ obtained_marks+"<br>");
if(percentage >= 80){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A1 <br>");
    document.write("Remarks : Excellent<br><br>");
}
else if(percentage >= 70){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A <br>");
    document.write("Remarks : Good<br><br>");
}
else if(percentage >= 60){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : B <br>");
    document.write("Remarks : You need to improve<br><br>");
}
else{
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : Fail <br>");
    document.write("Remarks : Sorry<br><br>");
}


document.write("Q:7 <br> <br>");//Q:7
document.write("Guess Game <br> <br>");
var secret_num=5;
var guess_num=+prompt("Guess the secret number (ranging from 1 to 10)");
if(guess_num === secret_num){
    document.write("Bingo! Correct");
}
else if(guess_num+1 === secret_num){
    document.write("Close enough to the correct answer");
}
else{
    document.write("Try Again");

}

document.write("Q:8 <br> <br>");//Q:8
var num=+prompt("Enter number");
if(num%3 === 0){
document.write("Given number is divisible by 3 <br> <br>");
}
else{
    document.write("Try another number <br> <br>");

}


document.write("Q:9 <br> <br>");//Q:9
var number=+prompt("Enter number");
if(number%2=== 0){
document.write("Given number is even <br> <br>");

}
else{
    document.write("Given number is odd <br> <br>");
}


document.write("Q:10 <br> <br>");//Q:10
var temp=+prompt("Enter Temperature");
if(temp>40){
    document.write("It is too hot outside <br> <br>");
}
else if(temp>30){
    document.write("The Weather today is Normal <br> <br>");
}
else if(temp>20){
    document.write("Today’s Weather is cool <br> <br>");
}
else{
    document.write("OMG! Today’s weather is so Cool<br> <br>");
}


document.write("Q:11 <br><br>");//Q:11
var val1= +prompt("Enter 1st number" );
 var val2= +prompt("Enter 2nd number" );
 var op= prompt("Enter Operator");
 var ans;
 if(op === "+"){
    ans=val1+val2;
   document.write("Addition of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
 else if(op === "-"){
     ans=val1-val2;
    document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
 }
 else if(op === "*"){
    ans=val1*val2;
   document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "/"){
    ans=val1/val2;
   document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "%"){
    ans=val1%val2;
   document.write("Modulas of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else{
    document.write("Invalid Operator");
}
document.write("<br><br>")


 //chapter#12-13
document.write("Ch_12-13 <br><br>"); 

document.write("Q:1 <br><br>"); //Q:1

var x=prompt("Enter a character");
if(x>='A' && x<='Z')
    document.write("Character is uppercase");
else if(x>='a' && x<='z')
    document.write("Character is lowercase");
else 
    document.write("Character is a number");

    document.write("<br>Q:2 <br><br>"); //Q:2

var y=+prompt("Enter 1st integer");
var z=+prompt("Enter 2nd integer");
if(y==z)
    document.write("Integers are equal");
else if(y>z)
    document.write("Integer 1 is greater");
else
    document.write("Integer 2 is greater");
    
    document.write("<br>Q:3 <br><br>"); //Q:3

var num=+prompt("Enter a number");
if(num>0)
    document.write("Number is positive");
else if(num<0)
    document.write("Number is negative");
else
    document.write("Number is zero");

    document.write("<br>Q:4 <br><br>"); //Q:4

var x=prompt("Enter a character");
if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||x=='A'||x=='E'||x=='I'||z=='O'||x=='U')
    document.write("true");
else
    document.write("false");

    document.write("<br>Q:5 <br><br>"); //Q:5

var pass="hardy123";
var userpass=prompt("Enter your password");
if(userpass=="")
    document.write("Please enter your password");
else if(userpass==pass)
    document.write("Correct!The password you entered matches the original password");
else
    document.write("Incorrect password");

 document.write("<br>Q:6 <br><br>"); //Q:6
var greeting; 
var hour = 13; 
if (hour < 18){
    greeting = "Good day"; 
}
else {
    greeting = "Good evening"; 
}

document.write("<br>Q:7 <br><br>"); //Q:7

var time=+prompt("Enter time in 24 hour format");
if(time>=0000 && time<1200)
    document.write("Good morning!");
else if(time>=1200 && time<1700)
    document.write("Good afternoon!");
else if(time>=1700 && time<2100)
    document.write("Good evening!");
else 
    document.write("Good night!");


    //chapter#14-16
    document.write("Ch_14-16 <br><br>"); 


var arr=[]; //Q:1

var arr1 = new Array(); //Q:2

var stuArr=["Duaa","Emilly","Falak"]; //Q:3

var numArr=[450,258,359];//Q:4

var bolArr=[true,false,true];//Q:5

var mixArr=["Danish",8,"duaa",1];//Q:6

document.write("Q:7 <br><br>"); //Q:7

var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications<br>");
for(var i=0;i<qual.length;i++)
    {
      document.write(i+1+")"+qual[i]+"<br>");  
    }

document.write("Q:8 <br><br>"); //Q:8
var student=["Michael","John","Tony"];
var score=[320,230,480];
var total_marks=500;
for(i=0;i<student.length;i++)
    {
        document.write("Score of "+student[i]+" is "+score[i]+". Percentage:"+(score[i]/total_marks)*100+"%<br>");
    }


    document.write("<br>Q:9 <br><br>"); //Q:9
var colArr=["red","green","blue"];
document.write(colArr);
var item1=prompt("Which color you want to add at the beginning?");
colArr.unshift(item1);
document.write("<br>"+colArr);
var item2=prompt("Which color you want to add at the end?");
colArr.push(item2);
document.write("<br>"+colArr);
colArr.unshift("black","brown");
document.write("<br>"+colArr);
colArr.shift();
document.write("<br>"+colArr);
colArr.pop();
document.write("<br>"+colArr);
var index=+prompt("At which index you want to add the color?");
var item3=prompt("Which color you want to add?");
colArr.splice(index,0,item3);
document.write("<br>"+colArr);
var index1=+prompt("At which index you want to delete the color?");
var tnum=+prompt("how many colors you want to delete?");
colArr.splice(index1,tnum);
document.write("<br>"+colArr);


document.write("<br>Q:10 <br><br>"); //Q:10

var score=[320,230,480,120];
document.write("Score of Students: "+score+"<br>Ordered Score of Students: "+score.sort());


document.write("<br>Q:11 <br><br>"); //Q:11
var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>Cities list: <br>"+  city +"<br>Selected cities list:<br>"+city.slice(2,4));

document.write("<br>Q:12 <br><br>"); //Q:12

var arr=["This","is","my","cat"];
document.write("<br>Array:<br>"+arr+"<br>String:<br>"+arr.join(" "));


document.write("<br>Q:13 <br><br>"); //Q:13

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>"+devices);
for(var i=0;i<devices.length;i++)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:14 <br><br>"); //Q:14

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>" + devices);
for(var i=devices.length-1;i>=0;i--)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:15 <br><br>"); //Q:15

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(arr);

//chapter#17-20
document.write("Ch_17-20 <br><br>"); 

var arr=[]; //Q:1
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]; //Q:2

document.write("Q:3 <br><br>");//Q:3
for(i=1;i<=10;i++){
    document.write(i+"<br>");
}
document.write("<br>Q:4 <br><br>");//Q:4
var num=+prompt("Enter a number to show its multiplication table");
var len=+prompt("Enter length multiplication table");
document.write("Multiplication table of "+num+"<br>Length "+len)
for(var i=1;i<=len;i++){
    document.write("<br>"+num+"*"+i+"="+num*i);
}

document.write("<br><br>Q:5<br>");//Q:5
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i=0;i<fruits.length;i++)
    document.write("<br>"+fruits[i]);
for(var i=0;i<fruits.length;i++)
    document.write("<br>Element at index "+i+" is "+fruits[i] +"<br><br>");

document.write("<br>Q:6 <br><br>");//Q:6
document.write("Counting:<br>");
for(var i=1;i<15;i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting:<br>");
for(var i=10;i>0;i--){
    document.write(i+",");
}
document.write("<br>Even:<br>");
for(var i=0;i<=20;i+=2){
    document.write(i+",");
}
document.write("<br>Odd:<br>");
for(var i=1;i<20;i++){
    document.write(i+",");
}
document.write("<br>Series:<br>");
for(var i=0;i<=20;i+=2){
    document.write(i+"k,");
}

document.write("<br><br>Q:7 <br><br>");//Q:7
var a=["cake","apple pie","cookie","chips","patties"];
var item=prompt("Welcome to ABC Bakery! What do you want to order sir/madam?");
for(var i=0;i<a.length;i++)
    if(a[i]==item)
    {document.write(item+" "+"is available at index "+i+" in our bakery <br><br>");
    break;}
else if(a[i]!=item)
   {document.write("We are sorry "+item+" is not available in our bakery<br><br>");
    break;
   }
document.write("<br>Q:8 <br><br>");//Q:8
var A = [24, 53, 78, 91, 12];
var max=0;
document.write("Array items:"+A);

for(var i=0;i<A.length;i++)
    {
        if(A[i]>max)
            max=A[i];
            
    }
document.write("<br>The largest number is "+max);

document.write("<br><br>Q:9 <br>");//Q:9
var A = [24, 53, 78, 91, 12];
var min=0;
document.write("<br>Array items:"+A);
min=A[0];
for(var i=0;i<A.length;i++)
    {
        if(A[i]<min)
            min=A[i];
            
    }
document.write("<br>The smallest number is "+min+"<br>");

document.write("<br>Q:10 <br><br>");
for(var i=5;i<=100;i+=5)
document.write(i+",")



//Chapter#21-25

//Question#1
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullname;
fullName=firstName+lastName;
alert("Greetings" + " " + fullName );

// //Question#2
var mobileModel = prompt("Enter your favorite mobile model");
document.write("My favorite phone is: " + " " + mobileModel + "<br>");
var count=mobileModel.length;
document.write("Length Of String: "+ " " + count + "<br>");

// //Question#3
var letter = "Pakistani";
document.write("String: "+ " " + letter + "<br>" );
document.write("Index of Letter 'n' is:" + " "+ letter.indexOf("n") + "<br>");

// //Question#4
var letter = "Hello World";
document.write("String: "+ " " + letter + "<br>" );
document.write("Last Index of Letter 'L' is:" + " "+ letter.lastIndexOf("l") + "<br>");


// //Question#5
var letter = "Pakistani";
var thirdIndex=letter.charAt(3);
document.write("String: "+ " " + letter + "<br>" );
document.write("3rd Index of Character is:" + " "+ thirdIndex+ "<br>");


// //Question#6
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullName=firstName.concat(lastName);
document.write("Full Name is: "+ " "+ fullName);


// //Question#7
var str1="Hyderabad";
document.write("City:" + " " + str1 + "<br>");
var str2=str1.replace("Hyderabad","Islamabad" );
document.write("After replacement:" + " " + str2+ "<br>");


// //Question#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message2= message.replace(/and/g, "&")
document.write("After replacement : " + " " + message2+ "<br>");


// //Question#9
var value=472;
var str=value.toString()
document.write("Value: " + " "+str +"<br>");
document.write("Type: "+ " " + typeof str +"<br>");
document.write("Value: " + " "+value +"<br>");
document.write("Type: "+ " " + typeof value +"<br>");


// //Question#10
var a=prompt("Enter your input");
var b=a.toUpperCase();
document.write("User input: " +" " + a + "<br>");
document.write("Upper Case: " +" " + b + "<br>");


// //Question#11
var a=prompt("Enter your input");
var b=a.charAt(0).toUpperCase() + a.slice(1);
document.write("User input: " +" " + a + "<br>");
document.write("Title Case: " +" " + b + "<br>");


// Question#12
var a=35.36;
var b= a*100;
var c=b.toString();
document.write("Number :" + " " + a+ "<br>");
document.write("Result :" + " " + c+ "<br>");

//Question#13
var userName= prompt("Enter Your Username");
for(var a=0; a<=userName.length; a++){
if(userName.charAt(a) === '!' || userName.charAt(a)  === '@' || userName.charAt(a)  === '.' || userName.charAt(a)  === ',' ) {
    alert("Please Enter a Valid Username")
}
}

//Question#14
var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
var search =prompt("Welcome to 'ABC' Bakery. <br> What do youwant to order sir/ma'am?");
var a=search.toLowerCase();
for(var i=0; i<bakeryItems.length; i++)
if (bakeryItems[i] === a){
    document.write(bakeryItems[i] + "  "+ "is available at index" + " " + i + " " + "in our bakery <br>");
break;
} 
else if(bakeryItems[i]!== a){
    document.write("We are sorry" + " " + a +" "+ "is not available in our bakery <br>");
    break;
}

//Question#15
var x = 0;
var password = prompt("Enter your password");
document.write("Entered Password is: "+password+"<br>");
    
//VALIDATIONS
if( password.charAt(0) >= '0' && password.charAt(0) <='9')
      { document.write("Password can not begin with a number<br>"); }
if(password.length <6 )
      { document.write("Password must be atleast 6 characters long<br>"); }
else{ 
    for(var i=0; i<password.length; i++){
    {
if( password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
   { x++; }
 if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z') 
   { x++;}
if (password.charAt(i) >= '0' && password.charAt(i) <= '9')
  {x++;}
     }
  }
  if(x == password.length)
  document.write("Your password satisfies all the validations!<br>");
}




// //Question#16
var uni = "University of karachi";
var b = uni.split("");
for(var a=0; a< b.length; a++){
document.write(b[a] +" <br>");
}

// //Question#17
var input = prompt("Enter your input");
var b = input.charAt(input.length-1)
document.write("User input: " + "" + input + "<br>");
document.write("Last character of input is : " + " " + b + "<br>");


// //Question#18
var str =  "The quick brown foxjumps over the lazy dog";
var str2=str.toLowerCase();
var s= str2.split(" ")
var word = "the";
var count=0;
document.write("Text: " + " "+str +"<br>");
for(var a = 0 ; a<s.length; a++){
if(s[a] === word){
count++;
}
}
document.write("There are " + " " + count + " " + "occurrence(s) of word 'the'  +<br>");



// //Chapter#26-30

// //Question#1
var a = +prompt("Enter a Positive number");
b=Math.round(a);
c=Math.floor(a);
d=Math.ceil(a);

if(a>=1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


// //Question#2
var a = +prompt("Enter a Negative number");
b=Math.round(a);
c=Math.floor(a)
d=Math.ceil(a)

if(a<1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


// //Question#3
var i = +prompt("Enter a  number");
var j = Math.abs(i);
document.write("Number: "+ " " + i +"<br>");
document.write("Absolute Number is: "+ " " + j +"<br>");


// //Question#4
var diceRoll = Math.floor( Math.random() * 6 +1);
document.write('Random Dice Value:  ' +" " + diceRoll +"<br>");


// //Question#5
var coin = Math.floor( Math.random() * 2 +1);
if(coin == 1)
{
document.write( coin + "<br>" );
document.write('Random coin value is:   Head <br>');
}
else{
    document.write( coin + "<br>" );
    document.write('Random coin value is:  Tail <br>');
}


// //Question#6
 var RandNum = Math.floor( Math.random() * 100 +1);
 document.write("Random number between 1 and 100 : "+ " " + RandNum + "<br>");

// //Question#7
var userWeight= +prompt("Enter your weight in kgs");
var randWeight =  Math.random() * userWeight;
var n=randWeight.toFixed(1);
document.write("The weight of user is : "+ " " + n+"<br>");



// //Question#8
var a= +prompt ("Enter a number between 1 to 10");
var secretNum= Math.floor(Math.random() * 10 + 1); 
if (a== secretNum){
    alert("Congratulations!!");
}
else{
alert("Try Again");
}


// //Chapter#31-34
//Question#1
document.write("</br></br></br>  Question#1 <br>");
var d = new Date();
document.write(d);

// //Question#2
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
alert("Current Month :"+ mlist[currentMonth] );

//Question#3
dlist=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var day=d.getDay();
alert("Today is "+ dlist[day] );

//Question#4
var day=d.getDay();

    if(day==0 || day==6)
    {
        alert("It’s Fun day");
    }
    else
    {
        alert("It’s not a Fun day");
    }
    

// //Question#5
var todayDate= d.getDate();

for(i=1;i<=15;i++)
{
    if(todayDate==i)
    {
        alert("First fifteen days of the month");
        break;
    }
}
    alert("Last days of the month");


// //Question#6
var milisceconds= d.getTime();
var minutes=milisceconds/1000*60;
document.write("</br></br></br>  Question#6");
document.write(" </br> Current Date: " + d);
document.write(" </br> Elapsed milliseconds since January 1,1970: " + milisceconds);
document.write(" </br> Elapsed minutes since January 1,1970: " + minutes);

//Question#7
var d = new Date();
if((d.getHours() >= 12) )
{
  alert("It's PM");
}
else{
    alert("It's AM");
}

// //Question#8
var de= new Date();
de.setFullYear(2020);
de.setMonth(11);
de.setDate(31);
de.setHours(00);
de.setMinutes(00);
de.setSeconds(00);
document.write("</br></br></br>  Question#8");
document.write("</br>  ",de);

// //Question#9
var ra=new Date("April,25,2020");
var raMili=ra.getTime();
var a=new Date();
var aMili=a.getTime();
var diff=aMili-raMili;
var days=Math.ceil(diff/(1000*60*60*24));
document.write("</br></br></br>  Question#9");
document.write(" </br> first ramazan was on April 25,2020");
document.write(" </br> " + days +"  days has passed since the beginning of 2015");

// //Question#10
var b=new Date("Dec,05,2015 22:50:16");
var bMili=b.getTime();
var a=new Date("Jan,01,2015 00:00:00");
var aMili=a.getTime();
var diff=bMili-aMili;
var seconds=Math.ceil(diff/(1000*60));
document.write("</br></br></br>  Question#10");
document.write(" </br> " + seconds +"  seconds has passed since the beginning of 2015");

// //Question#11
var da= new Date();
document.write("</br></br></br>  Question#11");
document.write("</br> Current Date: ",da);
da.setMinutes(-1);
document.write("</br> 1 hour ago , it was ",da);


// //Question#12
var da= new Date();
document.write("</br></br></br>  Question#12");
document.write("</br> Current Date: ",da);
da.setMonth(-1200);
document.write("</br> 100 years back , it was ",da);

// //Question#13

var age=prompt(parseInt("Enter Your Age:"));
ageMonths=age*12;
var da= new Date();
da.setMonth(-ageMonths);
var year=da.getFullYear();
document.write("</br></br></br>  Question#13");
document.write(" </br> Your Age is " + age);
document.write(" </br> Your birth year is: " + year );

// //Question#14
cName="Duaa Shaikh";
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
document.write("</br></br></br>  Question#14");
document.write(" </br> Customer Name: " +cName);
document.write(" </br> Month:"+ mlist[currentMonth] );
var units=410;
var chargePerUnit=16
var lateCharges=350
document.write(" </br> Number Of Units: " +units);
document.write(" </br> Charges per unit: "+chargePerUnit );
netAmount=units*chargePerUnit;
grossAmount=netAmount+lateCharges;
document.write(" </br> Net Amount Payable (within Due Date) : "+netAmount );
document.write(" </br> Late payment surcharge: "+lateCharges );
document.write(" </br> Gross Amount Payable (after Due Date):"+grossAmount );


//chapter#35-38

//Question1
var d = new Date();
document.write(d);

//Question2
function greet(firstName,secondName)
{
    alert("Greetings "+firstName+" "+secondName);
}
    
greet("Duaa","Shaikh");


//Question3
var num1=+prompt("Enter first number");
var num2=+prompt("Enter second number");
function sum(num1,num2)
{return num1+num2;}
var sum=sum(num1,num2);
document.write("The sum of two numbers is "+sum + "<br>");


//Question4
function calculator(num1,num2,opr)
{
    if(opr=='+')
        return num1+num2;
    else if(opr=='-')
        return num1-num2;
    else if(opr=='*')
        return opr1*opr2;
    else if(opr=='/')
        return opr1/opr2;
    else if(opr=='%')
        return opr1%opr2;
}
document.write("The answer is "+calculator(2,3,'+'));

//Question5
function sqr(num)
{
    return num*num;
}
document.write("The square of the number is"+sqr(5));

//Question6
function fact(num)
{
    var fact=1;
    for(i=num;i>0;i--)
        fact*=i;
    document.write("The factorial of a number is "+fact);
}
fact(3);

//Question7
function counting(start,end)
{
    for(i=start;i<=end;i++)
        document.write(i+"<br>");
}
counting(1,10);


//Question8
var base=+prompt("Enter base of a triangle");
var perp=+prompt("Enter perpendicular of a triangle");
function calcHyp(base,perp)
{
    function sqr(x)
    {
        return x*x;
    }
    var hyp=Math.sqrt(sqr(base)+sqr(perp));
    document.write("The hypotenuse of a triangle is "+hyp);
}
calcHyp(base,perp);


//Question9
var width=+prompt("Enter width of a rectangle");
var height=+prompt("Enter height of a rectangle");
function calcArea(width,height)
{
    document.write("The area of rectangle is "+width*height);
}
calcArea(5,2);
calcArea(width,height);

//Question10
function check(text)
{
    if(text===text.split("").reverse().join(""))
        document.write("The text is a palindrome");
    else
         document.write("The text is not a palindrome");
}
check("madam");


//Question11
function convert(text)
{
    var splitStr = text.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++)
   {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   document.write(splitStr.join(' ')); 
}
convert("i m a good girl");


//Question12
function long(text)
{
    var str = text.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++)
    {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
   document.write("STRING: "+text+"<br>OUTPUT: "+word);
}
long("Web Development tutorial");


//Question13
function count(str,letter)
{
    var count=0;
    for(i=0;i<str.length;i++)
        {
           if(str[i]==letter)
               count++;
        }
    document.write("The letter comes in the string "+count+" times");
}
count("Duaa",'d');


//Question14
function calcCircumference(rad)
{
    document.write("The circumference of circle is "+2*(22/7)*rad);
}
function calcArea(rad)
{
    document.write("The area of circle is "+(22/7)*Math.pow(rad,2));
}
var rad=+prompt("enter the radius of circle");
calcCircumference(rad);
calcArea(rad);



//Chapter#38-42

// Question#1
function calPower(base,exponent)
{
    var res=1;
   for(var i=1;i<=exponent;i++){
            res= res*base;
   }
   return res;
}
var base=+prompt("Q1: Enter the number:");
var exponent=+prompt("Q1: Enter the power of  number:");
var res=calPower(base,exponent);
alert(`A1: Result is ${res}`);

//Question#2
function leapyear(year)
{
if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0))
{
    alert(`A2: ${year} is a leap year`);

}
else
{
    alert(`A2: ${year} is not a leap year`);
}
}
var year =+prompt("Q1: Enter year:");
leapyear(year);

//Question#3
var side1=+prompt("Q3: Enter side1 of a triangle");
var side2=+prompt("Q3: Enter side2 of a triangle");
var side3=+prompt("Q3: Enter side3 of a triangle");

function calcHyp(S,side1,side2,side3)
{
    var temp=(S-side1)*(S-side2)*(S-side3);
    var area=S*temp;
    alert("A3: The area of a triangle is "+area);
}
function perimeter(side1,side2,side3)
    {
       return  (side1+side2+side3)/2;  
    }
var s=perimeter(side1,side2,side3);
calcHyp(s,side1,side2,side3);


//Question#4

function average(sub1,sub2,sub3){
    var avg= (sub1+sub2+sub3)/3;
    console.log(avg);
    return avg;
}
function percentage(sub1,sub2,sub3){
 var  per=((sub1+sub2+sub3)/300)*100;
  return per;
}
function result(){
    var marks = [];
    var size =3;
    for(var i=0; i<size; i++) {
	
        marks[i]=+prompt(`Q4: Enter the marks of subject ${i+1}`);
    }
    var sub1=marks[0];
    var sub2=marks[1];
    var sub3=marks[2];
    alert("A4: Average is "+average(sub1,sub2,sub3));
    alert("A4: Percentage is "+percentage(sub1,sub2,sub3)+ "%");
}
result();



//Question#5
function indOf(str1,ind)
{
    for(var i=0;i<str1.length;i++)
    {
        if(i == str1.indexOf(ind))
        {
            alert("A6: The index of "+ind+" is: "+i);
        }
    }
}
var str1 = prompt("Q5: Enter anything to know its index: ");
var ind = prompt("Q5: Enter the character to know its index: ");
indOf(str1,ind);

//Question#6
function del_vow(str1) {
    for (var i = 0; i <= str1.length; i++) {
        if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u' || str1.charAt(i) == 'A' || str1.charAt(i) == 'E' || str1.charAt(i) == 'I' || str1.charAt(i) == 'O' || str1.charAt(i) == 'U') {
            str1 = str1.replace(str1.charAt(i), '');
        }
    }
    alert("A6: Modified string is: "+str1);
}
var str1 = prompt("Q6: Enter a string: ");
del_vow(str1);


 

//Question#7
function findOccurrences() {
    var str = prompt("Q7: Enter any string:");
    var chars = str.toLowerCase().split("");
    var count = 0;
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }

    return count;
  }
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }

  var found = findOccurrences();

  alert("A: Count is: "+found);




//Question#8
var distance = prompt("Q8: Enter distance between two cities in km: ");
meters(distance);
feet(distance);
inches(distance);
centimeters(distance);
function meters(distance)
{
    distance = distance * 1000;
    alert("A8: The distance in meters is: "+distance);
}
function feet(distance)
{
    distance = distance * 3281;
    alert("A8: The distance in feet is: "+distance);
}
function inches(distance)
{
    distance = distance * 39370;
    alert("A8: The distance in inches is: "+distance);
}
function centimeters(distance)
{
    distance = distance * 100000;
    alert("A8: The distance in centimeters is: "+distance);
}


//Question#9
function overtime(hours)
{
    if(hours > 40)
    {
        var pay = 12*(hours-40);
        alert("A9: Your overtime pay is: "+pay);
    }
}
var hours = prompt("Q8: Enter no of hours that you have worked: ");
overtime(hours);

// Question#10
function denominations(amount)
{
    var hundered = amount/100;
    hundered = Math.floor(hundered);
    amount = amount%100;
    var fifty = amount/50;
    fifty = Math.floor(fifty);
    amount = amount%50;
    var ten = amount/10;
    ten = Math.floor(ten);
    alert("A10: You will have "+hundered+" hundered "+fifty+" fifty and "+ten+" ten notes");
}
var amount = prompt("Q10: Enter amount to withdraw: ");
denominations(amount);

//Chapter# 43-48

//Question#1
function click1(){
    alert("This is click function");
    
}

//Question#2

function mobile(){
    alert("Thanks for purchasing a phone from us!!");
    
}

//Question#3
function deleteRow(row) {
    document.getElementById('std').deleteRow(row);
}


//Question#4
function mouseOut(){
    var a = document.getElementById("mouse");
    a.src = 'images/pic3.jpg';
}
function mouseOver(){
    var b = document.getElementById("mouse");
    b.src = 'images/pic4.jpg';
}

//Question#5
var count = 0;
var c = document.getElementById("counter");
function increase(){
count ++;
c.innerHTML = count;
}
function decrease(){
    count --;
    c.innerHTML = count;
    }

    //Chapter# 43-52
//Question#1
function submit(){
    var u = document.getElementById("uname");
    var p = document.createElement("p")
    var text= document.createTextNode(u.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var em = document.getElementById("email");
    var p = document.createElement("p")
    var text= document.createTextNode(em.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var ps = document.getElementById("pswrd");
    var p = document.createElement("p")
    var text= document.createTextNode(ps.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)

    var ph = document.getElementById("phone");
    var p = document.createElement("p")
    var text= document.createTextNode(ph.value);
    p.appendChild(text);
    var d = document.getElementById("data");
    d.appendChild(p)
    u.value = " Username";
    em.value = " E-mail";
    ps.value = " Password ";
    ph.value = " Phone# ";
}

//Question#2
function read(){
    var r = 'iPhone 11 Pro smartphone was launched on 10th September 2019. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 11 Pro ispowered by a hexa-core Apple A13 Bionic processor. It comes with 4GB of RAM';

document.getElementById("read").innerHTML = r;
}

//Question#3
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}

//Chapter#58-67
            //////Question#1//////
//ans 1
var main=document.getElementById("main-content");

//ans 2
var p=document.getElementById("main-content");
console.log(p.childNodes);

//ans 3
var ren=document.getElementsByClassName("render").innerHTML;
console.log(ren);

//ans 4
var data = document.getElementById("first-name");
data.value = 'Erum';

//ans 5
var data = document.getElementById("last-name");
data.value = 'Shammim';
var data = document.getElementById("email");
data.value = 'erum@gmail.com';


/////Question#2//////

//ans 1
var formType=document.getElementById("form-content").nodeType;
console.log(formType);

//ans 2
var noTyp= document.getElementById("last-name").nodeType;
var noCh=document.getElementById("last-name").childNodes;
var noChTy=noCh.nodeType;
console.log(noChTy);

//ans 3

console.log(document.getElementById("last-name").childNodes);

//ans 4
console.log(document.getElementById("main-content").firstChild);
console.log(document.getElementById("main-content").lastChild);

//ans 5

console.log(document.getElementById("last-name").nextSibling);
console.log(document.getElementById("last-name").previousSibling);

//ans 6
console.log(document.getElementById("email").parentNode);
console.log(document.getElementById("email").nodeType);