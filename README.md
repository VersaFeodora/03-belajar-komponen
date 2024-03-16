## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720156|
| Nama |  Versacitta Feodora Ramadhani |
| Kelas | TI - 3I |

### Question 1
![Screenshot](README-pic/1.png)
    This error is caused by src link of the image, where the link isn't defined in the images.remotePatterns in next.config.js. The solution of this problem is to add a remotePatterns list in next.config.mjs file to specify the protocol, hostname, port, and pathname (if needed) to safely use remote image.
    <br />
    <br />
    In this case, we add i.imgur.com as its hostname, along with https as its protocol. There is no need to add port and pathname since
![Screenshot](README-pic/2.png)
    The result of the code is as below;
![Screenshot](README-pic/3.png)
![Screenshot](README-pic/4.png)

<br />

### Question 2
![Screenshot](README-pic/5.png)
![Screenshot](README-pic/6.png)
    By using the Gallery component, the result is roughly the same as using three Profile components on last practicum, albeit with slight misalignment due to not using flex-col class from Tailwind CSS. However, this shows that one component could use other components inside it, thus enables us for more flexibility in using components and conciseness in code writing.
<br />

### Question 3
![Screenshot](README-pic/7.png)
The errors in the written code are as follows;
1. There is no parent element in said code that wraps up other elements, so at least one additional element is needed. In this case, `<main>` element is used.
2. Class property does not exist in JSX, hence the error. In order to label an element, use `className='...'` instead
3. There is no `/` in `<br>`. Use `<br />` instead for line break
4. Tag `</b>` should not be used between `<i></i>` to close bold element. Instead, place `</b>` _after_ `</i>` instead
5. This might be intentional, but in case 'ilmuwan' word is supposed to be in bold, use `</b>` _after_ said word instead, as 'ilmuwan' word needs to be inside bold brackets for it to work.
<br /><br />
The result would be as follows;
![Screenshot](README-pic/8.png)
![Screenshot](README-pic/9.png)
<br />

### Question 4
![Screenshot](README-pic/10.png)
    As per the message above, person is a _list variable_, which means that property listed inside the variable needs to be declared of in order to return a value assigned in said property. In this case, as we need the `name` property, we should call `person.name` instead.
![Screenshot](README-pic/11.png)
<br />