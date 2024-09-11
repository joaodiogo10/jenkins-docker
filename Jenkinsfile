pipeline {
  agent any 

  triggers {
    pollSCM('H/5 * * * *')
  }
    
  stages {
    stage("verify tooling") {
      steps {
        sh '''
          docker version
          docker info
          docker compose version 
        '''
      }
    }
    stage('Prune Docker data') {
      steps {
        sh 'docker system prune -a --volumes -f'
      }
    }
    stage('Start container') {
      steps {
        sh '''
          cd todo-list
          docker compose up -d --no-color --wait
          docker compose ps
        '''
      }
    }
  }
  post {
    always {
        sh '''
          cd todo-list
          docker compose down --remove-orphans -v
          docker compose ps
        '''
    }
  }
}