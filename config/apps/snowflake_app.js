exports.default = async function buildConfig() {
  return [
    {
      class: "app",
      id: "snowflake_app",
      name: "snowflake_app",
      type: "snowflake",
      options: {
        account: "dla27293.us-east-1", // The full name of the account (provided by Snowflake). It is the subdomain you use to access Snowflake
        username: "fantasticfour", // Snowflake user login name to connect with
        password: "Fantastic1258$", // Password for the given username
        warehouse: "COMPUTE_WH", // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database: "SF_TUTS", // The Snowflake database to use
        schema: "PUBLIC", // The Snowflake schema (default: PUBLIC)
      },
    },
  ];
};