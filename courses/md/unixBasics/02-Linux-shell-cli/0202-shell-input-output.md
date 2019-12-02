---
marp: true
paginate: true
class: bash 
footer: '![](/images/codeWizard-logo-sm.png) ![](/images/netcraft-logo-full.png)
<div style="text-align:center; line-height:20px;"><b>Linux Shell - IO, pipes & redirects</b><br/> <sub>&copy;CodeWizard ltd &emsp; | &emsp; nirgeier@gmail.com</sub></div>'
---

![](/images/input-output.png)

# Input / Output & Redirects
---

# Unit summary

- Input, Output
- Stdin, Stout, Stderr
- Redirects
- Pipes

---

# Input / Output

<div class="font-22">

* In every OS we have 
  **Standard Input** (ex. Keyboard, mouse) & 
  **Standard Output** (ex screen, speakers)
* As you recall in Unix `**all**` resources are files and 
  each file gets a unique id known as **File Descriptor**
* Every time we execute a command the following 3 files are always open

    Description                    | Input / Output Name | File Descriptor
    -------------------------------|-------------|----------------
    **Standard Input**  - Keyboard | `stdin`     | `FD0`
    **Standard Output** - Screen   | `stdout`    | `FD1`
    **Standard Error**             | `stderr`    | `FD2`

</div>

---


# Redirects I/O
* In Unix we can redirect the input/output of the **CLI** or **programs** to any other file(s)
* For redirection we use the following symbols: `>` ,`>>`, `<`, `<<`

* We already used redirect in the past for writing text to a file: 
    ```sh
    echo 'Hello World!' > dir2/hello.txt
    ```
---

# Output

* We can "redirect" the output from any file/command to any other file 
* To redirect `output` we will use the `>` sign

* Examples:

    <div class="font-22">

    ```sh
    # Print the 'Hello World!' to the default stdout (FD1)
    echo 'Hello World!' 

    # Redirect the output to file instead of the stdout (FD1)
    echo 'Hello World!' > file.txt
    # Or redirect (FD1) to a file
    echo 'Hello World!' 1 > file.txt text1.txt

    # Redirect error message to error file (FD2)
    # In this case we use the (FD2) `2>` to redirect the error to a file
    wget aaa.ooom 2 > error.log 
    ```

    </div>
---


# **In class Hands On**

<div class="font-22">

(Time to complete: 10 minutes)

**01.** Write 'Hello World!' to the following file: `hello.txt`

<hr/>

**02.** Print the content of **hello.txt** and redirect the output to `hello1.txt`

<hr/>

**03.** Using the `date` command which print out the current date & time stamp, 
        create a new file **hello2.txt** with the date as **first** line and 'Hello World!' as **second** line

</div>

---

# **In class Hands On (Solution)**

<div class="font-22">

:white_check_mark: **01.** Write 'Hello World!' to the following file: `hello.txt`

    echo 'Hello World!' > hello.txt

<hr/>

:white_check_mark: **02.** Print the content of **hello.txt** and redirect the output to `hello1.txt`

    cat hello.txt > hello1.txt

<hr/>

:x: **03.** Using the `date` command which print out the current date & time stamp, 
        create a new file **hello2.txt** with the date as **first** line and 'Hello World!' as **second** line

    date > hello2.txt
    # We already have 'Hello World!' in hello.txt
    cat hello.txt > hello2.txt

##### **OOOO-PPPP-SSSS - solution 03 is not working !!!!! Lets fix it.**

</div>

---

# Redirection metacharacters

<div class="font-24">

Character     | Action                                                      | Example
--------------| ------------------------------------------------------------|--------
   **>**      | Redirect standard output (FD1)                              | **$ echo 'Hello World!' > hello.txt**
**\|** (pipe) | Redirect standard output (FD1) to _another file or command_ | **$ echo 'Hello World!' \| grep Hello**
   **>&**     | Redirect standard output (FD1) and standard error (FD2)     | **$ curl ... 2>&1**
   **<**      | Redirect standard input (FD0) to the given command          | **$ cat < .gitignore**
   **>>**     | Append standard input (FD0)                                 | **$ echo 'Second line' >> file.txt**
   **>>&**    | Append standard output (FD1) and standard error (FD2)       | **$ curl ... 2>>&1**

</div>

---

# Redirection metacharacters `>`

**Redirect standard output (FD1)** 
```sh
# Redirect the output to file instead of the stdout (FD1)
echo 'Hello World!' > file.txt

# list folder content and instead of printing it to the screen
# redirect the results (print) to file
echo ls -la > files_list.txt

# Verify that the redirect worked
cat files_list.txt

```
---

# Pipes

**Redirect standard output (FD1) to _another file or command_**

* Allow to use multiple command on the same time (in a single line of code) 
  and pass data between them
* Syntax `command 1 | command 2 | command 3`
* The `output` from the 1st command will be passed to the 2nd command as `input` and so on
    <hr/>

    ![](/images/pipes_usage.png)

---

# Pipes

- Try this and watch the screen output:
    ```sh
    # Download the file and search for Avocado by 
    # redirecting the output to the grep command
    curl -L https://bit.ly/2oaOI1u | grep 'Avocado'
    ```

    **Can you explain what do you see?**
---

<!-- _class: nobg -->
# Pipes

![](/images/pipes.png)
<hr/>

- What is the meaning of the numbers :zero:,:one:,:three:,:four: :question::question::question: 
- Why :two: is missing :question: Did he went to do :two: :question::question::question: 

---

# Redirection metacharacters `>&` 

`>&`: **Redirect left side (FD) to right side (FD)**
`2>&1`: **Redirect stderr (FD2) to stdout (FD1)**

* The default behavior of `curl` is writing output to the `stderr`(FD2) 
  and not to `stdout` (FD1) so we can "fix" it with `2>&1`

    ```sh
    # Try now with stderr redirect to stdout
    curl -L https://bit.ly/2oaOI1u 2>&1 | grep 'Avocado'
    ```

    Is the output different from the previous one?    

---

# Redirection metacharacters `>&` 

- Lets see another example:
    use the command `wc` (word count) to count the number of words in the file

    ```sh
    # wc output: [newline counter], [total words], and [total bytes counts] for the input
    curl -L https://bit.ly/2oaOI1u | wc
    
    # Try now with stderr redirect to stdout
    curl -L https://bit.ly/2oaOI1u 2>&1 | wc
    ```

    Again, do you see different outputs?    

---

# Multiple Pipes

- Lets print the content of the curl output in **reverse** order using the `sort` command
    
    ```sh
    # Print the results in reverse order
    curl -L https://bit.ly/2oaOI1u 2>&1 | sort -r
    
    # -- Multiple Pipes --
    # This time we will print the results in reverse order
    # and will also filter out all the words starts with L (using regExp)
    ### !!! Note, we will not cover regExp at this time but the syntax of 
    ### `^L` means - filter all the words which starts with `L` (^=first character of the string)
    curl -L https://bit.ly/2oaOI1u 2>&1 | sort -r | grep -i ^L
    ```

---
# Redirection metacharacters `>>`
    
- [**Append**] = **Redirect the output of the command or data to _end_ of output**

    ```sh
    # Append text to end of file using `echo`
    echo 'my text' >> filename

    # Append command output to end of file:
    command >> filename

    # Another way for concatinating multiple files without using `>>`
    cat file1 file2 file3 > allfies
    ```

---

# In class Hands on

<div class="font-22">

**01.** Fix the previous assignment:
        
- Using the date command which print out the current date & time stamp, 
        create a new file **hello2.txt** with the date as **first** line and 'Hello World!' as **second** line

<hr/>

**02.** 2>&1 :question: What is it :question: 
- I warned you not to write code when u are drunk :beer: :beers: :cocktail: :wine_glass:

<hr/>

**03.** What will happened when we will execute the following commands :question:
    
> **_1._ ls -la > files.txt 2>&1**
> **_2._ ls -la some_missing_file > files.txt 2>&1**
    
    STOP!!!!! Don't go to google, figure it out yourself,
    Unless you don't want to works as DevOps engineer 

</div>

---

# Command `tee`

* `tee` is used to _**store and view**_ 
   (both at the **same time**) the output of any other command.
* `tee` writes to the **STDOUT** (Which FD# is it?), and to a file at the _**same time**_.
* `tee` does not overwrite but appending to files 
* Example:
    
      # Append file into itself 
      cat file.txt | tee >> file.txt
    
---

<!-- _backgroundColor: white; 
_class: nobg -->
# Command `coffee`

![bg right width:840px](/images/unix_coffee.webp)

***Seriously ....*** 

---

<!-- _class: nobg -->
![bg cover](/images/practice.png)

---

# Hands on

<div class="font-24">

**01.** Download the fruit file (https://bit.ly/2oaOI1u) with curl (require the -L flag) and save it to fruits.txt
<hr/>

**02.** Duplicate the fruits file 3 times (concat the file into itself)
        Find 3 different ways (The solution will show you only one but there are many other ways)
<hr/>

**03.** Find out how many lines are in the updated file
<hr/>

**04.** Print out (using pipes) all the fruits starting with the letter C

<hr/>

**05.** Print out all the fruits with the substring **ba** in reverse order (find them and print in reverse) 

</div>

---

# Hands on (solution)
<div class="font-24">

```sh
### 01. Download the fruit files with curl (require the -L flag) and save it to fruits.txt
curl -L https://bit.ly/2oaOI1u -o fruits.txt 
curl -L https://bit.ly/2oaOI1u > fruits.txt

### 02. Duplicate the fruits file 3 times (concat the file into itself)
# Its about time you will be able to resolve the task without a solution, 
# so find your way to concat it 3 times and in 3 differenet ways!!! 
# => P.S - the solution is in the slides (will copy it only twice)

### 03. Find out how many lines are in the updated file
# wc -l is used to count lines
cat fruits.txt | wc -l

### 04. Print out (using pipes) all the fruits starting with the letter C
cat fruits.txt | grep -i ^C

### 05. Print out all the fruits with the substring **ba** in reverse order (find them and print in reverse) 
# the command `tac` is the reverse ot `cat`.... guess what it does?
cat fruits.txt | grep ba | sort -r
cat fruits.txt | grep ba | tac
```
</div>

---
![bg cover](/images/the-end.jpg)