-----
### Deploy the container as K8S service

- First we need to start minikube
    `minikube start`{{execute}}
    Wait until you see the folllowing message: 
    **kubectl create deployment node-server --image=node1**

- Lets create k8s deployment for our node serevr
    `kubectl run demo1 --image=node1 --image-pull-policy=Never`{{execute}}

- Verify that the pod is up and running
    `kubectl get pods`{{execute}}    

- Click on the port 3000 in the terminal (you will not be able to see the server output)

- Now lets "expose" the server as service
    `kubectl expose deployment demo1 --type=LoadBalancer --port=3000`{{execute}}

- Verify that that the pod is accesiable by finding the service port 
    `kubectl get pods,svc`{{execute}}

- You should see something like:

NAME                | TYPE         | CLUSTER-IP    | EXTERNAL-IP | PORT(S)        |     AGE
--------------------|--------------|---------------|-------------|----------------|------------
service/discovery   | LoadBalancer | 10.100.142.45 | <pending>   | 3000:31820/TCP |  7s
service/kubernetes  | ClusterIP    | 10.96.0.1     | <none>      | 443/TCP        |  37m    

- Now open the build in browser and set the port to (in this sample) 31820
