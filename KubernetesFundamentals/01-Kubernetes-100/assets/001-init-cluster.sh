#!/bin/bash

export TYPE_SPEED=5

# include the magic for auto typing
# $@ is for proceesing the input arguments - All arguments, starting from first
source ../demo-magic.sh -n $@

# Clear the screen
# clear

# Setup cluster

p "${RED}# Configure kubectl cluster${COLOR_RESET}"
p "${RED}# -------------------------"

p
p "${GREEN}# Start local cluster${COLOR_RESET}"
p "kubectl config set-cluster nirg-cluster --server=https://localhost --insecure-skip-tls-verify=true"
kubectl config set-cluster nirg-cluster --server=https://localhost --insecure-skip-tls-verify=true

p 
p "${GREEN}# Verify that the cluster created successfully${COLOR_RESET}"
p "kubectl config view | grep cluster"
kubectl config view | grep cluster

p
p "${GREEN}# Set basic auth for nirg-cluster [set-credentials]${COLOR_RESET}"
p "kubectl config set-credentials nirg-cluster --username=nirg-auth --password=hard-to-guess-password"
kubectl config set-credentials nirg-cluster --username=nirg-auth --password=hard-to-guess-password

p
p "${GREEN}# Set the desired cluster for nirg-cluster [set-context]${COLOR_RESET}"
p "kubectl config set-context nirg --cluster=nirg-cluster --user=nirg-auth"
kubectl config set-context nirg --cluster=nirg-cluster --user=nirg-auth

p
p "${GREEN}# Switch to the desired cluster [use-context]${COLOR_RESET}"
p "kubectl config use-context nirg"
kubectl config use-context nirg

# p
# p "# Press enter to create resources!"
# wait

#     clear
#     # Create resources
#     p "# Create Resources"
#     p "# ------------"
#     p "# Create a namespace for the project"
#     pe "kubectl create namespace kube-decon"
#     p
#     p "# Create the pods via a deployment"
#     pe "kubectl --namespace=kube-decon create -f resources/basic/kube-decon-deployment.yaml"
#     p
#     p "# Expose the pods via a service"
#     pe "kubectl --namespace=kube-decon create -f resources/basic/kube-decon-service.yaml"
#     p
#     p "# Route a hostname to the service via ingress"
#     pe "kubectl create -f resources/basic/kube-decon-ingress.yaml"
#     p
#     wait

#     while :; do
#         clear
#         pe "kubectl --namespace=kube-decon get deployment,pods,service,ingress"
#         kubectl --namespace=kube-decon get po |grep -q Running && break
#         sleep 5
#     done
# elif [[ "$DEMO" == "power" ]]; then
#     pe "kubectl apply -f resources/power"
# else
#     p "Unknown demo: $DEMO"
# fi