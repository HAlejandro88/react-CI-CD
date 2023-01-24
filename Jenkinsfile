pipeline {
  agent any
  stages {
    stage('Check Git Repo') {
      steps {
        git(url: 'https://github.com/HAlejandro88/react-CI-CD.git', branch: 'master')
      }
    }

    stage('Check node') {
      steps {
        sh 'ls -la'
      }
    }

  }
}