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
               sh "docker-compose up --USER=${DB_DATA_USER} --PASSWORD=${DB_DATA_PASSWORD} -d --wait --build"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}