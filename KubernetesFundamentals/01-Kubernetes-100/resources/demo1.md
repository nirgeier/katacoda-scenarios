- First lets initailiza the kubectl
`kubeadm init --apiserver-advertise-address $(hostname -i)`

- Lets start with creating namespace
kubectl create namespace demo1