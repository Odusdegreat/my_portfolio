pipeline {
    agent any
    parameters {
        string(
            name: 'SPOTIFY_API',
            defaultValue: 'https://spotify-api-kappa-rouge.vercel.app',
            description: 'Base URL of the spotify-api Vercel project')
    }
    environment {
        NETLIFY_SITE_ID = 'daa01312-c6b5-490c-a943-a1125a12a7a6'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
        REACT_APP_EMAILJS_SERVICE_ID = credentials('emailjs-service-id')
        REACT_APP_EMAILJS_TEMPLATE_ID = credentials('emailjs-template-id')
        REACT_APP_EMAILJS_PUBLIC_KEY = credentials('emailjs-public-key')
        REACT_APP_SPOTIFY_API = "${SPOTIFY_API}"
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm ci
                    npm run build
                    ls -la                    
                '''
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli               
                    node_modules/.bin/netlify --version
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
                '''
            }
        }
    }
}