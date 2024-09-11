pipeline {
    agent { dockerfile 'todo-list/Dockerfile' }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}