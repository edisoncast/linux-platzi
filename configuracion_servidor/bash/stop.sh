#!/bin/bash -e
#Script para detener el servicio 

for port in $(seq 3000 3003); do sudo systemctl stop platzi@$port; done


exit 0