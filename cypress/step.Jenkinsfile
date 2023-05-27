pipeline {
    agent any

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Download'){
            steps{
                git branch: 'Mochawesome', url: 'https://github.com/Dionisio1/pessoal_starter_qa.git'
            }
        }
        stage('Install'){
            steps{
                bat 'npm i' 
            }
        }
        stage('Tests'){
            steps{
                bat 'npm run cy:run:reg:chrome'
            }
        }
        
    }
    post{
        always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress\\reports\\html\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }    
}