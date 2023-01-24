pipeline {
  agent {
      docker {
        image 'node:10-alpine'
        args '-p 3000:3000'
      }
  }
  stages {
    stage('Check Git Repo') {
      steps {
        git(url: 'https://github.com/HAlejandro88/react-CI-CD.git', branch: 'master')
      }
    }

    stage('Check node') {
      steps {
        sh 'node --version'
      }
    }

  }
}