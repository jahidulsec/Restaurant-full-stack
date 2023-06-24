#!/bin/bash

# Build the project
echo "Building the project..."
pip3 install -r requirements.txt
pip3 install mysqlclient


echo "Collect Static..."
python3 manage.py collectstatic