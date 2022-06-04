let policy = {
  userAgent : "*"
};
if(process.env.ENVOIRNMENT !== "production"){
  policy.disallow = "/";
}

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      policy
    ]
  },
  outDir: "./out"
}