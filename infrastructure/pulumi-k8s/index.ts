import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const image = config.require("image");
const appName = "justink8s-app";
const appLabels = { app: "justink8s-app" };
const deployment = new k8s.apps.v1.Deployment(appName, {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 2,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: appName, image: image }] }
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
            nodePort: 32100
        }],
        selector: appLabels
    }
});
