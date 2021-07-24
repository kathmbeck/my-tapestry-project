exports.default = async function buildConfig() {
  return [
    /**
     * --------------------
     * Source
     * --------------------
     */
    {
      class: "source",
      id: "all_users",
      name: "all_users",
      type: "snowflake-table-import",
      appId: "snowflake_app", // Set this value to the ID of the App this Source uses - e.g. `appId: "data_warehouse"`
      options: {
        table: "EMP_BASIC", // Name of the table in your DB - e.g. `table: "users"`
      },
      mapping: {
        EMAIL: "EMAIL",
      },
    },
    {
      id: "all_users_schedule",
      name: "all_users_schedule",
      class: "schedule",
      sourceId: "all_users", // The ID of the Source above
      recurring: true, // should this Schedule regularly run?
      recurringFrequency: 1000 * 60 * 15, // 15 minutes, in ms
      options: {
        column: "START_DATE", // the column to check for new records in table which this Schedule's Source is using (e.g. column: 'updated_at')
      },
    },
  ];
};
