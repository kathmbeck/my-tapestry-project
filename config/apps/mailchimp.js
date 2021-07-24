exports.default = async function buildConfig() {
  return [
    {
      class: "app",
      id: "mailchimp",
      name: "mailchimp",
      type: "mailchimp",
      options: {
        apiKey: "830405a4f4d726ab4b5e20be73c5a092-us6", // Mailchimp API key
      },
    },
  ];
};
