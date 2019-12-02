---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
class: bash
footer: '![](/images/codeWizard-logo-sm.png) ![](/images/netcraft-logo-full.png)
<div><b>Linux Shell - File System</b><br/><sub>&copy;&nbsp;CodeWizard ltd &thinsp;|&thinsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
![bg](/images/Linux-Shell.jpg)

---

# Unit summary

* Linux Shell fundamentals 
* Files & folders 
* CLI commands

---

# Linux shell

* The Linux Shell is a `command line interpreter` aka `CLI` that takes the commands
  you enter from the command line and hands them over to the operating system (kernel)

* Originally there was only one shell interface available on Linux. 
  However, today there are many different ones. 
  
* Most systems today use the Bourne Again Shell (`bash`) which is a more advanced version of the original shell program which was referred to as sh.

---

<!-- _class: bash font-24 -->
# Common Shells

Shell         | Name              | Description
--------------|-------------------|-------------
**sh**        | Bourne&nbsp;Shell | Basic Unix Shell on most systems
**bash**      | Bash Shell        | This shell combines the Korn Shell and the C Shell (default on Most Linux)
**ksh/pdksh** | Korn Shell        | Enhanced version of the Bourne Shell
**tsch**      | tcsh              | Similar to the C Shell

My favorite: "Oh My zsh!"

---

# Linux Shell
- To view your current shells (or to change it)
`chsh`
    ```sh
    /usr/bin/sh
    /usr/bin/bsh
    /usr/bin/csh
    /usr/bin/ksh
    Current login shell:
    /usr/bin/ksh
    Change (y/n)? >
    ```

---

# Shell prompt

* The prompt is the line for executing commands
* The structure of the prompt is the following

    ```sh
    <username>@<host name>:<path><user type>

    # For example ($)
    nirgeier@macos:~$

    # example 2 (#)
    nirgeier@macos:~#
    
    ```
---

# Shell prompt

* The default prompts for most shells is `$`. 
* When you’re logged in as a root user (or `sudo`) the prompt is `#` instead.

   ```sh
   nirgeier@macos:~$ sudo -s
   root@macos:~#
   ```

* If you don't have Linux installed yet, install this chrome extension for your playground
[ubuntu-free-online-linux](https://chrome.google.com/webstore/detail/ubuntu-free-online-linux/pmaonbjcobmgkemldgcedmpbmmncpbgi)

---

<!-- _class: nobg lead -->
![bg opacity:0.25](/images/stack-of-files.jpg)
# <!-- fit --> Files & folders

---

# Files & Folders 
* In Unix `**all**` resources are **files**, even mouse, printer, cd-rom  etc.
* In Windows there are drive letters (partitions) while in Unix 
  the structure is a tree and all files are located under `root` folder in a structured hierarchy.
* Like in every OS we can use 
  - Absolute Path - In Unix full path starts with `/` on windows for example `c:/`
  - Relative Path - path starting at the current folder

---

# Files & Folders
![left 500px opacity:0.85](/images/file-structure.png)
![bg 80% right opacity:0.85](/images/unix-folders.png)

---
<!-- _class: nobg text-center header-yellow -->

![bg cover opacit:.75](/images/linux-commands.jpg)

# Basic Shell Commands

---
<!-- _class: font-24 lead-->

# Basic File System commands 

Command |   Description               | Example
--------|-----------------------------| ----------------
pwd     |   Print working directory   | **$ pwd**
cd      |   Change current directory  | **$ cd /home/nirg**
ls      |   List files                | **$ ls -latr**
mkdir   |   Create new directory(s)   | **$ mkdir newFolder**
rmdir   |   Remove empty directory    | **$ rmdir folder**
rm      |   Remove files or directory | **$ rm file / folder**
touch   |   Create new empty file     | **$ touch file.txt**
echo    |   Print content to stdout   | **$ echo 'str'**
cat     |   Print file content        | **$ cat src target**
cp      |   Copy files & folders      | **$ cp src target**
mv      |   Move files & folders      | **$ mv src target**

---

# Command: `pwd`

- **P**rint **w**orking **d**irectory
- Print out the current directory of the command line

---

# Command: `cd`

* Change directory
* `cd` support relative & absolute paths

    <div class="font-24">

    Desired directory  | Command            
    -------------------|----------------------
    home               | **cd** or **cd ~** 
    previous one       | **cd -**           |
    parent (of current)| **cd ..**          | 
    root               | **cd /**            

    </div>

* **Tip**: 
  Use <kbd>tab</kbd> for autocompletion files and directories names

---

# Command: `ls` 

* <div class="font-24">

    List directory content. Many useful flags (options).  [ls man page](http://man7.org/linux/man-pages/man1/ls.1.html)

    Flags          | Action 
    ---------------|-------
    **ls**         | List files in columns
    **ls -l**      | Long format
    **ls -a**      | Show all files include hidden
    **ls -t**      | Sort the list by time of modification
    **ls -R**      | Include all files in current and in subfolder
    **ls -s / -h** | Display file size or -h, --human-readable (file size in K, MB, GB etc)

    * **Tip:** 
        You can combine the different flags together (ex `ls -lah` or `ls -latr`)
<div>

---

<!-- 
_class: nobg; 
_backgroundColor: #090909 -->

![bg cover 60%](/images/commands/ls.png)

---

![bg right 90%](/images/commands/mkdir.png)

# Command: `mkdir`

- `mkdir dir1 dir2 dir3`
- Create new directory 

<div class="font-24">

Flags      | Action 
-----------|-------
**mkdir&nbsp;-p** | no error if directories exist **&**<br/>create parent directories if requierd

</div>

---

# Command: `rmdir`

- `rmdir dir1 dir2 dir3`
- Delete the given empty directory(s)

<div class="font-24">

Flags        | Action 
-------------|-------
**rmdir -p** | Remove all the paths recursively 

</div>

---

# Command: `rm`

- `rm -rf dir1 dir2 dir3`
- Delete the given files or directory(s) and its content

<div class="font-24">

Flags          | Action 
---------------|-------
**-f**         | ignore nonexistent files and arguments, never prompt
**-r**, **-R** | remove directories and their contents recursively
**-d**         | remove empty directories

</div>

---

![bg right 99%](/images/commands/touch.png)

# Command: `touch`

- `touch file1 file1 ... fileN`
- Update the access and modification times of the files or create new **empty** file

<div class="font-24">

Flags      | Action 
-----------|-------
**touch -c** | do not create any files
**touch -m** | change only the <br/>modification time

</div>

---

![bg right 99%](/images/commands/echo.png)

# Commands: `echo/cat`

- Print line of text to screen
    `echo "text"`

- Write content to file 
    `echo "text" > file.txt`

- Append content to file 
    `echo "text" >> file.txt`

- Print the content of text file
    `cat <file>`

---

# Commands: `cp` & `mv`

- copy or move files & folders
    
    ```sh
    # Copy folder with all the content (-r)
    cp -r /tmp/a/ /tmp/b

    # Move ....
    mv /tmp/a/ /tmp/b
    ```
---

<!-- _class: nobg -->
![bg cover](/images/practice.png)

---

<!-- _class: font-20 numbered -->
# This hands-on session cover file system commands

**01.** Open Unix terminal, What is your current Shell?
**02.** What is your home folder? 
**03.** List the files in your home directory
**04.** Display the files sorted by date
**05.** Under your home folder Create new folder names `session1`
**06.** Switch to the new directory
**07.** Create 3 sub directories under `session1` [`dir1`, `dir2`, `dir3`]
**08.** Under `dir2` create new file named hello.txt and with the content `Hello World!`
**09.** Verify that the file contain the desired text
**10.** Copy the file to `dir1`
**11.** Verify that the file exist in both folders using the `find` command
**12.** Copy the file to `dir3` with the mew name `hello1.txt`
**13.** Verify that the file exist
**14.** List only the folders under `session1`
**15.** Delete the folder `dir3`

---

<!-- _class: font-22 -->
# There can be many solutions ..... 
 - This is only one of them

```sh
01. chsh
02. cd ~; pwd
##
## From this point we are in the home directory and uless specified 
## otherwise all the paths are **relavite** to the home directory folder
##
03. ls
04. ls -lt
05. mkdir session1
06. cd session1
07. mkdir dir1 dir2 dir3
08. echo 'Hello World!' > dir2/hello.txt
09. cat dir2/hello.txt
10. cp dir2/hello.txt dir1/hello.txt
11. find . -name hello.txt
12. cp dir2/hello.txt dir3/hello1.txt
13. ls dir3
14. find . -type d
15. rm -r dir3
```
---
<!-- _class: nobg -->

![bg cover](/images/the-end.jpg)