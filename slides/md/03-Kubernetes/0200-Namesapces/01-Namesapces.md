---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
class: kebernetes
footer: '<div><b>Kubernetes Introduction `[Namespaces]`</b><br/><sub>&copy;&nbsp;CodeWizard ltd &thinsp;|&thinsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
# <!--  _class: no-border --> Kubernetes <br/><sub>Namespaces</sub>
![bg 50% ](/images/kubernetes.png)

---
<!-- _class: nobg -->
# <!--  _class: no-border --> Namespaces
![bg 50%](/images/namespaces.png)

---

# Kubernetes Agenda
<br/>

- What is a Namespace?
- Default Namespace
- Namespace commands

---

# What is a Namespace?
<br/>

* Kubernetes supports **multiple virtual clusters** on the same **physical** cluster. 
* These virtual clusters are called `Namespace`.

* So, `Namespace` are virtual clusters inside a single physical clusters
* Each cluster contains the three pre-defined `Namespaces`
    - `default`
    - `kube-system`
    - `kube-public`

---
# Namespace Notes
* `Namespace(s)` are used for isolation of environments, for developers and more 
* `Namespace` provides the scope for Pods, Services, Deployments and more.
* `Namespace` cannot be nested in other `Namespace` (**Azure does support it)
* Each object added to a Kubernetes cluster must be placed **within exactly one** `Namespace`.
* The same object name can be used in **different `Namespace`**
* **!!! Important**
    - `Namepsace` allow us to attach/restrict authorization <br/>and access policy to a any `Namespace` resources.
    - `Namespace` allow us to limit resources (CPU,GPU Memory etc)

---
# Default Namespace

- `Default` namespace is being used when **no other namespace is provided**. 
- Using `Default` namespace is a quick way to create a **mess !!!**

---
# Namespace commands

- Get a list of all namespaces

    ```
    kubectl get namespace
    ```

- Create a namespace

    ```sh
    # Create a new namespace
    kubectl create namespace <desired-namespace-name>
    ```
 
    Or with yaml file
 
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
        name: <desired-namespace-name>
    ```
---    
# Namespace commands
- Define working context with different namespaces
    ```
    # Define 2 different namespaces 
    kubectl config set-context dev  --namespace=development 
    kubectl config set-context prod --namespace=production 
    ```

<hr>

- Switch between namespaces
    ```
    # If we have an existing content we can swith to it
    kubectl config use-context dev

    # If we dont have a context we can simply use this command to switch namespaces
    kubectl config set-context --namespace --current=<namespace-name>
    ```
---
# Namespace commands
- Once we have switched to a namespace all the kubectl commands will use the current namespace unless we specify otherwise
- We can add `-n=...` to most of the kubectl commands

    ```sh
    kubectl get pods
    kubectl get deployment

    # View other namepscae resources
    kubectl get pods --namespace=...
    kubectl get pods --n=...

    # try this out:
    kbectl get all

    ```

---

<!-- _class: nobg -->

![bg cover](/images/the-end.jpg)