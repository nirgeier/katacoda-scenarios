---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
class: kebernetes
footer: '<div><b>Kubernetes Introduction</b><br/><sub>&copy;&nbsp;CodeWizard ltd &thinsp;|&thinsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
# <!--  _class: no-border --> Kubernetes
![bg 50% ](/images/kubernetes.png)

---

# Kubernetes Agenda

- A bit about Kubernetes 
- Terminology

---

# What is Kubernetes?
* The meaning of `Kubernetes` is **Captain** in Greek
* `Kubernetes` is also referred to as K8S (K **ubernete** S) 
* Open-source container-orchestration software
* Supplu automation for deploymnet, scalling, operation and more
* Originally Developed by Google (2013) and v1.0 released to the public in 07/2015
* Was based upon Google `Borg` (Large Cluster Management) developed internally by Google 
* Today is managed by the Cloud Native Computing Foundation (CNCF)
* The most contributed project by Unix community after the Linux Kernel 

---
# Kubernetes Architecture
![bg 75% cover](/images/k8s-clusters.png)

---
# Terminology

- Cluster
- Nodes / Master node
- Pod
- Replica Sets
- Services
- Volumes
- Namespaces
- ConfigMaps and Secrets
- StatefulSets
- DaemonSets
- Labels and selectors
- etcd

---

# Terminology - Cluster

<img class="float-right" src="/images/k8s-clusters.png" width="60%">

<br/>

* When you deploy Kubernetes, you get a `cluster`. 
* A `cluster` is a **set of machines**, called **nodes**, that run containerized applications managed by Kubernetes

---
<!-- _class: bg_white -->

# Terminology - Nodes (architecture)

![bg 70% cover](/images/k8s-node-components-architecture.png)

---

# Terminology - Nodes
<br/>

- A node is a `worker machine` in Kubernetes, previously known as a **minion**.
- A node may be a VM or physical machine, depending on the cluster
- The services on a each node include the container runtime, kubelet and kube-proxy
- k8s has a unique node named **Master Node** (Master Components)
- Each node contains the services necessary to run pods and is managed by the master components
- Node is a top-level resource in the Kubernetes REST API

---

# Terminology - Master Node (Master Components)
- **Master components** provide the cluster’s control plane
- **Master components** manage the cluster (ex: scheduling, deploying)
- **Master components** can run on any node but usually deployed to a dedicated node
- The can be multiple masters nodes for high availability 
- The main components of the **Master Node** (in addition to worker node components) are:
    - kube-apiserver
    - etcd
    - kube-scheduler
    - kube-controller-manager
    - Node Controller
    - And more ...

---

# Terminology - Pod
- The most basic component of k8s
- Pod is a group of containers which is deployed to the host machine
- **Pods serve as unit of deployment, horizontal scaling, and replication**
- Each pod get its unique ip in the cluster
- Pods can communicate with each other using the Pod IP address, Developer should use Services and not Pod IP
- Pods can share storage (volumes), network, host resources (cpu, memory)
- Pods are managed through the k8s API
- Pods run in a shared context (Linux namespaces, cgroups)
- Applications with in the same pod can use _localhost_ for communication

---

# Terminology - Pod (yaml configuration)

- `kind: pod`

  ```sh
  apiVersion: v1
  kind: Pod
  metadata:
    name: pod1
    labels:
      tier: frontend
  spec:
    containers:
    - name: hello1
      image: gcr.io/google-samples/hello-app:2.0
      imagePullPolicy: Always 
      command: ["echo", "SUCCESS"] 

  ```

  ```sh
  # pull the image and create a container
  $ kubectl create –f <file name>

  # Print the log message
  $ kubectl log <pod name>
  ```
---

# Terminology - Replica Sets
- The aim of `ReplicaSet` is to maintain a stable set of replica Pods running at any given time
- `ReplicaSet` is a collection of definitions which specify the pods. 
- It contains pod templates for creating or updating new pods.

---
# Terminology - Replica Sets
```sh
apiVersion: apps/v1 # our API version
kind: ReplicaSet   # The kind we are creating
Metadata: # Specify all Metadata like name, labels
  name: some-name
  labels:
    app: some-App
    tier: some-Tier
Spec: 
  replicas: 3 # Here is where we tell k8s how many replicas we want
  Selector: # This is our label selector field. 
    matchLabels:
      tier: some-Tier
    matchExpressions:
      - {key: tier, operator: In, values: [some-Tier]} # we are using the set-based operators
  template:
    metadata:
      labels:
        app: some-App
        tier: someTier
    Spec: # This spec section should look like spec in a pod definition
      Containers: 
```

---
<!-- _class: nobg -->

![bg cover](/images/the-end.jpg)