pipeline {
    agent any

    environment {
        IMAGE_NAME = "hospital-app"
        CONTAINER_NAME = "hospital-container"
    }

    stages {
        stage('Clone Code') {
            steps {
                // Explicitly specify branch main
                git branch: 'main', url: 'https://github.com/Shreya281105/hospital_management.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ./backend"
            }
        }

        stage('Stop Old Container') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Container') {
            steps {
                sh "docker run -d -p 5000:5000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}