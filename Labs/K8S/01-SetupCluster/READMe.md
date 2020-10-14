![](../resources/k8s-logos.png)

----

[1]:https://kubernetes.io/docs/tasks/tools/
[2]:https://minikube.sigs.k8s.io/docs/start/

# K8S Hands-on

### Pre-Requirements

Tool       |  Donwload Link      |  Verify installation
-----------|---------------------|----------------------
kubectl    | [Download](1)       |  `kubectl config view`
minikube   | [Download](2)       |  `kubectl get nodes`

### Verify pre-requirements installations

- For this module you will need to have `minikube` & kubectl installed
- Verify that you have `kubectl` installed as well

- Once installed start minikube

   ```sh
   $ kubectl version
   ```

- Verify that `kubectl` is installed (You should get something like the following)
    ```sh
    kubectl config view
    ```
    ```yaml
    apiVersion: v1
    clusters:
    - cluster:
        certificate-authority-data: DATA+OMITTED
        server: https://kubernetes.docker.internal:6443
    name: docker-desktop
    - cluster:
        certificate-authority: C:\Users\Nir\.minikube\ca.crt
        server: https://10.0.0.4:8443
    name: minikube
    - cluster:
        insecure-skip-tls-verify: true
        server: https://localhost
    name: nirg-cluster
    contexts:
    - context:
        cluster: docker-desktop
        user: docker-desktop
    name: docker-desktop
    - context:
        cluster: docker-desktop
        user: docker-desktop
    name: docker-for-desktop
    - context:
        cluster: minikube
        user: minikube
    name: minikube
    current-context: minikube
    kind: Config
    preferences: {}
    users:
    - name: docker-desktop
    user:
        client-certificate-data: REDACTED
        client-key-data: REDACTED
    - name: minikube
    ```

- Verify that `minikube` is running
    ```sh
    $ kubectl get nodes
    NAME       STATUS   ROLES    AGE   VERSION
    minikube   Ready    master   11h   v1.17.0
    ```

---
<a href="../02-Deployments">Deployments&nbsp;&#187;</a>
