#!/bin/sh
echo ""
echo "Current working directory is $(pwd)"
echo ""

echo "Current files in $(pwd) are.."
echo "$(ls -la)"
echo ""

if [ -f /etc/debian_version ] || [ grep -qi ubuntu /etc/lsb-release ] || [ grep -qi ubuntu /etc/os-release ];
then
  # Install via package
  echo "Updating Ubuntu to latest patch revision"
  echo ""
  apt-get update -y && \
  apt-get update -y && \
  
#update djavan using ansible
echo "Preparing to update source code"
echo ""
if [ -e "dev.yml" ]; then
  echo "Updating djavan and ansible source code"
  echo ""
  ansible-playbook -v dev.yml
  echo ""
  else
    echo "dev.yml does not exist in $(pwd), unable to update djavan and ansible source code"
    exit 1
    fi
    
#update djavan using ansible
echo "Preapring to update djavan"
echo ""
if [ -e "/etc/ansible/deploy.yml" ]; then
  echo "Updating the djavan application"
  echo ""
  ansible-playbook -v /etc/ansible/deploy.yml
  echo ""
  else
    echo "/etc/ansible/deploy.yml does not exist, unable to update djavan"
    exit 1
    fi
fi