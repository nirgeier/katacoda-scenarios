# This demo will create and use Nginx Ingress controller 

# Grab the ingress component and create the mandatory resources
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml

# Enable the addon for minikube
minikube addons enable ingress

# Create a service 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml

# Check that all is installed
kubectl get pods -n ingress-nginx

# Create In gress using NodePort:
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/baremetal/service-nodeport.yaml

# Verify that the pod is alive
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch

# Create the services and ingress
kubectl.exe apply -f .\02-k8s-pods.yaml
