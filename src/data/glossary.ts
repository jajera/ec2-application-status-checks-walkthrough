export const glossary: Record<string, string> = {
  aggregation:
    "Whether a check contributes to instance-level overall application status. included can drive Auto Scaling on impaired; excluded still reports per-check status.",
  alb: "Application Load Balancer — steers traffic with its own target-group health checks. Complementary to application status checks, which decide whether the instance should exist.",
  "application-status-check":
    "Opt-in EC2 HTTP or HTTPS probe (every 60 seconds, HTTP/2) from a managed ENI in your VPC. Reports next to system, instance, and attached EBS status checks. Port is 1–65535, not only 80/443.",
  "auto-scaling":
    "Amazon EC2 Auto Scaling. With aggregation included, the group replaces instances whose overall application status is impaired — no extra HealthCheckType.",
  "aws-managed-path":
    "Default network path: omit --health-check-paths and AWS chooses the source subnet and security group for the managed ENI.",
  "customer-managed-path":
    "You pass --health-check-paths with source and destination subnet plus security group for the health-check ENI.",
  excluded:
    "Aggregation setting: the check runs and reports individual status but does not affect overall application status or Auto Scaling.",
  "http-2":
    "HTTP/2 — the protocol the probe uses. HTTP/1.1-only listeners often fail even when curl over HTTP/1.1 succeeds. HTTPS probes do not validate certificates and do not follow redirects.",
  included:
    "Default aggregation setting: the check contributes to overall application status. impaired overall status can replace Auto Scaling instances.",
  "initialization-grace-period":
    "Seconds to wait after launch before the probe evaluates (default 300, max 600). Too short causes Auto Scaling thrash.",
  "managed-eni":
    "AWS-created elastic network interface that originates health-check traffic. One per source subnet × source security group. Counts against ENIs per VPC, not per-instance ENI limits.",
  "overall-status":
    "Instance-level application status from included checks: ok, impaired, initializing, insufficient-data, not-applicable, or suppressed. Auto Scaling acts only on impaired.",
  suppression:
    "Pause evaluation on an instance for a duration so deploys and reboots do not look impaired.",
};
