# Infrastructure

## Components and Setup
* Linode - Ubuntu 20.04 VM
  * SSH into instance
  * Install kubectl
  * Install MicroK8s
    * Enable add-ons dns metrics-server
    * Create kubectl config: `microk8s config > .kube/config`
* CloudFlare
  * Find and purchase domain with Google Domains
  * In Google Domains, disable DNSSEC and wait for period of time before setting up CloudFlare name servers
  * Setup cloudflared (tunneling agent) and configure endpoints to use nodeports
  * Make required changes to Cloudflare DNS settings to utilize tunnel
  * Setup cloudflared to run in background and restart
* Pulumi
  * Create new Pulumi K8s project
  * Login to Pulumi service with saved access token and `pulumi login`
* DockerHub - storing images in public repositories for now, but could use private and then setup authentication with K8s
