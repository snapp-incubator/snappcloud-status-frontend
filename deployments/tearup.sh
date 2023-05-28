#!/usr/bin/env bash

set -e

cmd=$1
override=$2

current_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
path_to_k8s="$current_dir/$cmd"

if [ ! -d "$path_to_k8s" ]; then
    echo "Error: command (directory) $1 does not exists."
    exit 9999 # die with error code 9999
fi

echo "tearup snappcloud-status-frontend-$cmd ..."

helm upgrade --install "snappcloud-status-frontend-$cmd" "$path_to_k8s" \
	-f "$path_to_k8s/values.yaml" \
	-f "$path_to_k8s/overrides/$override.yaml"
