pipeline {
    agent any

    options{
        AnsiColor('xterm')
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
}