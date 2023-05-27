node {
    stage('Download'){
        git branch: 'Mochawesome', url: 'https://github.com/Dionisio1/pessoal_starter_qa.git'
    }
    stage('Install'){
        bat 'npm i' 
    }
    stage('Tests'){
        bat 'npm run cy:run:reg:chrome'
    }        
}