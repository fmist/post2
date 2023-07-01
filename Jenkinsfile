pipeline {
    agent any
   environment {
           PATH = "$PATH:/usr/local/bin"
       }
    tools {
        gradle "gradle"
    }

    stages {

        stage('Get project') {
            steps {
                git 'https://github.com/fmist/post2.git'
            }
        }

        stage('Build') {
            steps {
                sh "gradle clean build -D skipTests"
            }
        }

        stage('Deploy') {
             environment {
                DB_DATA = credentials('MYSQL_DATABASE')
             }
             steps {
               sh "USER=${DB_DATA_USR} PASSWORD=${DB_DATA_PSW} docker-compose up -d --wait --build"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}