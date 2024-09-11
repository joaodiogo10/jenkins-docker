pipeline {
    agent { 
            dockerfile {
                dir 'todo-list' 
            }
        }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}