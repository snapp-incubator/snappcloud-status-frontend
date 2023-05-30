helm-install: 
	helm upgrade --install "snappcloud-status-frontend" ./deployments

helm-uninstall: 
	helm uninstall "snappcloud-status-frontend"
