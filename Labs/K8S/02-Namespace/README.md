![](../resources/k8s-logos.png)

----

### Setup Namespace    
- Namespaces are the default way for Kubernetes to separate resources. 
- Using name spaces we can isolate the development since Namespaces do not share anything between them.
    ```sh
    # In this sample `ns-nirg` is the desired name space 
    $ kubectl create namespace ns-nirg 
    namespace "ns-nirg" created
    ```
    
    ```sh
    ### !!! Try to create the following name space:
    kubectl create namespace my_namespace-
    ```
- To set the default namespace run:

    ```sh
    $ kubectl config set-context $(kubectl config current-context) --namespace=ns-nirg
    Context minikube modified.
    ```

- Verify that you've updated the namespace

    ```sh
    $ kubectl config get-contexts
    CURRENT     NAME                 CLUSTER          AUTHINFO         NAMESPACE
                docker-desktop       docker-desktop   docker-desktop
                docker-for-desktop   docker-desktop   docker-desktop
    *           minikube             minikube         minikube         ns-nirg
    ```

---
<a href="../02-Deployments">Deployments&nbsp;&#187;</a>
