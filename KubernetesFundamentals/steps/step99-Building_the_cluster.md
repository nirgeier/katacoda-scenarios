- In this tutorial we will be using minikube

_Minikube is a CLI tool that provisions and manages single-node Kubernetes clusters optimized for development workflows._

- Verify that minikube is installed 
    `minikube version`{{execute}}

- Start minikube
    `minikube start`{{execute}}

- Initialize the K8s cluster
    `kubeadm init --apiserver-advertise-address $(hostname -i)`{{execute}}
  

