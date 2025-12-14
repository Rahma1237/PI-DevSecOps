pipeline {
  agent any
  environment {
    REGISTRY = 'docker.io/your-org'
    BACK_IMAGE = "${REGISTRY}/pi-backend:${env.BUILD_NUMBER}"
    FRONT_IMAGE = "${REGISTRY}/pi-frontend:${env.BUILD_NUMBER}"
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Backend: Test & Package') {
      steps {
        dir('back') {
          sh './mvnw -B test'
          sh './mvnw -B -DskipTests=false package'
        }
      }
    }

    stage('Frontend: Install, Test & Build') {
      steps {
        dir('front') {
          sh 'npm ci'
          sh 'npm run test:ci --silent'
          sh 'npm run build --if-present'
        }
      }
    }

    stage('Publish Test Results') {
      steps {
        junit 'back/target/surefire-reports/*.xml'
        junit 'front/junit.xml'
        archiveArtifacts artifacts: 'back/target/surefire-reports/*.xml, front/junit.xml', allowEmptyArchive: true
      }
    }

    stage('Build Docker Images') {
      steps {
        dir('back') { sh "docker build -t ${BACK_IMAGE} ." }
        dir('front') { sh "docker build -t ${FRONT_IMAGE} -f dockerfile ." }
      }
    }

    stage('Scan Images (Trivy)') {
      steps {
        // produce JSON reports
        sh "trivy image --no-progress --format json --output trivy-back.json ${BACK_IMAGE} || true"
        sh "trivy image --no-progress --format json --output trivy-front.json ${FRONT_IMAGE} || true"

        // fail pipeline if any CRITICAL vulnerabilities are found
        sh '''
          python3 - <<'PY'
import json,sys
def check(file):
    try:
        j=json.load(open(file))
    except Exception:
        return
    for res in j.get('Results', []):
        for v in res.get('Vulnerabilities') or []:
            if v.get('Severity') == 'CRITICAL':
                print(f"CRITICAL vuln found in {file}: {v.get('VulnerabilityID')}")
                sys.exit(2)

for f in ('trivy-back.json','trivy-front.json'):
    check(f)
PY
'''

        archiveArtifacts artifacts: 'trivy-*.json', fingerprint: true
      }
    }

    stage('Push Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
          sh "docker push ${BACK_IMAGE}"
          sh "docker push ${FRONT_IMAGE}"
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
          sh 'kubectl --kubeconfig=$KUBECONFIG apply -f k8s/'
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'back/target/*.jar, front/dist/**', allowEmptyArchive: true
      cleanWs()
    }
  }
}
