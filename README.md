# onechain-back-verify
Contains ONE's backchain verify app

Licensed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0)

## Setup

Setup for Windows environments:

install VirtualBox
install Vagrant
Run vagrant plugin install vagrant-vbguest
Clone the onechain-back-verify repo using git clone https://github.com/onenetwork/onechain-back-verify.git
cd to the onechain-back-verify directory in the cloned folder
Modify the file Vagrant, repointing "E:/views/onechain-back-verify" to your cloned onechain-back-verify directory in the line: config.vm.synced_folder "E:/views/onechain-back-verify", "/vagrant", type: "virtualbox"
Run vagrant up to provision and start the VM
Run vagrant ssh to connect to the VM
This will put you in /vagrant, which is bound to your local onechain-back-verify directory, and should be your location for executing commands and doing work
