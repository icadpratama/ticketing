# [Ticketing - Ticketing Support System Admin Template based on Ant Framework](https://www.lawencon.com/ "Lawencon")
Ticketing is a react redux based admin template for ticketing support system
# Local Installation

**Note: Ticketing is using [yarn](https://yarnpkg.com/en/docs/install) instead npm**

Installing all the dependencies of project, run following command:

``` $yarn ```


# Docker and Jenkins
The scenario is
1. I have create ReactJs project on my local environment,
2. I have a server run on an operating system,
3. how to distribute my web easily.

## Docker
Docker is a set of platform-as-a-service products that use operating-system-level virtualization to deliver software in packages called containers. In other words Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

And importantly, Docker is open source. This means that anyone can contribute to Docker and extend it to meet their own needs if they need additional features that aren't available out of the box.


### Who is Docker for? ###
Docker is a tool that is designed to benefit both developers and system administrators, making it a part of many DevOps (developers + operations) toolchains. For developers, it means that they can focus on writing code without worrying about the system that it will ultimately be running on. It also allows them to get a head start by using one of thousands of programs already designed to run in a Docker container as a part of their application. For operations staff, Docker gives flexibility and potentially reduces the number of systems needed because of its small footprint and lower overhead.


### Docker and Security ###
Docker brings security to applications running in a shared environment, but containers by themselves are not an alternative to taking proper security measures.

Dan Walsh, a computer security leader best known for his work on SELinux, gives his perspective on the importance of making sure [Docker containers are secure](https://opensource.com/business/14/7/docker-security-selinux). He also provides a detailed breakdown of [security features](https://opensource.com/business/14/9/security-for-docker) currently within Docker, and how they function.



## Jenkins
Jenkins is an open source Continuous Integration server capable of orchestrating a chain of actions that help to achieve the Continuous Integration process (and not only) in an automated fashion.

Jenkins is entirely written in Java. Jenkins is a widely used application around the world that has around 300k installations and growing day by day.

It is a server-based application and requires a web server like Apache Tomcat. The reason Jenkins became so popular is that of its monitoring of repeated tasks which arise during the development of a project. For example, if your team is developing a project, Jenkins will continuously test your project builds and show you the errors in early stages of your development.

By using Jenkins, software companies can accelerate their software development process, as Jenkins can automate build and test at a rapid rate. Jenkins supports the complete development lifecycle of software from building, testing, documenting the software, deploying and other stages of a software development lifecycle.

### Conclusion
* In Continuous Integration, after a code commit, the software is built and tested immediately
* Jenkins is an open source Continuous Integration server capable of orchestrating a chain of actions
* Before Jenkins when all Developers had completed their assigned coding tasks, they used to commit their code all at same time. Later, Build is tested and deployed.
* After Jenkins the code is built and test as soon as Developer commits code. Jenkin will build and test code many times during the day
* By default, Jenkins comes with a limited set of features. If you want to integrate your Jenkins installation with version control tools like Git, then you need to install plugins related to Git
* The biggest pros of Jenkins is that it is managed by the community which holds public meetings and take inputs from the public for the development of Jenkins projects
* The biggest con of Jenkin is that Its interface is out dated and not user friendly compared to current UI trends.


## **I’ll show you how to create a CD process to make your app better from scratch.** ##

## Set Up Environment
1. [Docker](https://www.docker.com/), make sure Docker has been installed on your system, if not visit Docker website for installation guide.
2. [Jenkins](https://jenkins.io/), Jenkins has official image on docker hub but for this tutorial I'll use Blue Ocean Jenkins.
3. Ubuntu

#### Jenkins ####
To run Jenkins using Blue Ocean image from docker hub we need to run and store our data if we need to update image or restart container. So we need to map volume to host machine:
``` docker run -u root --rm -d -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkinsci/blueocean ```

#### Registry ####
The Docker Registry implementation for storing and distributing Docker images.
To run docker registry using docker image on docker hub run:
``` docker run -d -p 5000:5000 --restart always --name registry registry ```

#### Ubuntu ####
To push a new image to registry use next commands:
``` docker pull ubuntu ```
``` docker tag ubuntu localhost:5000/ubuntu ```
``` docker push localhost:5000/ubuntu ```

#### Create Jenkinsfile, Dockerfile, and Dockerfile.test ####

Jenkinsfile
```
node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t react-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-app --no-cache .'
        sh 'docker tag react-app localhost:5000/react-app'
        sh 'docker push localhost:5000/react-app'
        sh 'docker rmi -f react-app localhost:5000/react-app'
      }
    }
  }
  catch (err) {
    throw err
  }
}
```

Pull from registry
``` docker pull localhost:5000/react-app ```

``` docker run -d -p 3000:3000 --name ticketing-frontend localhost:5000/react-app:latest ```


### What we've done? ###
In this repository I created docker compose file for running Jenkins and Docker registry. I created Jenkinsfile and Dockerfile for testing and releasing our app.

1. Deploy Jenkins to Docker
2. Create local registry and use Ubuntu as operating system
3. Create Jenkins pipeline to build ReactJS
4. Pull from local registry to Docker
5. Run the ReactJS web
