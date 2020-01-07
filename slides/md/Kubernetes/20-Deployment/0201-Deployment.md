---
marp: true
paginate: true
inlineSVG: true
auto-scaling: true
class: kebernetes
footer: '<div><b>Kubernetes - Deployments</b><br/><sub>&copy;&nbsp;CodeWizard ltd &thinsp;|&thinsp; nirgeier@gmail.com</sub></div>'
---

<!-- _class: nobg -->
# <!--  _class: no-border --> Kubernetes
![bg 50% ](/images/kubernetes.png)

---

# Kubernetes Deployment

- A `Deployment` provides `declarative updates` for Pods and `Replica Sets` (the next-generation Replication Controller). 

- You only need to describe the `desired state` in a Deployment object, and the Deployment controller will change the actual state to the desired state at a controlled rate for you. 
- You can define Deployments to create new resources, or replace existing ones by new ones.

---

# Deployment Sample
```yaml
apiVersion: apps/v1 
kind: Deployment # <---- Kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  # tells deployment to run 2 pods matching the template
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

---

# Deployment Sample
```sh
# Create the Deployment
$ kubectl apply -f nginx-deployment.yaml --record

# Check the results
$ kubectl describe deployment nginx-deployment

# Disply the replicas pods
$ kubectl get pods -l app=nginx

# Edit the deployment and change the nginx version to 1.8
$ kubectl edit deployment nginx-deployment

# Se the update in progress
$ kubectl get pods -l app=nginx --watch
NAME                                READY   STATUS        RESTARTS   AGE
nginx-deployment-59c9f8dff-2mgtw    1/1     Terminating   0          5m10s
nginx-deployment-59c9f8dff-wp29m    0/1     Terminating   0          5m10s
nginx-deployment-5bcc56b69f-w2b86   1/1     Running       0          29s
nginx-deployment-5bcc56b69f-xqclv   1/1     Running       0          4s
```

---

# Deployment

- **Tip:** - The name of the Replica Set is in the following format:
   `<the name of the Deployment>-<hash value of the pod template>.`
