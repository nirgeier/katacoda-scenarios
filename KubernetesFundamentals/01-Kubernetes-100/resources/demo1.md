- First lets initailiza teh kubectl
`kubeadm init --apiserver-advertise-address $(hostname -i)`

- Lets start with creating namespace
kubectl create namespace demo1