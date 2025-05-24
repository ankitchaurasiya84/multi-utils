pipeline {
  agent any

  environment {
    VERCEL_TOKEN = credentials('BwCKDa1GdR2WwcELIThVPSg1')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/ankitchaurasiya84/multi-utils.git'
      }
    }

    stage('Build inside Docker') {
      steps {
        // Run Docker commands manually
        sh 'docker build -t multi-utils-react-app .'
        sh 'docker run --rm multi-utils-react-app npm run build'
      }
    }

    stage('Deploy to Vercel') {
      steps {
        sh 'npx vercel --prod --token $VERCEL_TOKEN --confirm'
      }
    }
  }
}
