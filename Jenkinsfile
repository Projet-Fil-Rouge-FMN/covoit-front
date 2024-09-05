pipeline {
    agent any

    tools {
        maven 'Maven 3.9.9'
    }

    stages {
        stage('Checkout') {
            steps {
                // Using branch specifier to ensure the correct branch is checked out.
                git branch: 'jenkins', url: 'https://github.com/Projet-Fil-Rouge-FMN/covoit-back.git'
            }
        }

        stage('Build') {
            steps {
                // Running Maven build with a more descriptive output.
                sh 'mvn clean install -DskipTests'
            }
        }

        stage('Test') {
            steps {
                // Running tests with Maven.
                sh 'mvn test'
            }
        }

    	stage('SonarQube Analysis') {
			steps {
				script {
				def mvnHome = tool 'Maven 3.9.9' 
				withSonarQubeEnv('SonarQC') {
					sh "${mvnHome}/bin/mvn clean verify sonar:sonar -Dsonar.projectKey=covoit -Dsonar.projectName='covoit'"
				}
 			}
		}
 	}
    }
    post {
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}