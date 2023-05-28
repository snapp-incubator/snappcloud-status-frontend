#!/usr/bin/env bash

set -e

cmd=$1

current_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
path_to_k8s="$current_dir/$cmd"

if [ ! -d "$path_to_k8s" ]; then
    echo "Error: command (directory) $1 does not exists."
    exit 9999 # die with error code 9999
fi

echo "teardown snappcloud-status-frontend-$cmd ..."

helm uninstall "snappcloud-status-frontend-$cmd"
