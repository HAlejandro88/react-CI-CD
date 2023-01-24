pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:lts-alpine'
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