const envConstants = {
    authorInstance:
      process.env["NEXT_PUBLIC_MAGNOLIA_INSTANCE"] || "http://localhost:8080/magnoliaAuthor", // magnolia instance baseURL
    pagesEndpoint: `.rest/delivery/pages/v1`,
    templatesEndpoint: `.rest/template-annotations/v1`,
    deliveryRestEndpoint: ".rest/delivery",
    bannerEndpoint: ".rest/delivery/bannerEndpoint",
    mgnlHost: process.env["NEXT_PUBLIC_MGNL_HOST"],
    newsEndpoint: ".rest/delivery/newsEndpoint",
    pressReleaseEndpoint: ".rest/delivery/pressReleaseEndpoint",
    categoryEndpoint: ".rest/delivery/categoryEndpoint"
  }
  
  export default envConstants