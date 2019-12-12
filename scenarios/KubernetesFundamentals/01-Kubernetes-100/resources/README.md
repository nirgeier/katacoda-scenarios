- Create the server code
- Create the Docker file
- Start minikube `minikube start`
- Start minikube dashboard `minikube dashboard`
- Open browsert at localhost:30000
- Create a deployment
    `kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node
- View the deployment 
    - Using the Browsers & dashboards
    - CLI: `kubectl get deployments`

    - View the pods
    `kubectl get pods`

    - Get the cluster events
    `kubectl get events`

    - View the configuration
    `kubectl config view`

- Pods are only visibel internally - so we will expose them to the world
`--type=LoadBalancer` is used to "tell" k8s that we want to expose it to the world
`kubectl expose deployment hello-node --type=LoadBalancer --port=8080` 

- View the services
`kubectl get services`

- Start the service
`kubectl service hello-node`

- Addons
`minikube addons list`