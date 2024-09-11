pipeline {
    agent { 
        dockerfile {
            dir 'todo-list' 
        }
    } 

    triggers {
        pollSCM('H/1 * * * *')
    }
    
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}