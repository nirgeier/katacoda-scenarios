---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
class: unix
footer: '![](/images/codeWizard-logo-sm.png) ![](/images/netcraft-logo-full.png)
<div><b>Linux introduction</b><br/><sub>&copy;&nbsp;CodeWizard ltd &thinsp;|&thinsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
![bg](/images/unix-bg.jpg)

---

# Unit summary

* A bit about Unix history
* What is the Unix Kernel?
* Linux 

---

<!-- _class: history -->

---

# Unix history

* Developed during the 1970s at AT&T Bells Lab

* Free software

* Unix was developed as `development environment` but today is used as 
  **multi-tasking**, 
  **multi-users** and 
  **time-sharing** software

* Unix is full working OS build builds upon the kernel and packed with development tools, libraries, drivers, documentations and more.

* Unix spread out very quickly and today there are thousands of distributions.

---

# Unix Kernel

* The `kernel` is the heart (core) of the Unix OS
* The `kernel` is the first program loaded during the boot procedure of Unix OS. 
* The `kernel` is responsible for hardware - software communication
* Once the `kernel` done loading, it will manage the rest of the startup process.
* User can not work directly on the `kernel`, terminal is used to interact with the kernel

---

# Unix Kernel

* The `kernel` use **well defined infrastructure** for handling security issues, it allow application to *"jump"* between **user space** to **kernel space**
* The `kernel` uses [protected mode](https://en.wikipedia.org/wiki/Protected_mode) supplied by the CPU for better security
* The `kernel` provides services like: 
  - **filesystem**, 
  - **networking**, 
  - **process management**, 
  - **scheduling**, 
  - **intercrosses communications** 
and many many more.

---

# Linux Kernel

* Linux kernel was developed by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) 
* Linux kernel project started at 1991 when the Unix community rejected his ideas
  > **The rumor said that he had a bet with his professor that he ....** 

* Linux kernel is an full Unix Kernel (full OS)
* Linux kernel is a clone of Unix and as a result the cli is almost the same

---

# Linux Distributions (distros)

* Linus Architecture make it very simple to build a **custom Operating System** 
  and its the main reason why Linux is very widely used those days
* There are thousands of distributions
* The most famous ones are Debian, Ubuntu, Mint and more.
* There are both Server & Desktop versions.
* Unix/Linux host the major portion of application servers. (Amazon, Facebook, Google and more)

---
<!--  _backgroundColor: white; -->

# Linux Distros usage statistics (2019)
![](/images/market-shares.png)

---

<!--  
_backgroundColor: black;
_class: nobg 
-->
![bg contain](/images/periodic-table-of-distro.png)

---

# Linux
* OS build upon the Linux Kernel is referred as *distribution* 
* Due to its unique architecture (`Open Source` + `Security at kernel level`) 
  there is no such a thing as Unix virus, there are security exploits and bugs 
  but viruses are very very rare.

* The community maintains the code and security bugs are fixed very rapidly
* Unix server _**does not need**_ restart and can work for several years.
  - [Booted up in 1993 this server still runs](https://www.computerworld.com/article/3162416/booted-up-in-1993-this-server-still-runs-but-not-for-much-longer.html)
  - [Server retired after 18 years and ten months](https://www.theregister.co.uk/2016/01/14/server_retired_after_18_years_and_ten_months_beat_that_readers/)

---

<!--  _class: nobg; _backgroundColor: white;-->
![bg opacity:.1](/images/Question-mark.jpg)

# Question #1

**Why Unix/Linux is assumed to be difficult and too technical for the average user?**


* ### Answer
  **For the same reason that tourists thinks that in Israel we ride on camels.** 
  ![width:250px](/images/camels.jpg) 
  
  Today Linux is very **user friendly** with many **Desktop** distribution

---

<!--  _class: nobg; _backgroundColor: white;-->
![bg opacity:.1](/images/Question-mark.jpg)

# Question #2

**Who in this class is currently using Unix/Linux daily?**

* ### Answer
  **All of you even if you are unaware of that.** 
  Mac, iPhone, Android, even your **car** run linux....
  ![width:500px](/images/unix-today.jpg)    ![width:500px](/images/linux-for-car.jpg) 

---

<!-- _class: nobg; _backgroundColor: white  -->
![bg cover 60%](/images/linux-car.png)

---
<!-- _class: nobg -->

![bg cover](/images/the-end.jpg)