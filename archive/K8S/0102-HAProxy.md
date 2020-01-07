# HAProxy

---
### HAProxy
- HAProxy is a free, very fast and reliable solution offering 
    - High availability
    - Load balancing
    - TCP/HTTP proxy. 
- It is particularly suited for very high traffic web sites and powers quite a number of the world's most visited ones. 
- Over the years it has become the de-facto standard **opensource** load balancer.

---

### Installing HAProxy (K8S)

- HAProxy is shipped and installed like any other K8S resource

    ```sh
    $ kubectl apply -f https://raw.githubusercontent.com/haproxytech/kubernetes-ingress/master/deploy/haproxy-ingress.yaml
    ```    

---

### Deployment Content

**haproxy-ingress.yaml** contain the following resources:

Resource            |    Description
--------------------|---------------
Namespace           |   namepapce in which to place the resources
ServiceAccount      |   Used for authenticating the Ingress Controller
ClusterRole         |   Define permissions
ClusterRoleBinding  |   For associating the ClusterRole with the ServiceAccount
Default Service     |   Default service to handle all un-routed traffic and return 404
Service (Ingress)   |   Allow traffic to reach the Ingress Controller
Deployment          |   Deploy the Ingress Controller pod


---

### HAProxy - Namespace
- The first thing that the YAML file does is create a `namespace` in which to place the resources. 
- This avoids **cluttering** up the default namespace and keeps objects that are related to the ingress controller neatly in one place. 

    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
        name: haproxy-controller
    ```

---

### HAProxy - Service Account
- It also creates a service account with which to run the controller.
- When you (a human) access the cluster (for example, using kubectl), you are authenticated by the apiserver as a particular User Account (currently this is usually admin, unless your cluster administrator has customized your cluster). 
- Processes in containers inside pods can also contact the apiserver. When they do, they are authenticated as a particular Service Account (for example, default).
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
        name: haproxy-ingress-service-account
        namespace: haproxy-controller
    ```
---

### HAProxy - ClusterRole / ClusterRoleBinding  
- Since most Kubernetes deployments use role-based access control (RBAC), granting the necessary permissions to the service account is done by using a ClusterRole and ClusterRoleBinding resource. 
- This allows the controller to watch the cluster for changes so that it can update the underlying HAProxy configuration.