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

# Kubernetes resources
* The Kubernetes API defines a set of resources
* Resources are organized by type, `kind`
  Most common resource `kinds` are:
    Kind        |  Description
    ------------|-------------
    `node`      | a machine — physical or virtual — in our cluster
    `pod`       | group of containers running together on a host
    `service`   | stable network endpoint to connect to one or multiple containers
    `namespace` | isolated group of things
    `replicaset`| set of containers which can be scalled
    `secret`    | sensitive data to be passed to a container

    And much more! (We can see the full list by running `kubectl get <...>`)
---
# Terminology

- Cluster
- Nodes / Master node
- Pod
- Replica Sets / Deployments
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

* A node is a `worker machine` in Kubernetes, previously known as a **minion**.
* A node may be a VM or physical machine, depending on the cluster
* The services on a each node include the container runtime, kubelet and kube-proxy
* k8s has a unique node named **Master Node** (Master Components)
* Node is a top-level resource in the Kubernetes REST API
* Each node contains the services necessary to run pods and is managed by the master components
  - Container Engine (typically Docker)
  - `kubelet` (aka “node agent”)
  - `kube-proxy` (a necessary but not sufficient network component)

---

# Terminology - Master Node (Master Components)
* **Master components** in Kubernetes is a collection of services
* **Master components** provide the cluster’s control plane
* **Master components** manage the cluster (ex: scheduling, deploying)
* **Master components** can run on any node but usually deployed to a dedicated node
* The can be multiple masters nodes for high availability 
* The main components of the **Master Node** (in addition to worker node components) are:
    - kube-apiserver
    - etcd (a highly available key/value store; the `“database”` of Kubernetes)
    - kube-scheduler
    - kube-controller-manager
    - Node Controller
    
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
  kind: Pod <-----------------------------------<<
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
  ```
---

# Terminology - Replica Sets
- The aim of `ReplicaSet` is to maintain a stable set of replica Pods running at any given time
- `ReplicaSet` is a collection of definitions which specify the pods. 
- It contains pod templates for creating or updating new pods.
- In production its much better to use `Deployment` than `ReplicaSet`, deployment is reacher in features 
- To get the ResplicaSet information:
  ```sh
  kubectl get rs
  ```

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

# Terminology - Deployments
- `Deployment` provides declarative updates for `Pods` and `ReplicaSets`.
- `Deployment` controll and update the state of the Pods in the ReplicaSet
- Main `Deploymnet` use cases
  - Update ReplicaSet for rollback
  - Update Pods (add/remove/update)
  - Scale up/down
  - Clean old ReplicaSet

---
# Terminology - Deploymnets

- `Deployment` ensures that only a **certain number of Pods are down** while they are being created or updated. 

- Every time deployment is noticing changges, a `ReplicaSet` is created to ferlect the changes to the  desired Pods

- During **`update`**, <br/>by default, at least 75% of the desired number of Pods are up (25% max unavailable).

- During **`creation`**,<br/> by default, at most 125% of the desired number of Pods are up (25% max surge).

---
# Terminology - Deployments

- Create X deploymnets units of nginx
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      labels:
        app: nginx
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            ports:
            - containerPort: 80
    ```
---

# Terminology - Deploymnets

- Use Deploymnet
  ```sh
  kubectl scale deployment.v1.apps/nginx-deployment --replicas=10 --record=true
  ```

- Get details of your Deployment:
  ```sh
  kubectl describe deployments
  ```
---

# Terminology - Services

- A `Service` is an **abstraction** which defines a 
  - **Logical set** of Pods and a
  - **Policy** by which to access them (aka micro-service). 

- The set of Pods is accessed by a selector
- A `Service` in Kubernetes is a REST object
- A `Service` is responsible for enabling network access to a set of pods.
  - Pods can connect each other via direct network requests, while `Service` is used for exposing services to the "world"

---

# Terminology - Services

- Kubernetes assigns Service an IP address (aka “cluster IP”), which is used by the `Service` proxies
- Every node in a Kubernetes cluster runs a `kube-proxy`. 
  kube-proxy is responsible for implementing a form of virtual IP for Services
- Services can define multiple ports and event static IPs
---

<!-- _class: bg_white -->
# Terminology - Services

![bg 55% ](/images/k8s-services.png)

---

# Terminology - Services

```sh
kind: Service 
apiVersion: v1 
metadata:
  name: hostname-service 
spec:
  # Expose the service on a static port on each node so that we can access the service from outside the cluster 
  type: NodePort

  # When the node receives a request on the static port (30163) "select pods with the label 'app' set to 'echo-hostname'" 
  # and forward the request to one of them
  selector:
    app: echo-hostname 

  # Three types of ports for a service
  #    - nodePort - a static port assigned on each the node
  #    - port - port exposed internally in the cluster
  #    - targetPort - the container port to send requests to
  ports:
    - nodePort: 30163
      port: 8080 
      targetPort: 80
```
---
# Terminology - Services (ServiceTypes)
Kubernetes ServiceTypes allow you to specify what kind of Service you want. 

Node types            | Description
----------------------|------------
`ClusterIP` [default] | Exposes the Service on a cluster-internal IP, which makes the<br/> Service only reachable from within the cluster. 
`NodePort`            | Exposes the Service on each Node’s IP at a static port (the NodePort). 
`LoadBalancer`        | Exposes the Service externally using a cloud provider’s load balancer. <br/>NodePort and ClusterIP Services, to which the external load balancer <br/>routes,are automatically created.
`ExternalName`        | Maps the Service to the contents of the externalName field <br/>(e.g. foo.bar.example.com), by returning a CNAME record

---

# Terminology - Volumes
 - In Docker volumes are set of mapping paths from the host to the container and vice versa
 - In k8s, volumes has an explicit lifetime - the same as the Pod that encloses it.
For example: when Pod ceases to exist, the volume will cease to exist as well.
- k8s supports multiple types of volumes

  - My Favorite: **gitRepo (deprecated)**

---

# Terminology - Namespaces
- Kubernetes supports multiple virtual clusters deployed on the same physical cluster. 
  (multiple separate sub groups)
- These virtual clusters are called `namespaces`.
- Namespaces are a way to divide cluster resources between multiple users (via resource quota).
- Namespaces provide a scope for names. 
  Names of resources need to be unique within a namespace
- Namespaces can not be nested inside one another and each Kubernetes resource can only be in one namespace.

---

# Terminology - Namespaces
- Kubernetes starts with three initial namespaces:

Namespaces      | Description
----------------|------------
`default`       | The default namespace for objects with no other namespace
`kube-system`   | The namespace for objects created by the Kubernetes system
`kube-public`   | This namespace is created automatically and is readable by<br/> all users (including those not authenticated). 

---

# Terminology - ConfigMaps / Secrets
- `ConfigMaps` are used to pass and share key value pairs between pods
- `Secrets` are similar to config maps and store sensitive data

  ```sh
  # Create CongifMap explicitly
  kubectl create configmap my-password --from-literal='password=123'

  # View config maps
  kubectl get configmaps
  ```

---
# Terminology - ConfigMaps / Secrets

* Create CongifMap from file

  ```sh
  apiVersion: v1
  kind: ConfigMap
  metadata:
      name: config-value01
      namespace: default
  data:
      day: 'Sunday'
      year: '2019'
      rainning: 'false'
  ```

  ```sh
  # Create the config maps
  kubectl create -f configmap.yaml
  ```

---
# Terminology - ConfigMaps / Secrets

- Read the config maps
- `env:` - Select a specific variable we wish to use
  
  ```
    ...
    env: 
      - name: week-day
        valueFrom: <-------------------------------
          configMapKeyRef:
            name: <.....>
            key: <.....>
  ```
- `envFrom` - Select all the defined variables (in case we have multiple ones)
  ```
    ...
    envFrom: 
      ConfigMapRef:
        name: <.....>
  ```

---
<!-- _class: nobg -->

![bg cover](/images/the-end.jpg)