# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "private_network", ip: "55.55.55.5"

  config.vm.synced_folder "C:/views/onechain-back-verify", "/vagrant", type: "virtualbox"

  config.vm.provider "virtualbox" do |vb|
     vb.memory = "2048"
  end

  config.vm.provision :shell, inline: <<-SHELL
     sudo apt-get -y install g++
     sudo apt-get -y install golang
     sudo apt-get -y install git

     # Install node.js
     curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
     sudo apt-get -y install nodejs
     sudo apt-get -y install npm

     # Install various etherium tools
     sudo npm install --no-bin-links -g sync-exec
     sudo npm install --no-bin-links -g ethereumjs-testrpc
     sudo npm install --no-bin-links -g solc
     sudo npm install --no-bin-links -g web3
     sudo npm install --no-bin-links -g truffle@3.4.3
	 
	 # Install mangodb
	 sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
	 echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
	 sudo apt-get update
	 sudo apt-get install -y mongodb-org
	 sudo service mongod start
	 sudo sed -i 's/bindIp: 127.0.0.1/#bindIp: 127.0.0.1/g' /etc/mongod.conf #in order to access the db using 55.55.55.5:27017 outside the virtual box
	 sudo service mongod restart

	 #Install nodejs web server related packages
	 cd /vagrant
	 echo {} > package.json
	 sudo npm install --no-bin-links express --save
	 sudo npm install --no-bin-links body-parser --save
	 sudo npm install --no-bin-links cookie-parser --save
	 sudo npm install --no-bin-links multer --save
	 sudo npm install --no-bin-links mongodb --save
	 
	 #Install nodejs web server related packages
	 sudo npm install --no-bin-links react --save-dev
	 sudo npm install --no-bin-links react-dom --save-dev
     sudo npm install --no-bin-links react-bootstrap --save-dev
	 sudo npm install --no-bin-links babel --save-dev
	 sudo npm install --no-bin-links babel-core --save-dev
	 sudo npm install --no-bin-links babel-eslint --save-dev
	 sudo npm install --no-bin-links babel-plugin-dev-expression --save-dev
	 sudo npm install --no-bin-links babel-plugin-lodash --save-dev
	 sudo npm install --no-bin-links babel-plugin-transform-class-properties --save-dev
	 sudo npm install --no-bin-links babel-plugin-transform-decorators-legacy --save-dev
	 sudo npm install --no-bin-links babel-plugin-transform-es2015-modules-amd --save-dev
	 sudo npm install --no-bin-links babel-polyfill --save-dev
	 sudo npm install --no-bin-links babel-preset-es2015 --save-dev
	 sudo npm install --no-bin-links babel-preset-react --save-dev
	 sudo npm install --no-bin-links babel-preset-stage-0 --save-dev
	 sudo npm install --no-bin-links babel-preset-stage-1 --save-dev
	 sudo npm install --no-bin-links babelify --save-dev
	 sudo npm install --no-bin-links browserify --save-dev
	 sudo npm install --no-bin-links browserify-shim --save-dev
	 sudo npm install --no-bin-links browserify-transform-tools --save-dev
	 sudo npm install --no-bin-links gulp --save-dev
	 sudo npm install --no-bin-links vinyl-source-stream --save-dev
	 sudo npm install --no-bin-links mobx --save-dev
	 sudo npm install --no-bin-links mobx-react --save-dev
	 sudo npm install --no-bin-links whatwg-fetch --save-dev

     printf ". ~/.bashrc\ncd /vagrant\n. .env.sh\n" >> /home/vagrant/.bash_profile	 
     mkdir /home/vagrant/log
     
     sudo chown -R vagrant /home/vagrant

     echo '=== Provisioning Complete ==='
  SHELL
end