import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const appName = "justink8s-app";
const appLabels = { app: "justink8s-app" };
const deployment = new k8s.apps.v1.Deployment(appName, {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: appName, image: "jdubedition/justink8s-app:2021.04.18.1" }] }
        }
    }
});

const frontend = new k8s.core.v1.Service(appName, {
    metadata: { labels: deployment.spec.template.metadata.labels },
    spec: {
        type: "NodePort",
        ports: [{
            port: 8080,
            targetPort: 80,
            protocol: "TCP",
            nodePort: 32000
        }],
        selector: appLabels
    }
});
