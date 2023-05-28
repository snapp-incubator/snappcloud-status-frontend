#!/usr/bin/env bash

set -e

override=$1

current_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
path_to_k8s="$current_dir/server"

if [ ! -d "$path_to_k8s" ]; then
    echo "Error: command (directory) server does not exists."
    exit 9999 # die with error code 9999
fi

echo "tearup snappcloud-status-frontend-server ..."

helm upgrade --install "snappcloud-status-frontend-server" "$path_to_k8s" \
	-f "$path_to_k8s/values.yaml" \
	-f "$path_to_k8s/overrides/$override.yaml"
