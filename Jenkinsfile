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
               sh "docker-compose up --env=${DB_DATA_USR} --env=${DB_DATA_PSW} -d --wait --build"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}