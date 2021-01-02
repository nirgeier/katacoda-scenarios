#!/bin/sh

RESOURCE_GROUP="dev-aks"
CLUSTER_NAME="dev-aks-cluster"

# Login to the desired cluster
az login -u nir.geier@au10tix.com -p XXXX
az account set -s au10tix-dev
az aks get-credentials --resource-group $RESOURCE_GROUP --name $CLUSTER_NAME --admin

# Create the required resources
kubectl.exe create -f resources.yaml 

# 
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana/grafana --generate-name --set "service.type=LoadBalancer,persistence.enabled=true,persistence.size=10Gi,persistence.accessModes[0]=ReadWriteOnce,plugins=grafana-azure-monitor-datasource\,grafana-kubernetes-app"

# Get the grafana password
kubectl get secret --namespace default grafana-1603155186 -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
export SERVICE_IP=$(kubectl get svc --namespace default grafana-1603155186 -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo http://$SERVICE_IP:80
# Open dashboard
#az aks browse --resource-group $RESOURCE_GROUP --name $CLUSTER_NAME
#kubectl create -f https://raw.githubusercontent.com/PlagueHO/Workshop-AKS/master/src/helm/cluster-rbac.yaml
#helm init --service-account tiller