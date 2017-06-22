# -*- mode: ruby -*-
# vi: set ft=ruby :

box="ubuntu/trusty64"

Vagrant.configure(2) do |config|
  config.vm.box = box
  config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 2
      v.name = "djavan.site"
    end

  config.vm.network "forwarded_port", guest: 6001, host: 6001
  config.vm.network "forwarded_port", guest: 6002, host: 6002
  config.vm.network "forwarded_port", guest: 3002, host: 3002
  config.vm.network "private_network", ip: "192.168.33.12"
  config.vm.synced_folder ".", "/var/www/djavan_site"
  config.vm.provision :shell, path: "./scripts/bootstrap.sh"
end
