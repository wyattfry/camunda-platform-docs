function optimizeLink(label, href) {
  return {
    type: "link",
    label: label,
    href: `/optimize/next/${href}`,
  };
}

module.exports = {
  Guides: [
    {
      "Getting started": [
        "guides/introduction-to-camunda",
        "guides/create-account",
        "guides/model-your-first-process",
        "guides/orchestrate-human-tasks",
        "guides/orchestrate-api-endpoints",
        "guides/orchestrate-microservices",
      ],
    },
    {
      "Next steps": [
        "guides/create-cluster",
        "guides/setting-up-development-project",
        "guides/setup-client-connection-credentials",
        "guides/automating-a-process-using-bpmn",
        "guides/configuring-out-of-the-box-connectors",
        "guides/create-decision-tables-using-dmn",
        "guides/utilizing-forms",
        "guides/improve-processes-with-optimize",
        "guides/message-correlation",
      ],
    },
    {
      "Update guide": [
        "guides/update-guide/introduction",
        "guides/update-guide/810-to-820",
        "guides/update-guide/800-to-810",
        "guides/update-guide/130-to-800",
        "guides/update-guide/120-to-130",
        "guides/update-guide/110-to-120",
        "guides/update-guide/100-to-110",
        "guides/update-guide/026-to-100",
        {
          Connectors: [
            "guides/update-guide/connectors/introduction",
            "guides/update-guide/connectors/010-to-020",
            "guides/update-guide/connectors/020-to-030",
            "guides/update-guide/connectors/030-to-040",
            "guides/update-guide/connectors/040-to-050",
            "guides/update-guide/connectors/050-to-060",
            "guides/update-guide/connectors/060-to-070",
            "guides/update-guide/connectors/070-to-080",
            "guides/update-guide/connectors/080-to-090",
            "guides/update-guide/connectors/090-to-0100",
            "guides/update-guide/connectors/0100-to-0110",
          ],
        },
        {
          Elasticsearch: ["guides/update-guide/elasticsearch/7-to-8"],
        },
      ],
    },
    "guides/migrating-from-cawemo",
    "guides/migrating-from-camunda-platform-7",
  ],
  Components: [
    "components/components-overview",
    {
      Concepts: [
        "components/concepts/what-is-camunda-platform-8",
        "components/concepts/clusters",
        "components/concepts/processes",
        "components/concepts/job-workers",
        "components/concepts/process-instance-creation",
        "components/concepts/messages",
        "components/concepts/signals",
        "components/concepts/incidents",
        "components/concepts/variables",
        "components/concepts/expressions",
        "components/concepts/workflow-patterns",
        "components/concepts/process-instance-modification",
        "components/concepts/data-retention",
        "components/concepts/outbound-connectors-job-workers",
        "components/concepts/backups",
      ],
      Console: [
        "components/console/introduction-to-console",
        {
          "Manage your organization": [
            "components/console/manage-organization/organization-settings",
            "components/console/manage-organization/manage-users",
            "components/console/manage-organization/view-organization-activity",
            "components/console/manage-organization/usage-history",
            "components/console/manage-organization/switch-organization",
            "components/console/manage-organization/external-sso",
            "components/console/manage-organization/delete-account",
          ],
        },
        {
          "Manage clusters": [
            "components/console/manage-clusters/create-cluster",
            "components/console/manage-clusters/rename-cluster",
            "components/console/manage-clusters/delete-cluster",
            "components/console/manage-clusters/manage-api-clients",
            "components/console/manage-clusters/manage-alerts",
            "components/console/manage-clusters/manage-ip-whitelists",
            "components/console/manage-clusters/manage-secrets",
          ],
        },
        {
          "Manage your plan": [
            "components/console/manage-plan/available-plans",
            "components/console/manage-plan/upgrade-to-professional-plan",
            "components/console/manage-plan/update-billing-reservations",
            "components/console/manage-plan/update-creditcard",
            "components/console/manage-plan/retrieve-invoices-or-update-billing-info",
            "components/console/manage-plan/cancel-professional-subscription",
          ],
        },
        {
          Troubleshooting: [
            "components/console/console-troubleshooting/common-pitfalls",
            "components/console/console-troubleshooting/feedback-and-support",
          ],
        },
      ],
      Modeler: [
        "components/modeler/about-modeler",
        {
          "Web Modeler": [
            "components/modeler/web-modeler/new-web-modeler",
            "components/modeler/web-modeler/launch-cloud-modeler",
            "components/modeler/web-modeler/model-your-first-diagram",
            "components/modeler/web-modeler/import-diagram",
            "components/modeler/web-modeler/fix-problems-in-your-diagram",
            "components/modeler/web-modeler/run-or-publish-your-process",
            {
              Collaboration: [
                "components/modeler/web-modeler/collaboration",
                "components/modeler/web-modeler/collaborate-with-modes",
                "components/modeler/web-modeler/design-your-process",
                "components/modeler/web-modeler/implement-your-process",
                "components/modeler/web-modeler/play-your-process",
              ],
            },
            "components/modeler/web-modeler/milestones",
            "components/modeler/web-modeler/token-simulation",
            {
              "Advanced modeling": [
                "components/modeler/web-modeler/advanced-modeling/call-activity-linking",
                "components/modeler/web-modeler/advanced-modeling/business-rule-task-linking",
                "components/modeler/web-modeler/advanced-modeling/publish-public-processes",
              ],
            },
          ],
        },
        {
          "Desktop Modeler": [
            "components/modeler/desktop-modeler/index",
            "components/modeler/desktop-modeler/install-the-modeler",
            "components/modeler/desktop-modeler/model-your-first-diagram",
            "components/modeler/desktop-modeler/connect-to-camunda-cloud",
            "components/modeler/desktop-modeler/start-instance",
            {
              "Element templates": [
                "components/modeler/desktop-modeler/element-templates/about-templates",
                "components/modeler/desktop-modeler/element-templates/configuring-templates",
                "components/modeler/desktop-modeler/element-templates/using-templates",
                "components/modeler/desktop-modeler/element-templates/defining-templates",
                "components/modeler/desktop-modeler/element-templates/additional-resources",
                {
                  "Camunda Platform 7 element templates": [
                    "components/modeler/desktop-modeler/element-templates/camunda-platform-7/c7-about-templates",
                    "components/modeler/desktop-modeler/element-templates/camunda-platform-7/c7-configuring-templates",
                    "components/modeler/desktop-modeler/element-templates/camunda-platform-7/c7-using-templates",
                    "components/modeler/desktop-modeler/element-templates/camunda-platform-7/c7-defining-templates",
                    "components/modeler/desktop-modeler/element-templates/camunda-platform-7/c7-additional-resources",
                  ],
                },
              ],
            },
            {
              "Additional configuration": [
                "components/modeler/desktop-modeler/flags/flags",
                "components/modeler/desktop-modeler/plugins/plugins",
                "components/modeler/desktop-modeler/custom-lint-rules/custom-lint-rules",
                "components/modeler/desktop-modeler/search-paths/search-paths",
                "components/modeler/desktop-modeler/telemetry/telemetry",
              ],
            },
            "components/modeler/desktop-modeler/troubleshooting",
          ],
        },
        {
          BPMN: [
            "components/modeler/bpmn/modeler-bpmn",
            "components/modeler/bpmn/bpmn-primer",
            "components/modeler/bpmn/bpmn-coverage",
            "components/modeler/bpmn/data-flow",
            {
              Tasks: [
                "components/modeler/bpmn/tasks",
                "components/modeler/bpmn/service-tasks/service-tasks",
                "components/modeler/bpmn/user-tasks/user-tasks",
                "components/modeler/bpmn/receive-tasks/receive-tasks",
                "components/modeler/bpmn/business-rule-tasks/business-rule-tasks",
                "components/modeler/bpmn/script-tasks/script-tasks",
                "components/modeler/bpmn/send-tasks/send-tasks",
                "components/modeler/bpmn/manual-tasks/manual-tasks",
                "components/modeler/bpmn/undefined-tasks/undefined-tasks",
              ],
            },
            {
              Gateways: [
                "components/modeler/bpmn/gateways",
                "components/modeler/bpmn/exclusive-gateways/exclusive-gateways",
                "components/modeler/bpmn/parallel-gateways/parallel-gateways",
                "components/modeler/bpmn/event-based-gateways/event-based-gateways",
                "components/modeler/bpmn/inclusive-gateways/inclusive-gateways",
              ],
            },
            {
              Events: [
                "components/modeler/bpmn/events",
                "components/modeler/bpmn/none-events/none-events",
                "components/modeler/bpmn/message-events/message-events",
                "components/modeler/bpmn/signal-events/signal-events",
                "components/modeler/bpmn/timer-events/timer-events",
                "components/modeler/bpmn/error-events/error-events",
                "components/modeler/bpmn/escalation-events/escalation-events",
                "components/modeler/bpmn/terminate-events/terminate-events",
                "components/modeler/bpmn/link-events/link-events",
              ],
            },
            {
              Subprocesses: [
                "components/modeler/bpmn/subprocesses",
                "components/modeler/bpmn/embedded-subprocesses/embedded-subprocesses",
                "components/modeler/bpmn/call-activities/call-activities",
                "components/modeler/bpmn/event-subprocesses/event-subprocesses",
              ],
            },
            {
              Markers: [
                "components/modeler/bpmn/markers",
                "components/modeler/bpmn/multi-instance/multi-instance",
              ],
            },
          ],
        },
        require("./docs/components/modeler/dmn/sidebar-schema"),
        require("./docs/components/modeler/feel/sidebar-schema"),
        require("./docs/components/modeler/forms/sidebar-schema"),
        "components/modeler/data-handling",
      ],
      Connectors: [
        "components/connectors/introduction-to-connectors",
        "components/connectors/connector-types",
        {
          "Use Connectors": [
            "components/connectors/use-connectors/index",
            "components/connectors/use-connectors/inbound",
            "components/connectors/use-connectors/outbound",
          ],
        },
        {
          "Out-of-the-box Connectors": [
            "components/connectors/out-of-the-box-connectors/available-connectors-overview",
            "components/connectors/out-of-the-box-connectors/asana",
            "components/connectors/out-of-the-box-connectors/automation-anywhere",
            {
              AWS: [
                "components/connectors/out-of-the-box-connectors/aws-dynamodb",
                "components/connectors/out-of-the-box-connectors/aws-eventbridge",
                "components/connectors/out-of-the-box-connectors/aws-lambda",
                "components/connectors/out-of-the-box-connectors/aws-sns",
                "components/connectors/out-of-the-box-connectors/aws-sns-inbound",
                "components/connectors/out-of-the-box-connectors/aws-sqs",
                "components/connectors/out-of-the-box-connectors/aws-sqs-inbound",
              ],
            },
            "components/connectors/out-of-the-box-connectors/blueprism",
            "components/connectors/out-of-the-box-connectors/easy-post",
            {
              GitHub: [
                "components/connectors/out-of-the-box-connectors/github",
                "components/connectors/out-of-the-box-connectors/github-webhook",
              ],
            },
            "components/connectors/out-of-the-box-connectors/gitlab",
            {
              Google: [
                "components/connectors/out-of-the-box-connectors/googledrive",
                "components/connectors/out-of-the-box-connectors/google-maps-platform",
                "components/connectors/out-of-the-box-connectors/google-sheets",
              ],
            },
            {
              Kafka: [
                "components/connectors/out-of-the-box-connectors/kafka",
                "components/connectors/out-of-the-box-connectors/kafka-inbound",
              ],
            },
            "components/connectors/out-of-the-box-connectors/microsoft-teams",
            "components/connectors/out-of-the-box-connectors/openai",
            "components/connectors/out-of-the-box-connectors/operate",
            "components/connectors/out-of-the-box-connectors/power-automate",
            {
              RabbitMQ: [
                "components/connectors/out-of-the-box-connectors/rabbitmq",
                "components/connectors/out-of-the-box-connectors/rabbitmq-inbound",
              ],
            },
            {
              Slack: [
                "components/connectors/out-of-the-box-connectors/slack",
                "components/connectors/out-of-the-box-connectors/slack-inbound",
              ],
            },
            "components/connectors/out-of-the-box-connectors/sendgrid",
            {
              Twilio: [
                "components/connectors/out-of-the-box-connectors/twilio",
                "components/connectors/out-of-the-box-connectors/twilio-webhook",
              ],
            },
            "components/connectors/out-of-the-box-connectors/uipath",
          ],
        },
        {
          "Protocol Connectors": [
            "components/connectors/protocol/rest",
            "components/connectors/protocol/graphql",
            "components/connectors/protocol/http-webhook",
          ],
        },
        "components/connectors/manage-connector-templates",
        {
          "Building custom Connectors": [
            "components/connectors/custom-built-connectors/connector-sdk",
            "components/connectors/custom-built-connectors/connector-templates",
          ],
        },
      ],
      Zeebe: [
        "components/zeebe/zeebe-overview",
        {
          "Technical concepts": [
            "components/zeebe/technical-concepts/technical-concepts-overview",
            "components/zeebe/technical-concepts/architecture",
            "components/zeebe/technical-concepts/clustering",
            "components/zeebe/technical-concepts/partitions",
            "components/zeebe/technical-concepts/internal-processing",
            "components/zeebe/technical-concepts/process-lifecycles",
            "components/zeebe/technical-concepts/protocols",
          ],
        },
      ],
      Operate: [
        "components/operate/operate-introduction",
        {
          "User guide": [
            "components/operate/userguide/basic-operate-navigation",
            "components/operate/userguide/resolve-incidents-update-variables",
            "components/operate/userguide/selections-operations",
            "components/operate/userguide/delete-finished-instances",
            "components/operate/userguide/operate-feedback-and-questions",
            "components/operate/userguide/process-instance-modification",
          ],
        },
      ],
      Tasklist: [
        "components/tasklist/introduction-to-tasklist",
        {
          "User guide": [
            "components/tasklist/userguide/using-tasklist",
            "components/tasklist/userguide/starting-processes",
            "components/tasklist/userguide/updating-tasklist-cloud",
          ],
        },
      ],
      Optimize: [
        optimizeLink("What is Optimize?", "components/what-is-optimize/"),
        {
          "User guide": [
            optimizeLink(
              "Collections, dashboards, and reports",
              "components/userguide/collections-dashboards-reports/"
            ),
            optimizeLink(
              "User permissions",
              "components/userguide/user-permissions/"
            ),
            optimizeLink("Data sources", "components/userguide/data-sources/"),
            {
              Dashboards: [
                optimizeLink(
                  "Creating dashboards",
                  "components/userguide/creating-dashboards/"
                ),
                optimizeLink("Edit mode", "components/userguide/edit-mode/"),
                optimizeLink("View mode", "components/userguide/view-mode/"),
              ],
            },
            {
              "Dashboards maintained by Camunda": [
                optimizeLink(
                  "Process dashboards",
                  "components/userguide/process-dashboards/"
                ),
                optimizeLink(
                  "Instant preview dashboards",
                  "components/userguide/instant-preview-dashboards/"
                ),
              ],
            },

            optimizeLink(
              "Creating reports",
              "components/userguide/creating-reports/"
            ),
            optimizeLink(
              "Combined process reports",
              "components/userguide/combined-process-reports/"
            ),
            {
              "Process analysis": [
                optimizeLink(
                  "Overview",
                  "components/userguide/process-analysis/process-analysis-overview/"
                ),
                optimizeLink(
                  "Outlier analysis",
                  "components/userguide/process-analysis/outlier-analysis/"
                ),
                optimizeLink(
                  "Branch analysis",
                  "components/userguide/process-analysis/branch-analysis/"
                ),
                {
                  "Report analysis": [
                    optimizeLink(
                      "Report process analysis",
                      "components/userguide/process-analysis/report-analysis/overview/"
                    ),
                    {
                      "Edit mode": [
                        optimizeLink(
                          "Overview",
                          "components/userguide/process-analysis/report-analysis/edit-mode/"
                        ),
                        optimizeLink(
                          "Select process definitions",
                          "components/userguide/process-analysis/report-analysis/select-process-definitions/"
                        ),
                        optimizeLink(
                          "Define reports",
                          "components/userguide/process-analysis/report-analysis/define-reports/"
                        ),
                        optimizeLink(
                          "Measures",
                          "components/userguide/process-analysis/report-analysis/measures/"
                        ),
                        optimizeLink(
                          "Compare target values",
                          "components/userguide/process-analysis/report-analysis/compare-target-values/"
                        ),
                        optimizeLink(
                          "Process instance parts",
                          "components/userguide/process-analysis/report-analysis/process-instance-parts/"
                        ),
                        optimizeLink(
                          "Configure reports",
                          "components/userguide/process-analysis/report-analysis/configure-reports/"
                        ),
                      ],
                    },
                    optimizeLink(
                      "View mode",
                      "components/userguide/process-analysis/report-analysis/view-mode/"
                    ),
                  ],
                },
                {
                  Filters: [
                    optimizeLink(
                      "Overview",
                      "components/userguide/process-analysis/filters/"
                    ),
                    optimizeLink(
                      "Metadata filters",
                      "components/userguide/process-analysis/metadata-filters/"
                    ),
                    optimizeLink(
                      "Instance state filters",
                      "components/userguide/process-analysis/instance-state-filters/"
                    ),
                    optimizeLink(
                      "Flow node filters",
                      "components/userguide/process-analysis/flow-node-filters/"
                    ),
                    optimizeLink(
                      "Process instance filters",
                      "components/userguide/process-analysis/process-instance-filters/"
                    ),
                    optimizeLink(
                      "Variable filters",
                      "components/userguide/process-analysis/variable-filters/"
                    ),
                  ],
                },
              ],
            },
            {
              "Decision analysis": [
                optimizeLink(
                  "Overview",
                  "components/userguide/decision-analysis/decision-analysis-overview/"
                ),
                optimizeLink(
                  "Single report",
                  "components/userguide/decision-analysis/decision-report/"
                ),
                optimizeLink(
                  "Filters",
                  "components/userguide/decision-analysis/decision-filter/"
                ),
              ],
            },
            {
              "Additional features": [
                optimizeLink(
                  "Alerts",
                  "components/userguide/additional-features/alerts/"
                ),
                optimizeLink(
                  "Event-based processes",
                  "components/userguide/additional-features/event-based-processes/"
                ),
                optimizeLink(
                  "Export and import",
                  "components/userguide/additional-features/export-import/"
                ),
                optimizeLink(
                  "Footer",
                  "components/userguide/additional-features/footer/"
                ),
                optimizeLink(
                  "Variable labeling",
                  "components/userguide/additional-features/variable-labeling/"
                ),
                optimizeLink(
                  "Process variants comparison",
                  "components/userguide/additional-features/process-variants-comparison/"
                ),
                optimizeLink(
                  "Machine learning-ready data set",
                  "components/userguide/additional-features/ml-dataset/"
                ),
              ],
            },
          ],
        },
      ],
      "Best Practices": [
        "components/best-practices/best-practices-overview",
        {
          "Project management": [
            "components/best-practices/management/following-the-customer-success-path",
            "components/best-practices/management/doing-a-proper-poc",
          ],
          Architecture: [
            "components/best-practices/architecture/deciding-about-your-stack",
            "components/best-practices/architecture/sizing-your-environment",
            "components/best-practices/architecture/understanding-human-tasks-management",
          ],
          Development: [
            "components/best-practices/development/connecting-the-workflow-engine-with-your-world",
            "components/best-practices/development/service-integration-patterns",
            "components/best-practices/development/writing-good-workers",
            "components/best-practices/development/dealing-with-problems-and-exceptions",
            "components/best-practices/development/handling-data-in-processes",
            "components/best-practices/development/routing-events-to-processes",
            "components/best-practices/development/testing-process-definitions",
          ],
          Modeling: [
            "components/best-practices/modeling/creating-readable-process-models",
            "components/best-practices/modeling/naming-bpmn-elements",
            "components/best-practices/modeling/naming-technically-relevant-ids",
            "components/best-practices/modeling/modeling-beyond-the-happy-path",
            "components/best-practices/modeling/modeling-with-situation-patterns",
            "components/best-practices/modeling/building-flexibility-into-bpmn-models",
            "components/best-practices/modeling/choosing-the-dmn-hit-policy",
          ],
          Operations: [
            "components/best-practices/operations/versioning-process-definitions",
            "components/best-practices/operations/reporting-about-processes",
          ],
          "Camunda 7 specific": [
            "components/best-practices/architecture/deciding-about-your-stack-c7",
            "components/best-practices/architecture/sizing-your-environment-c7",
            "components/best-practices/development/invoking-services-from-the-process-c7",
            "components/best-practices/development/understanding-transaction-handling-c7",
            "components/best-practices/operations/operating-camunda-c7",
            "components/best-practices/operations/performance-tuning-camunda-c7",
            "components/best-practices/operations/securing-camunda-c7",
            "components/best-practices/architecture/extending-human-task-management-c7",
          ],
        },
      ],
    },
  ],
  "APIs & Tools": [
    "apis-tools/working-with-apis-tools",
    {
      APIs: [
        "apis-tools/public-api",
        "apis-tools/console-api-reference",
        require("./docs/apis-tools/operate-api/sidebar-schema"),
        {
          "Optimize API (REST)": [
            optimizeLink(
              "Authorization",
              "apis-tools/optimize-api/optimize-api-authorization/"
            ),
            {
              Configuration: [
                optimizeLink(
                  "Enable sharing",
                  "apis-tools/optimize-api/configuration/enable-sharing/"
                ),
                optimizeLink(
                  "Disable sharing",
                  "apis-tools/optimize-api/configuration/disable-sharing/"
                ),
              ],
            },
            {
              Dashboard: [
                optimizeLink(
                  "Get dashboard IDs",
                  "apis-tools/optimize-api/dashboard/get-dashboard-ids/"
                ),
                optimizeLink(
                  "Delete dashboards",
                  "apis-tools/optimize-api/dashboard/delete-dashboard/"
                ),
                optimizeLink(
                  "Export dashboard definitions",
                  "apis-tools/optimize-api/dashboard/export-dashboard-definitions/"
                ),
              ],
            },
            {
              Report: [
                optimizeLink(
                  "Get report IDs",
                  "apis-tools/optimize-api/report/get-report-ids/"
                ),
                optimizeLink(
                  "Delete reports",
                  "apis-tools/optimize-api/report/delete-report/"
                ),
                optimizeLink(
                  "Export report definitions",
                  "apis-tools/optimize-api/report/export-report-definitions/"
                ),
                optimizeLink(
                  "Export report result data",
                  "apis-tools/optimize-api/report/get-data-export/"
                ),
              ],
            },

            optimizeLink(
              "Event ingestion",
              "apis-tools/optimize-api/event-ingestion/"
            ),
            optimizeLink(
              "External variable ingestion",
              "apis-tools/optimize-api/external-variable-ingestion/"
            ),
            optimizeLink(
              "Health readiness",
              "apis-tools/optimize-api/health-readiness/"
            ),
            optimizeLink(
              "Import entities",
              "apis-tools/optimize-api/import-entities/"
            ),
            optimizeLink(
              "Variable labeling",
              "apis-tools/optimize-api/variable-labeling/"
            ),
          ],
        },
        require("./docs/apis-tools/tasklist-api/sidebar-schema"),
        require("./docs/apis-tools/tasklist-api-rest/sidebar-schema"),
        "apis-tools/web-modeler-api/index",
        "apis-tools/grpc",
      ],
    },
    {
      Clients: [
        {
          "CLI client": [
            "apis-tools/cli-client/index",
            "apis-tools/cli-client/cli-get-started",
          ],
        },
        {
          "Go client": [
            "apis-tools/go-client/index",
            "apis-tools/go-client/go-get-started",
          ],
        },
        {
          "Java client": [
            "apis-tools/java-client/index",
            "apis-tools/java-client/job-worker",
            "apis-tools/java-client/logging",
            "apis-tools/java-client/zeebe-process-test",
            {
              Examples: [
                "apis-tools/java-client-examples/index",
                "apis-tools/java-client-examples/process-deploy",
                "apis-tools/java-client-examples/process-instance-create",
                "apis-tools/java-client-examples/process-instance-create-nonblocking",
                "apis-tools/java-client-examples/process-instance-create-with-result",
                "apis-tools/java-client-examples/decision-evaluate",
                "apis-tools/java-client-examples/job-worker-open",
                "apis-tools/java-client-examples/data-pojo",
                "apis-tools/java-client-examples/cluster-topology-request",
              ],
            },
          ],
        },
        {
          "Community tools": [
            "apis-tools/community-clients/index",
            "apis-tools/community-clients/c-sharp",
            "apis-tools/community-clients/javascript",
            "apis-tools/community-clients/micronaut",
            "apis-tools/community-clients/python",
            "apis-tools/community-clients/ruby",
            "apis-tools/community-clients/rust",
            "apis-tools/community-clients/spring",
            "apis-tools/community-clients/quarkus",
          ],
        },
        "apis-tools/build-your-own-client",
      ],
    },
  ],

  Reference: [
    "reference/overview",
    "reference/glossary",
    "reference/announcements",
    "reference/release-notes",
    "reference/licenses",
    "reference/notices",
    "reference/status",
    "reference/release-policy",
    "reference/early-access",
    "reference/supported-environments",
    "reference/regions",
    "reference/dependencies",
  ],
  "Self-Managed": [
    "self-managed/about-self-managed",
    {
      Architecture: ["self-managed/platform-architecture/overview"],
      Installation: [
        "self-managed/platform-deployment/overview",
        {
          "Helm/Kubernetes": [
            "self-managed/platform-deployment/helm-kubernetes/overview",
            "self-managed/platform-deployment/helm-kubernetes/deploy",
            "self-managed/platform-deployment/helm-kubernetes/upgrade",
            {
              type: "category",
              label: "Platforms",
              link: {
                type: "doc",
                id: "self-managed/platform-deployment/helm-kubernetes/platforms/platforms",
              },
              items: [
                "self-managed/platform-deployment/helm-kubernetes/platforms/amazon-eks",
                "self-managed/platform-deployment/helm-kubernetes/platforms/microsoft-aks",
                "self-managed/platform-deployment/helm-kubernetes/platforms/google-gke",
                "self-managed/platform-deployment/helm-kubernetes/platforms/redhat-openshift",
              ],
            },
            {
              type: "category",
              label: "Guides",
              link: {
                type: "doc",
                id: "self-managed/platform-deployment/helm-kubernetes/guides/guides",
              },
              items: [
                "self-managed/platform-deployment/helm-kubernetes/guides/local-kubernetes-cluster",
                "self-managed/platform-deployment/helm-kubernetes/guides/accessing-components-without-ingress",
                "self-managed/platform-deployment/helm-kubernetes/guides/ingress-setup",
                "self-managed/platform-deployment/helm-kubernetes/guides/using-existing-keycloak",
                "self-managed/platform-deployment/helm-kubernetes/guides/air-gapped-installation",
              ],
            },
            "self-managed/platform-deployment/troubleshooting",
          ],
        },
        "self-managed/platform-deployment/docker",
        "self-managed/platform-deployment/manual",
      ],
    },
    {
      Concepts: [
        {
          "Access control": [
            "self-managed/concepts/access-control/applications",
            "self-managed/concepts/access-control/apis",
            "self-managed/concepts/access-control/groups",
            "self-managed/concepts/access-control/permissions",
            "self-managed/concepts/access-control/resource-authorizations",
            "self-managed/concepts/access-control/roles",
            "self-managed/concepts/access-control/users",
          ],
          Authentication: ["self-managed/concepts/authentication/m2m-tokens"],
        },
        "self-managed/concepts/exporters",
      ],
    },
    {
      Zeebe: [
        "self-managed/zeebe-deployment/zeebe-installation",
        {
          "Zeebe Gateway": [
            "self-managed/zeebe-deployment/zeebe-gateway/overview",
            "self-managed/zeebe-deployment/zeebe-gateway/interceptors",
          ],
        },
        {
          Configuration: [
            "self-managed/zeebe-deployment/configuration/configuration",
            "self-managed/zeebe-deployment/configuration/logging",
            "self-managed/zeebe-deployment/configuration/gateway-health-probes",
            "self-managed/zeebe-deployment/configuration/environment-variables",
            "self-managed/zeebe-deployment/configuration/fixed-partitioning",
            "self-managed/zeebe-deployment/configuration/priority-election",
            "self-managed/zeebe-deployment/configuration/broker-config",
            "self-managed/zeebe-deployment/configuration/gateway-config",
          ],
        },
        {
          Security: [
            "self-managed/zeebe-deployment/security/security",
            "self-managed/zeebe-deployment/security/client-authorization",
            "self-managed/zeebe-deployment/security/secure-client-communication",
            "self-managed/zeebe-deployment/security/secure-cluster-communication",
          ],
        },
        {
          Operation: [
            "self-managed/zeebe-deployment/operations/zeebe-in-production",
            "self-managed/zeebe-deployment/operations/resource-planning",
            "self-managed/zeebe-deployment/operations/network-ports",
            "self-managed/zeebe-deployment/operations/setting-up-a-cluster",
            "self-managed/zeebe-deployment/operations/metrics",
            "self-managed/zeebe-deployment/operations/health",
            "self-managed/zeebe-deployment/operations/backpressure",
            "self-managed/zeebe-deployment/operations/disk-space",
            "self-managed/zeebe-deployment/operations/update-zeebe",
            "self-managed/zeebe-deployment/operations/rebalancing",
            "self-managed/zeebe-deployment/operations/management-api",
            "self-managed/zeebe-deployment/operations/backups",
          ],
        },
        {
          Exporters: [
            "self-managed/zeebe-deployment/exporters/exporters",
            "self-managed/zeebe-deployment/exporters/elasticsearch-exporter",
            "self-managed/zeebe-deployment/exporters/opensearch-exporter",
          ],
        },
      ],
      Operate: [
        "self-managed/operate-deployment/install-and-start",
        "self-managed/operate-deployment/operate-configuration",
        "self-managed/operate-deployment/data-retention",
        "self-managed/operate-deployment/schema-and-migration",
        "self-managed/operate-deployment/importer-and-archiver",
        "self-managed/operate-deployment/operate-authentication",
        "self-managed/operate-deployment/usage-metrics",
      ],
      Tasklist: [
        "self-managed/tasklist-deployment/install-and-start",
        "self-managed/tasklist-deployment/tasklist-configuration",
        "self-managed/tasklist-deployment/tasklist-authentication",
        "self-managed/tasklist-deployment/usage-metrics",
      ],
      Connectors: [
        "self-managed/connectors-deployment/install-and-start",
        "self-managed/connectors-deployment/connectors-configuration",
      ],

      Optimize: [
        optimizeLink(
          "Installation",
          "self-managed/optimize-deployment/install-and-start/"
        ),
        optimizeLink(
          "Version policy",
          "self-managed/optimize-deployment/version-policy/"
        ),
        {
          Configuration: [
            optimizeLink(
              "Getting started",
              "self-managed/optimize-deployment/configuration/getting-started/"
            ),
            {
              "System configuration": [
                optimizeLink(
                  "Overview",
                  "self-managed/optimize-deployment/configuration/system-configuration/"
                ),
                optimizeLink(
                  "Camunda Platform 8 system configuration",
                  "self-managed/optimize-deployment/configuration/system-configuration-platform-8/"
                ),
                optimizeLink(
                  "Camunda Platform 7 system configuration",
                  "self-managed/optimize-deployment/configuration/system-configuration-platform-7/"
                ),
                optimizeLink(
                  "Event-based process system configuration",
                  "self-managed/optimize-deployment/configuration/event-based-process-configuration/"
                ),
              ],
            },
            optimizeLink(
              "Logging",
              "self-managed/optimize-deployment/configuration/logging/"
            ),
            optimizeLink(
              "Optimize license key",
              "self-managed/optimize-deployment/configuration/optimize-license/"
            ),
            optimizeLink(
              "Security instructions",
              "self-managed/optimize-deployment/configuration/security-instructions/"
            ),
            optimizeLink(
              "Shared Elasticsearch cluster",
              "self-managed/optimize-deployment/configuration/shared-elasticsearch-cluster/"
            ),
            optimizeLink(
              "History cleanup",
              "self-managed/optimize-deployment/configuration/history-cleanup/"
            ),
            optimizeLink(
              "Localization",
              "self-managed/optimize-deployment/configuration/localization/"
            ),
            optimizeLink(
              "Object and list variable support",
              "self-managed/optimize-deployment/configuration/object-variables/"
            ),
            optimizeLink(
              "Clustering",
              "self-managed/optimize-deployment/configuration/clustering/"
            ),
            optimizeLink(
              "Webhooks",
              "self-managed/optimize-deployment/configuration/webhooks/"
            ),
            optimizeLink(
              "Authorization management",
              "self-managed/optimize-deployment/configuration/authorization-management/"
            ),
            optimizeLink(
              "User access management",
              "self-managed/optimize-deployment/configuration/user-management/"
            ),
            optimizeLink(
              "Multi-tenancy",
              "self-managed/optimize-deployment/configuration/multi-tenancy/"
            ),
            optimizeLink(
              "Multiple process engines",
              "self-managed/optimize-deployment/configuration/multiple-engines/"
            ),
            optimizeLink(
              "Event-based processes",
              "self-managed/optimize-deployment/configuration/setup-event-based-processes/"
            ),
            optimizeLink(
              "Telemetry",
              "self-managed/optimize-deployment/configuration/telemetry/"
            ),
            optimizeLink(
              "Common problems",
              "self-managed/optimize-deployment/configuration/common-problems/"
            ),
          ],
        },
        {
          Plugins: [
            optimizeLink(
              "Optimize plugin system",
              "self-managed/optimize-deployment/plugins/plugin-system/"
            ),
            optimizeLink(
              "Business key import customization",
              "self-managed/optimize-deployment/plugins/businesskey-import-plugin/"
            ),
            optimizeLink(
              "Decision inputs and outputs import customization",
              "self-managed/optimize-deployment/plugins/decision-import-plugin/"
            ),
            optimizeLink(
              "Elasticsearch header",
              "self-managed/optimize-deployment/plugins/elasticsearch-header/"
            ),
            optimizeLink(
              "Engine REST filter",
              "self-managed/optimize-deployment/plugins/engine-rest-filter-plugin/"
            ),
            optimizeLink(
              "Single sign on",
              "self-managed/optimize-deployment/plugins/single-sign-on/"
            ),
            optimizeLink(
              "Variable import customization",
              "self-managed/optimize-deployment/plugins/variable-import-plugin/"
            ),
          ],
        },
        optimizeLink(
          "Camunda engine data reimport",
          "self-managed/optimize-deployment/reimport/"
        ),
        {
          "Migration & update": [
            optimizeLink(
              "Instructions",
              "self-managed/optimize-deployment/migration-update/instructions/"
            ),
            optimizeLink(
              "Update notes (3.9.x to 3.10)",
              "self-managed/optimize-deployment/migration-update/3.9-to-3.10/"
            ),
            optimizeLink(
              "Update notes (3.9-preview-x to 3.9.x)",
              "self-managed/optimize-deployment/migration-update/3.9-preview-1-to-3.9/"
            ),
            optimizeLink(
              "Update notes (3.8.x to 3.9.x-preview-1)",
              "self-managed/optimize-deployment/migration-update/3.8-to-3.9-preview-1/"
            ),
            optimizeLink(
              "Update notes (3.7.x to 3.8.x)",
              "self-managed/optimize-deployment/migration-update/3.7-to-3.8/"
            ),
            optimizeLink(
              "Update notes (3.6 to 3.7.x)",
              "self-managed/optimize-deployment/migration-update/3.6-to-3.7/"
            ),
            optimizeLink(
              "Update notes (3.5 to 3.6)",
              "self-managed/optimize-deployment/migration-update/3.5-to-3.6/"
            ),
            optimizeLink(
              "Update notes (3.4 to 3.5)",
              "self-managed/optimize-deployment/migration-update/3.4-to-3.5/"
            ),
            optimizeLink(
              "Update notes (3.3 to 3.4)",
              "self-managed/optimize-deployment/migration-update/3.3-to-3.4/"
            ),
            optimizeLink(
              "Update notes (3.2 to 3.3)",
              "self-managed/optimize-deployment/migration-update/3.2-to-3.3/"
            ),
            optimizeLink(
              "Update notes (3.1 to 3.2)",
              "self-managed/optimize-deployment/migration-update/3.1-to-3.2/"
            ),
            optimizeLink(
              "Update notes (3.0 to 3.1)",
              "self-managed/optimize-deployment/migration-update/3.0-to-3.1/"
            ),
            optimizeLink(
              "Update notes (2.7 to 3.0)",
              "self-managed/optimize-deployment/migration-update/2.7-to-3.0/"
            ),
            optimizeLink(
              "Update notes (2.6 to 2.7)",
              "self-managed/optimize-deployment/migration-update/2.6-to-2.7/"
            ),
            optimizeLink(
              "Update notes (2.5 to 2.6)",
              "self-managed/optimize-deployment/migration-update/2.5-to-2.6/"
            ),
            optimizeLink(
              "Update notes (2.4 to 2.5)",
              "self-managed/optimize-deployment/migration-update/2.4-to-2.5/"
            ),
            optimizeLink(
              "Update notes (2.3 to 2.4)",
              "self-managed/optimize-deployment/migration-update/2.3-to-2.4/"
            ),
            optimizeLink(
              "Update notes (2.2 to 2.3)",
              "self-managed/optimize-deployment/migration-update/2.2-to-2.3/"
            ),
            optimizeLink(
              "Update notes (2.1 to 2.2)",
              "self-managed/optimize-deployment/migration-update/2.1-to-2.2/"
            ),
          ],
        },
        {
          "Advanced features": [
            optimizeLink(
              "Engine data deletion",
              "self-managed/optimize-deployment/advanced-features/engine-data-deletion/"
            ),
            optimizeLink(
              "Data import",
              "self-managed/optimize-deployment/advanced-features/import-guide/"
            ),
          ],
        },
      ],

      Identity: [
        "self-managed/identity/what-is-identity",
        "self-managed/identity/getting-started/install-identity",
        {
          "User guide": [
            {
              Configuration: [
                "self-managed/identity/user-guide/configuration/making-identity-production-ready",
                "self-managed/identity/user-guide/configuration/configure-external-identity-provider",
                "self-managed/identity/user-guide/configuration/configure-logging",
                "self-managed/identity/user-guide/configuration/connect-to-an-existing-keycloak",
              ],
            },
            {
              Roles: [
                "self-managed/identity/user-guide/roles/add-assign-role",
                "self-managed/identity/user-guide/roles/add-assign-permission",
              ],
            },
            {
              Groups: [
                "self-managed/identity/user-guide/groups/create-group",
                "self-managed/identity/user-guide/groups/assign-users-roles-to-group",
              ],
            },
            {
              Authorizations: [
                "self-managed/identity/user-guide/authorizations/managing-resource-authorizations",
                "self-managed/identity/user-guide/authorizations/managing-user-access",
                "self-managed/identity/user-guide/authorizations/generating-m2m-tokens",
              ],
            },
            {
              "Additional features": [
                "self-managed/identity/user-guide/additional-features/adding-an-api",
                "self-managed/identity/user-guide/additional-features/incorporate-applications",
              ],
            },
          ],
        },
        {
          Deployment: [
            "self-managed/identity/deployment/configuration-variables",
            "self-managed/identity/deployment/application-monitoring",
            "self-managed/identity/deployment/starting-configuration-for-identity",
          ],
          Troubleshooting: [
            "self-managed/identity/troubleshooting/troubleshoot-identity",
            "self-managed/identity/troubleshooting/common-problems",
          ],
        },
      ],
    },
    {
      Modeler: [
        {
          "Web Modeler": [
            "self-managed/modeler/web-modeler/installation",
            {
              Configuration: [
                "self-managed/modeler/web-modeler/configuration/configuration",
                "self-managed/modeler/web-modeler/configuration/database",
                "self-managed/modeler/web-modeler/configuration/logging",
              ],
              Troubleshooting: [
                "self-managed/modeler/web-modeler/troubleshooting/troubleshoot-database-connection",
                "self-managed/modeler/web-modeler/troubleshooting/troubleshoot-zeebe-connection",
              ],
            },
          ],
        },
        {
          "Desktop Modeler": [
            "self-managed/modeler/desktop-modeler/deploy-to-self-managed",
          ],
        },
      ],
    },
    {
      "Backup and restore": [
        "self-managed/backup-restore/backup-and-restore",
        "self-managed/backup-restore/optimize-backup",
        "self-managed/backup-restore/operate-tasklist-backup",
        "self-managed/backup-restore/zeebe-backup-and-restore",
      ],
    },
    {
      Troubleshooting: ["self-managed/troubleshooting/log-levels"],
    },
  ],
};
