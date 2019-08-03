#!/bin/bash -e
# Script para iniciar el servicio automáticamente

for port in $(seq 3000 3003); do sudo systemctl enable platzi@$port; done

