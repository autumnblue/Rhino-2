# Djavan - Rhino Security Assessment and Reporting Tool

## [Code Style](wikis/home)

## About the project

This is the Rhino Security Labs Djavan Tool.

## Development Team Obligation

Any developer (contractor or employee) working on this project must be using one of the development environmnet specified below. The possibilities are: Docker or Vagrant.

*Please, do not use your own operating system's local environment for development.*

Doing so could result in unknown errors, package incompatibility or many other issues that could cause breakages when deployed to our staging or production environmnet.

By using the encapsulated environments of Docker or Vagrant, we are able to guarantee that every developer is using the same environment during the development phase, resulting in code that runs on a system which closely mimics the production environment.

If you have any questions about how to bring the environment up contact our DevOps team either by email (xxxx) or slack channel #xxxxx

## Development Environment

Below you will find all the details and instructions about how to setup your development environment.

Basically you will have a VM running [NodeJS](https://nodejs.org/) serving the website content.

As an alternative to Vagrant you can use Docker. The instructions can be found in the section below.

The local website will be available through the url http://localhost:6001.

Thanks to the port forward feature from Vagrant you don't need to worry about the VM ip address or changing you local hosts file.

Make sure you don't have any other service running on your local machine that uses port 6001. Otherwise there will be conflicts and the service will not start.

### Requirements

Before you start check if you have the latest version of the below applications. They are available for all platforms. Don't use VirtualBox 5.1.x on Mac OS, it's not compatible with Vagrant. Use virtualBox 5.0.x instead!

* [Vagrant](https://www.vagrantup.com)
* [Virtual Box](https://www.virtualbox.org/wiki/Downloads)

### Environment Variables

There are some environment variables that must be specified that will guarantee integration with external services. That variables are set using the `.env` file located in the root folder. An example of a possible list of values are:

```
# Defines the backend endpoint
API_URL="http://example.me/v1/"
```

If you decide by changing any of value within the `.env` file remember that the process must be restarted.

If for any reason any environment variables must be included for a proper operation of the application don't hesitate and contact the DevOps team through Slack or E-Mail. They will take care and guarantee that during the deployment process those values will be filled properly.

### Vagrant

The steps below demonstrates how to setup your VM and start the nodejs process to serve the website. The Vagrant box will use 2GB of your available RAM. Depending of the amount of RAM available on your physical machine that could cause some slowness. If that is the case check if you have any other VM or process that could be stopped.

1) Clone project repository via ssh:

 * `git clone git@bitbucket.org:xander-sereda/djavan-front-end.git`


2) Start VM:

* If it is the first time you run this VM use `vagrant up --provision`. The next time you need to bring the VM up you can just run `vagrant up`.

* `vagrant ssh` - Get access to VM terminal.


3) Launch the project:

Once logged into the VM via ssh you can run the development server by running the following command:

* `cd /var/www/djavan_site/`
* `npm run dev`


4) Useful Vagrant commands:

* `vagrant halt` - switch VM off and release your allocated RAM.
* `vagrant destroy -f` - completely destroy the current VM. You must run `vagrant up --provision` again to re-create the VM if necessary.


### Docker

If you don't know what is docker check the official site at [docker.com](https://www.docker.com/what-docker). You can find instructions about how to install docker on different platforms (OSX, Linux and Windows) accessing [https://docs.docker.com/](https://docs.docker.com/)

The command bellow will start a nodejs 6.3 container passing the `entrypoint.sh` file as the command to be executed just after the boot. If you look into that file content you will see that it calls `npm install` and `npm run dev` commands.

`docker run -it --rm --name djavan_web -p 6001:6001 -v $PWD:/usr/src/app -w /usr/src/app node:6.3 ./entrypoint.sh`

The npm packages installation process will take some time to be completed and then you will see the message `Listening on port 6001. Open up http://0.0.0.0:6001/ in your browser.`

Press `Ctrl+C` to stop the container execution and consequently the node process.


Structure
---------

```
|-- client
|   |-- index.jsx
|   |-- webpack-assets.json
|-- shared
|   |-- actions
|   |-- components
|   |-- constants
|   |-- lib
|   |-- reducers
|   |-- translations
|   |-- routes.jsx
|-- static
|   |-- img
|   |-- styles
|   |-- favicon.ico
|-- Other config files
```
