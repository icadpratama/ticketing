# [Ticketing - Lawencon Ticketing Support System Admin Template based on Ant Framework](https://www.lawencon.com/ "Lawencon")
Ticketing is a react redux based admin template.

# Installation

**Note: Ticketing is using [yarn](https://yarnpkg.com/en/docs/install) instead npm**

Installing all the dependencies of project, run following command:

``` $yarn ```


#### Jenkins ####

``` docker run -u root --rm -d -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkinsci/blueocean ```

#### Registry ####
``` docker run -d -p 5000:5000 --restart always --name registry registry ```

#### Ubuntu ####
```
docker pull ubuntu
docker tag ubuntu localhost:5000/ubuntu
docker push localhost:5000/ubuntu
```

Create Jenkinsfile, Dockerfile, and Dockerfile.test
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