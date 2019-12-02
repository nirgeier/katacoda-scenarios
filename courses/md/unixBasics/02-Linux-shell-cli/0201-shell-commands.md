---
marp: true
paginate: true
class: bash 
footer: '![](/images/codeWizard-logo-sm.png) ![](/images/netcraft-logo-full.png)
<div style="text-align:center; line-height:20px;"><b>Linux Shell - Commands</b><br/> <sub>&copy;CodeWizard ltd &emsp; | &emsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
![](/images/bash.png)

---

# Unit summary

- This lecture will cover some of the common shell commands

---

<!-- _class: nobg text-center header-yellow -->
![bg cover opacit:.75](/images/linux-commands.jpg)
# Common Shell Commands 

---

<!-- _class: lead font-24 -->

# Common Shell Commands 

Command |   Description                          
--------|----------------------------------------
sudo    |   Change to root user                  
history |   Print last commands                  
more    |   Paging **forward** through text one full line or screen. 
less    |   Page **forward and backward** in files                           
tail    |   Output the last X lines of files                           
head    |   Output the first X lines of files                           
grep    |   Search / filter output
find    |   Find files or folders
clear   |   Clear the shell screen
wget    |   Download file (like curl)
curl    |   Fetch url (like wget)

---

# Commands: `sudo`

* `sudo` - execute a command as _**another**_ user
* `sudo` is usually used for executing a command as the superuser (root)
* `su do` =  run as **S**ubstitue **U**ser and **DO** 
* Examples:
    ```sh
    # Change user to root
    sudo -s

    # Switch to another user
    sudo -u <user>

    # Do some sudo only commads
    sudo cd /etc/proc
    ```    

---

# Commands: `history`

* `History` display the list of previous commands types in the command line
* Using the up/down arrow keys you can navigate to previous/next commands

* Examples: 
    ```sh
    # Print the list of last commands
    history

    # Excute command at line N
    history !n
    ```
---

# Commands: `more` / `less` / `tail` / `head`

<div class="font-22">

* All of the above commands will print out content to screen

    Command |   Description                          
    --------|----------------------------------------
    `more`  | Print from the **beginning**.<br/>Will display one page at a time, moving forward full page.
    `less`  | Print from the **beginning**.<br/>Similar to `more`, but which allows backward & forward movement. 
    `tail`  | Print **last** X lines of the file
    `head`  | Print **first** X lines of the file

</div>

---

# Commands: `more` / `less` / `tail` / `head`

```sh
# Print the file from the start and display first page
more file.txt

# print last 10 lines of the file (default for tail are 10 lines)
tail file.txt

# print last 25 lines
tail -n25 file.txt
```

---

# Commands: `less`

- Some useful shortcuts keys for searching with less 
    <div class="font-22">

    Command |   Description                          
    --------|----------------------------------------
    /       | Search for **next** pattern occurrence.
    ?       | Search for **previous** pattern occurrence.
    n       | Search next match in the **current** direction (previous or next occurrence). 
    N       | Search previous in the **current** direction (previous or next occurrence). 

    </div>

- Once you use up the [`/` or `?`] 
  using [`n` or `N`] will search for a match based upon the direction you set up
---

# Commands: `grep`

* Print lines that match patterns. 
* One of the most used Unix command if not the most one

<div class="font-22">

* Examples:
    ```sh
    # Search string in file
    grep "text" file.txt

    # search for error in log file(s)
    grep "error" *.log

    # Count the number of matched pattern in the file
    grep -c "error" error.log

    # search case sensitive 
    grep -i "error" *.log

    # Print out the matched line number
    grep -n "error" error.log
    ```
</div>

---

# Commands: `grep`

<div class="font-22">

- More Examples: 
    ```sh
    # -A is the option which prints the specified N lines after the match
    grep -A 10 "error" error.log

    # -B is the option which prints the specified N lines before the match
    grep -B 10 "error" error.log

    # -C is the option which prints the specified N lines around the match (before+after)
    grep -C 10 "error" error.log

    ### Use pipe to filter commnd results
    ### List only txt files
    ### Pass the results of the `ls` to `grep`
    ls -la | grep *.txt
    ```
</div> 

---

# Commands: `find`

* Find files or directories `find <start folder> [options] <file pattern>`

<div class="font-22">

* Examples: 

    ```sh
    # Find all the files with the name text
    find . -name *.txt

    # Find the passwd file under root and one level down. 
    # (i.e root — level 1, and one sub-directory — level 2)
    find -maxdepth 2 -name passwd

    # Find all empty files (zero byte file) in your home directory and its subdirectory
    # Using the (`-empty` flag)
    find ~ -empty

    # Find all directories (`-type d` flag)
    find . -type d

    ### Complex find - Finding the Top 5 Big Files
    find . -type f -exec ls -s {} \; | sort -n -r | head -5
    ```


---

# Commands: `clear`

* Clear the terminal screen 

    ```sh
    # Clear the screen by scrolling it up
    clear
    ```
---

# Commands: `wget` / `curl`

* Both are command line tools that can download contents.
* `-O/-o` is used for saving the file with the desired name (download and save as....)
    - Capital O `-O` for **wget**
    - Lower o `-o` for **curl**
    
    _Examples are in the next slide_
---

# Commands: `wget` / `curl`

<div class="font-22">

```sh
# Downlaod google.com home page
curl google.com

# Download and save the file name we want
# `-O` = outputdocument
wget -O <file name> <url>
curl -o <file name> <url>

# Continue the Incomplete Download Using wget -c
wget -c ...

# Download multiple files (url are written in the given file  + `-i` flag)
# -i = input file
wget -i download-file-list.txt
```
</div>

---

<!-- _class: nobg -->
![bg cover](/images/practice.png)

---

# **Hands On (Part 01)**

<div class="font-20">

**01.** Download and save the content of this URL [https://bit.ly/2oaOI1u](https://bit.ly/2oaOI1u) in file named `fruits.txt`. 
    
    Note - if you decide to use `curl` it will require to use `-L` flag

**02.** Search for the line with the content `Feijoa` (`grep` command)
**03.** Print the line number with the results
**04.** Search for 'Banana' & 'Lemon' using the `grep -E` flag

    Note - We did not cover -E it in the lecture and this task is to prepare you for real life....
    In real life you need to learn new stuff every day and to figure out a way to resolve problems and search for solutions yourself

**05.** Print the first 5 fruits 
**06.** What does this command do `grep -c $ fruits.txt`?
    
    Take your time and try to find out what it does.

**07.** Search with less. Download this file (https://loremipsum.de/downloads/version1.txt) and using the less command search how many times the text (sum) found in the file

</div>

---

# **There are many ways to solve it.....**

One optional solution is:

```sh
01. curl -L -o fruits.txt https://bit.ly/2oaOI1u
02. grep "Feijoa" fruits.txt
03. grep - "Feijoa" fruits.txt
04. grep -E 'Banana|Lemon' fruits.txt
05. head -n5 fruits.txt
06. `grep -c $ fruits.txt`
    # Anser: Counting the number of lines in the file 
    #        ($ is an expression that evaluates to a new line delimter) 
    #        which means that we count how many new lines we have in the file usign `grep -c`
07. curl https://loremipsum.de/downloads/version1.txt | less
    # Inside less use '/' or '?' to search for 'sum`. 
    Answer: 8 times
```


---

<!-- _class: font-22 -->
# **Hands On (Part 02)**

## Your mission if you will accept to take it
**Print the content of lines 10-20** of any file you desire
The content of the lines between line 10 to 20 **only**

<hr/>

##### Difficulty: Advanced / Hard
- Using the `sed` and or `awk` commands
- **Commands: `sed` or `awk`**
    :interrobang: We did not cover those commands yet so you will have to read it by yourself, 
therefore there is no solution so you will have to find it out yourself 


##### Difficulty: Almost Impossible
- Using `head` and or `tail` commands. 
- Its possible believe me..... and it might be easier to solve after the next lecture

---

![bg cover](/images/the-end.jpg)