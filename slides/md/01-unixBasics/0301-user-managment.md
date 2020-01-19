---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
footer: '<div><b>Linux Shell - Users / Groups / Permissions</b><br/><sub>&copy;CodeWizard ltd &emsp; | &emsp; nirgeier@gmail.com
</sub></div>'
class: users 
---

<!-- _class: nobg -->
<div class="text-center align-middle height-100" style="height: 100%;">
    <br/>
    <h1><span class="float-left">Users</span>&emsp;Groups<span class="float-right">Permissions</span></h1>
    <br/>
    <br/>
    <i class="fas fa-user fa-9x text-success float-left"></i>
    <i class="fas fa-users fa-9x text-warning"></i>
    <i class="fas fa-file-signature fa-9x text-danger float-right"></i>
    <br/>
</div>

---

# Unit summary

- Manage users
- Understand Groups
- Master Permissions

---

# Users & Users Accounts
* Unix is **multi users** operating system.
* <i class="fas fa-user-shield text-dark"></i> Security is a big issue in Unix and since Unix is a multi user OS 
  the implementation is based upon users and groups to secure data.
* In Unix, every user has its **own** account.
* In Unix When creating a new user, Unix also create user account for that user.
* **User account** contains all the files, information, and user data. 

---

# root user

* Every Unix has a build in user & user account names <span class="alert alert-primary px-2 py-0">**root**</span>
* The <span class="alert alert-primary px-2 py-0">**root**</span> user account is the default user on all Unix/Unix-like Os.
* <span class="alert alert-primary px-2 py-0">**root**</span> user is known as super-user.
* <span class="alert alert-primary px-2 py-0">**root**</span> user can access **_all files, folders, commands and more_**
* Regular user can be granted root privileges with the `sudo` command
* Root privileges are usually required for installing software and update system configuration 
    <br/>
    <div class="alert alert-danger font-weight-bold">
        The root account is the most privileged on the system and has absolute power over like accessing all files, modify other users data, changing the system critical parts and more
    </div>

---

# root user

* In Unix, the permissions system systems is **set by default to prevent** access by ordinary users 
to <span class="alert alert-danger px-2 py-0">critical parts</span> of the system and to files and directories belonging to other users. 

* On the other hand, an important principle of Unix OS is the provision of maximum flexibility to configure the system, and thus the <span class="alert alert-primary px-2 py-0">**root**</span> user is fully empowered.

* **<div class="alert alert-danger px-2 py-0">It is very easy to damage a Unix system with root access.</div>**

---

<!-- _class: bg-warning -->
<p class="text-center">
When something goes wrong ...
</p>

<i class="fab fa-windows fa-7x float-left text-left"></i><span class="fa-5x float-left">&nbsp;Reboot</span>
<br/>
<br/>
<i class="fab fa-linux fa-9x float-right"></i><span class="fa-5x float-right">Be root</span>

---

<!-- _class: users lead -->
<h1 class="fa-9x">User(s) management</h1>

---

<!-- _class: font-24 -->
![bg right 75%](/images/commands/add-user.png)

# Adding / Creating User

- Creating new user & user account

    ```sh
    sudo adduser <username>

    # or if you are already root
    adduser <username>
    
    # Add user to group
    adduser <username> <group name>
    
    # Add user to sudu group (root group)
    adduser <username> sudo 
    ```

- This will create new user & user account.
- The user home folder is /home/<username>
 
---
# Change user password
- To change user password we will use the `passwd` command

    ```sh
    # Change user password
    passwd <username>

    # -d, --delete
    #      Delete a user's password (make it empty). This is a quick way to disable a password for an account. 
    #      It will set the named account passwordless.
    
    # -l, --lock
    #       Lock the password of the named account. This option disables a password by changing it to a value 
    #       which matches no possible encrypted value (it adds a ´!´ at the beginning of the password).
    
    # Example:
    #       Lock down root password 
    sudo passwd -dl root
    ```
---

# Switch users
- To change current user: 

    ```sh
    # Change user 
    su <username>

    # Grant root previliages (user must be in sudo's group)
    sudo -s

    ```
---

# Find current user 
- To change current user: 

    ```sh
    # print current user account details
    id
    
    # The output of the id command
    # GID => the ID number of a group, in this sample 1002
    uid=1002(nir2) gid=1002(nir2) group=1002(nir2)
    
    # who - display the account that you used to login (the real user info).
    who

    # whoami - show your effective user.
    whoami
    ```
---

# Authorization

<img src="/images/PermissionsConcept.png" class="float-right">

- Authorization is based upon 2 parts
  - **Ownership**
  - **Permissions**

    

---

# Ownership & Permissions

<img src="/images/PermissionsConcept.png" class="float-right">

- Every file and directory on your 
  file system is assigned the following:

<div class="font-22 mx-3">

3 types of owner (Ownership) |
-----------------------------
User                         |
Group                        |
Other                        |

&emsp;&emsp;

3 types of Permissions |
------------------------
Read                   |
Write                  |
Execute                |

</div>

---

# Ownership - User

* A user is the **owner** of the file. 
* By default, the user who created a file becomes its **owner**. 
* Each create file or directory is assign to user and group

    ![width:500px](/images/newFile.png)

---
# Ownership - Group

* A **group** can contain multiple users. 
* A **group** is a collection of users who can share files and other system resources
* All users belonging to a **group** will have the same access permissions to the file. 
* Each **group** must have a name, a **group** identification (GID) number, 
  and a list of user names that belong to the **group**.
* A GID number identifies the **group** internally to the system.

---
# Ownership - Group

* The two types of groups that a user can belong to are as follows:

    * ##### **Primary group** 
        Specifies a group that the operating system assigns to files that are created by the user. Each user must belong to a primary group.

    * ##### **Secondary groups**
        Specifies one or more groups to which a user also belongs. Users can belong to up to 15 secondary groups.

---

# Ownership - Other
* Any other user who has access to a file. 
* This person is not the owner of the file or not assigned to user-group who could own the file. 
* Practically, it means everybody else. 
* Hence, when you set the permission for others, it is also referred as **set permissions for the world** since anyone else can access it.

---
![bg cover](/images/security.jpg)

<!-- 
_color: white 
_class: lead
-->
# `So how does unix handle security?`

---

# Access Permissions
![](/images/Files-permissions.png)

---
![bg right 100%](/images/PermissionsConcept.png)

# Access Permissions
- Every file and directory in your UNIX/Linux system has following 3 permissions defined for all users/groups/others.
    - Read
    - Write
    - Execute
- The above makes the Unix system extremely secure while simultaneously providing the flexibility required of a multi-user system.

---

# Access Permissions
#### Read `r`

Resource    | Permission
------------|-----------------------------------
**Files**   | open/read a file. 
**Folders** | lists directory content.

---

# Access Permissions
#### Write `w`

Resource    | Permission
------------|-----------------------------------
**Files**   | authority to **modify the contents** of a file
**Folders** | add, delete and rename files stored in the directory

**Note:** 
If you have write permission on file **but** do not have write permission on the directory where the file is stored. You will be able to modify the file contents. **But you will not be able to rename, move or remove the file from the directory.**

---

# Access Permissions
#### Execute `x`

- In Windows, an executable program usually has an extension `.exe`,`.msi` etc.
- In Unix/Linux, you cannot run a program unless the execute permission is set. 
- If the execute permission is not set, you might still be able to see/modify the program code(provided read & write permissions are set), but not to run it.

---

# Access Permissions

- Here is a how permissions looks like:
![](/images/Files-permissions.png)

---
![bg 99% right](/images/unix-permissions.png)

# Access Permissions
Unix provides a number of command-line tools to change the access permissions:
- chmod
- chown
- chgrp
- umask

---

# Access Permissions

### `chmod` Changing file/directory permissions

- The permissions also knows an file mode
- `chmod` stands for change mode
- The syntax is:
    ```sh
    chmod permissions filename
    ```

There are 2 ways to use the command -

- Absolute mode
- Symbolic mode

---
<!-- _class: font-20 -->

# Access Permissions - Absolute Mode.
Absolute(Numeric) Mode.  
- Using this mode, file permissions is set using three-digit octal number.

Octal | Binary |  Permission Type       | Symbol
------|--------|------------------------|-------
0	  |  000   | No Permission  	    | ---
1	  |  001   | Execute	            | --x
2	  |  010   | Write	                | -w-         
3	  |  011   | Execute & Write        | -wx
4	  |  100   | Read	                | r--
5	  |  101   | Read & Execute	        | r-x
6	  |  110   | Read & Write	        | rw-
7	  |  111   | Read, Write & Execute	| rwx

---

# Access Permissions - Absolute Mode.
![](/images/chmod1.png)

---
<!-- _class: font-20 -->

# Access Permissions - Symbolic Mode
Using the Symbolic Mode , you change permissions **for all 3 owners**

Operation | Description
------    |-------------------------------------------
+	      |  Adds a permission to a file or directory
-	      |  Removes a permission to a file or directory
+	      |  Sets the permission and overrides the permissions set earlier.

Symbol | Denotations
------ |-------------------------------------------
u	   | user/owner
g	   | group
o	   | other
a	   | all

---

# Permissions - Symbolic Mode
![](/images/chmod2.png)

---

# Access Permissions

### `chown` 
Change _**only**_ ownership of the file
```sh
# Change ownership of file 1 to user2
chown user2 file1
```
---

# Access Permissions

### `chgrp` 
Change _**only**_ **group** ownership of the file
```sh
# Change ownership of file 1 to user2
chown user2 file1
```
---

# Access Permissions

### `umask`
Change _**default**_ access permissions

- While creating a new file, Unix sets the default file permissions. 
- Unix uses the value stored in a variable called _**umask**_ to decide the default permissions. 
- The umask value tells Unix which of the three sets of permissions need to be disabled.

_**Note**_:
This is only for you knowledge, we are not going to cover the unmask command.

---

# Access Permissions

### `Sticky Bit`
- There are some other permission which are not relevant for us and are rarely used.
- Sticky bit is one of them, so if you see a command like this:
```
chmod u+s <file name>
```

_**Note**_:
This is only for you knowledge no need to know it just so you will understand this strange chmod syntax if you see it. You can try it and see the results with `ls -la`


---
<!-- _class: font-20 -->
![bg 75% opacity:.1](/images/bash.png)

# **Hand-On part I**
### **Think and don't search google!!!!!**

01. What is the current user?
02. Add new users name demo1 & demo 2
03. Using root user create new folder `/home/demo2/rootFolder`. What are the permissions that this folder will have?
04. Switch to demo2 user and create new file named `file1.txt` under `/home/demo2/rootFolder`
05. Set the permission on the file to 664
06. What is 664 represents?
07. What is the result of this command: `chmod -R a+rwx,u-x,g-x,o-wx file1.txt`
08. What is the result of this command: `chmod go-rwx`?
09. Permissions of a file are represented by which of the following characters?
    - 1: [r,w,x], 2: [e,w,x], 3: [x,w,e], 4: [e,x,w]
10. When file or folder are created who is the owner and which is the group?
11. (try - run the command with root user) `cat etc/group`. What did you get?
12. (Hard one:) What is `-R` argument used for along with chmod/chgrp/chown command

---

<!-- _class: font-28 -->
![bg 75% opacity:.1](/images/bash.png)

# **There can be many ways as always**

```sh

01. id
02. adduser demo1 && useradd demo2 -p 123
03. su root && mkdir /home/demo2/rootFolder && ls -la /home/demo2/rootFolder
04. su demo2 && touch /home/demo2/rootFolder/file1.txt
    # We get Permission denied error, we need to switch back to root and set the
    # permission for demo2 or for others to be able to write to this folder
    su root && chgrp demo2 `/home/demo2/rootFolder`
05. chmod 664 /home/demo2/rootFolder/file1.txt
06. 664? if i knew i wouldnt have asking you :-)
07. Setthe permission to 664, a=all so set all and then remove permissions
08. Go over the slides with the tile: `Symbolic Mode` (will remove all the permissons of group and other)
09. 1.... 
10. The owner and the group are the user who created it.
11. The list of all the groups in the system
12. R=Recursive, set the permissions on the folder and all childrens.

```
---

### Links
[Chmod Calculator](https://chmodcommand.com/chmod-644/)
[Understanding Linux File Permissions](https://www.linux.com/tutorials/understanding-linux-file-permissions/)

---

![bg cover](/images/the-end.jpg)