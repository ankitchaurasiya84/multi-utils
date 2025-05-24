pipeline {
  agent {
    docker {
      image 'node:18'   // Official Node.js Docker image
      args '-u root'    // Run as root user if needed
    }
  }

  environment {
    VERCEL_TOKEN = credentials('BwCKDa1GdR2WwcELIThVPSg1')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/ankitchaurasiya84/multi-utils.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy to Vercel') {
      steps {
        sh 'npx vercel --prod --token $VERCEL_TOKEN --confirm'
      }
    }
  }
}
