pipeline {
    agent any
   environment {
           PATH = "$PATH:/usr/local/bin"
       }
    tools {
        gradle "gradle"
    }

    stages {

        stage('Get project from github') {
            steps {
                git 'https://github.com/fmist/post2.git'
            }
        }

        stage('Build project by gradle') {
            steps {
                sh "gradle clean build"
            }
        }

        stage('deploy') {
             steps {
               sh "docker-compose up -d --wait --build"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}