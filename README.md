

## LECTURE 5
## TABLE OF CONTENTS

 1. OBJECT
 2. DESTRUCTURING
 3. SPREAD
 4. THIS
 5. NEW DATE()


##  What is **Object** in **JavaScript** ?

### Object Methods()
### **Object.entries()**

![The San Juan Mountains are beautiful!](/img/entries.png)

### **Object.keys()**

![The San Juan Mountains are beautiful!](/img/keys.png)

### **Object.values()**

![The San Juan Mountains are beautiful!](/img/values.png)


##  What is **Destructuring** and **Spread** in **JavaScript** ?

### Destructuring assignment

##### The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


![The San Juan Mountains are beautiful!](/img/destructuring.png)

![The San Juan Mountains are beautiful!](/img/array%20destructuring1.png)


##  What is keyword **"THIS"** in **JavaScript** ?

##### **“This”** keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, **“this”** references the global object. If the function that is being referenced is a method in an object, **“this”** references the object itself.

##### **"This"** is NOT a variable. It is a keyword. You cannot change the value of **"This"**.

![The San Juan Mountains are beautiful!](/img/this.png)


##  What is **New Date()** in **JavaScript** ?

##### JavaScript Date Object

The **JavaScript date** object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.
You can use different Date constructors to create date object. It provides methods to get and set day, month, year, hour, minute and seconds.

You can use 4 variant of Date constructor to create date object.

1. _**Date()**_;

2. _**Date(milliseconds)**_;

3. _**Date(dateString);**_

4. _**Date(year, month, day, hours, minutes, seconds, milliseconds);**_


### new Date() 

![The San Juan Mountains are beautiful!](/img/newDate.png)


### new Date(milliseconds) 


![The San Juan Mountains are beautiful!](/img/milliseconds.png)



### new Date(date String) 


![The San Juan Mountains are beautiful!](/img/dateString.png)


### new Date(year, month, day, hours, minutes, seconds, milliseconds)


![The San Juan Mountains are beautiful!](/img/newDateAll.png)



### JavaScript Date.now() Method

JavaScript **Date.now()** function is used to display the time elapsed since January 1, 1970, 00:00:00 UTC. It will return the value in milliseconds. Since now() is a static method of the Date object, it will always be used as **Date.now()**. We cannot use them like myDate.now() or with any other method.

#### _**Syntax:**_

**Date.now();**  

It returns the time elapsed since January 1, 1970, 00:00:00 UTC in milliseconds.

![The San Juan Mountains are beautiful!](/img/dateNow.png)


### JavaScript Date getFullYear() method

The JavaScript date **getFullYear()** method returns the year for the specified date on the basis of local time.

#### _**Syntax:**_

The **getFullYear()** method is represented by the following syntax:

**dateObj.getFullYear();**  

![The San Juan Mountains are beautiful!](/img/getFullYear.png)




### JavaScript Date getMonth() method

The JavaScript date **getMonth()** method returns the integer value that represents month in the specified date on the basis of local time. The value returned by **getMonth()** method starts with 0 that represents January.

#### _**Syntax:**_

The **getMonth()** method is represented by the following syntax:

**dateObj.getMonth();**  



![The San Juan Mountains are beautiful!](/img/getMonth.png)



### JavaScript Date getDate() method

The JavaScript date **getDate()** method returns the day for the specified date on the basis of local time.

#### _**Syntax:**_

The **getDate()** method is represented by the following syntax:

**dateObj.getDate();**  


![The San Juan Mountains are beautiful!](/img/getDate.png)




### JavaScript Date getDay() method

The JavaScript date **getDay()** method returns the value of day of the week for the specified date on the basis of local time. The value of the day starts with 0 that represents Sunday.

#### _**Syntax:**_

The **getDay()** method is represented by the following syntax:

**dateObj.getDay();**  

![The San Juan Mountains are beautiful!](/img/getDay.png)



### JavaScript Date getHours() method

The JavaScript date **getHours()** method returns the hour for the specified date on the basis of local time.

#### _**Syntax:**_

The **getHours()** method is represented by the following syntax:

**dateObj.getHours();**  


![The San Juan Mountains are beautiful!](/img/getHours.png)



### JavaScript Date getHours() method

The JavaScript date **getMinutes()** method returns the minutes in the specified date on the basis of local time.

#### _**Syntax:**_

The **getMinutes()** method is represented by the following syntax:

**dateObj.getMinutes();**  



![The San Juan Mountains are beautiful!](/img/getMinutes.png)


### JavaScript Date setDate() method

The JavaScript  Date **setDate()** Method is used to set the date of a month into a date object which is created using the date() constructor. 

#### _**Syntax:**_

The **setDate()** method is represented by the following syntax:

**dateObj.setDate(date_Value);**  

_**date_Value**_ : It returns the new i.e updated date of the month which is set by the setDate() method. The date of the month is an integer value ranging from 1 to 31.


![The San Juan Mountains are beautiful!](/img/setDate.png)


### JavaScript Date setMonth() method

The date.setMonth() method is used to set month into a date object which is created using the Date() constructor. 

#### _**Syntax:**_

The **setMonth()** method is represented by the following syntax:

**dateObj.setMonth(month_Value);**  

_**month_Value**- : This parameter holds the value of the month that we want to set in the date created using the _**Date()**_ constructor.

![The San Juan Mountains are beautiful!](/img/setMonth.png)



### JavaScript Date setFullYear() method

Javascript date **setFullYear()** method sets the full year for a specified date according to local time.

#### _**Syntax:**_

The **setFullYear()** method is represented by the following syntax:

**date.setFullYear(yearValue[, monthValue[, dayValue]]);**  

_**yearValue**_ − An integer specifying the numeric value of the year, for example, 2008.

_**monthValue**_ − An integer between 0 and 11 representing the months January through December.

_**dayValue**_ − An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue.



![The San Juan Mountains are beautiful!](/img/setFullYear.png)



## Thanks!
## Be Happy and Smile :)
