#!/usr/bin/env bash

set -e

current_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
path_to_k8s="$current_dir/server"

if [ ! -d "$path_to_k8s" ]; then
    echo "Error: command (directory) $1 does not exists."
    exit 9999 # die with error code 9999
fi

echo "teardown snappcloud-status-frontend-server ..."

helm uninstall "snappcloud-status-frontend-server"
