const e = `seo{
  metaTitle,
  metaDescription,
  ogImage{
    asset->{
      _id,
      url
    },
    alt
  },
  noindex,
  canonicalOverride,
  keywords,
  articleType
}`,
  t = `
  *[_type == "project"] | order(order asc, year desc) {
    _id,
    _updatedAt,
    title,
    slug,
    mainImage,
    "imageUrl": mainImage.asset->url,
    images[0..3]{
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    year,
    client,
    description,
    ${e}
  }
`,
  a = `
  *[_type == "project" && category == $category] | order(order asc, year desc) {
    _id,
    _updatedAt,
    title,
    slug,
    mainImage,
    "imageUrl": mainImage.asset->url,
    images[0..3]{
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    year,
    client,
    description,
    ${e}
  }
`,
  i = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    slug,
    description,
    mainImage,
    images,
    videos,
    category,
    year,
    client,
    ${e}
  }
`,
  s = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    slug,
    description,
    images,
    category,
    year,
    client,
    link,
    content,
    services,
    collaborators,
    awards,
    ${e}
  }
`,
  l = `
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    role,
    bio,
    photo,
    socialLinks
  }
`,
  o = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    _updatedAt,
    name,
    slug,
    description,
    media,
    link,
    status,
    ${e}
  }
`,
  r = `*[_type == "labsPage"][0] {
  _updatedAt,
  heroTitle,
  heroSubtitle,
  emptyStateText,
  ${e}
}`,
  n = `*[_type == "projectsPage"][0] {
  _updatedAt,
  ${e}
}`,
  d = `
  *[_type == "research"] | order(order asc, date desc) {
    _id,
    _updatedAt,
    title,
    slug,
    summary,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    date,
    tags,
    ${e}
  }
`,
  c = `
  *[_type == "research" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    slug,
    summary,
    content,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    media,
    date,
    tags,
    ${e}
  }
`,
  u = `
  *[_type == "capabilityPage"] | order(order asc, title asc) {
    _id,
    _updatedAt,
    title,
    slug,
    tagline,
    "heroUrl": hero.asset->url,
    hero{ asset->{_id, url}, alt },
    ${e}
  }
`,
  _ = `
  *[_type == "capabilityPage" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    slug,
    tagline,
    hero{ asset->{_id, url}, alt },
    intro,
    body,
    services,
    faqs,
    "relatedProjects": relatedProjects[]->{
      _id, title, slug, client, year, category,
      mainImage{ asset->{_id, url}, alt }
    },
    "relatedCaseStudies": relatedCaseStudies[]->{
      _id, title, slug, client, year, category,
      "heroImage": images[0]{ asset->{_id, url}, alt }
    },
    ${e}
  }
`,
  g = `
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    foundingYear,
    description,
    keywords,
    twitterHandle,
    contactEmail,
    contactPhone,
    address,
    socialLinks,
    notFoundTitle,
    notFoundBody,
    logo{ asset->{_id, url}, alt },
    ogImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }
`,
  m = `*[_type == "homePage"][0] {
  _updatedAt,
  heroTitle,
  heroSubtitle,
  spiralImages,
  sectionOneTitle,
  sectionOneCallout,
  sectionOneCalloutLink,
  showreelVideo,
  sectionOneTitleBottom,
  sectionTwoText,
  capabilitiesImage,
  capabilities,
  capabilitiesCallToAction,
  intersectionTitle,
  intersectionText,
  intersectionCallToAction,
  intersectionImage,
  worldLink,
  contactInfo,
  ${e}
}`,
  p = `*[_type == "contactPage"][0] {
  _updatedAt,
  emailTitle,
  subheading,
  hqLabel,
  currentTime,
  weather,
  address,
  internalLinks,
  externalLinks,
  weatherVideos,
  ${e}
}`,
  y = `*[_type == "contactPage"][0] {
  emailTitle,
  address,
  internalLinks,
  externalLinks
}`,
  T = `*[_type == "studioPage"][0] {
  _updatedAt,
  heroTitle,
  worldSectionLabel,
  worldSectionText,
  worldCoordinates,
  globeMarkers[]{
    label,
    latitude,
    longitude,
    url
  },
  aboutText,
  capabilitiesTitle,
  "capabilitiesImageUrl": capabilitiesImage.asset->url,
  clientsTitle,
  clients,
  teamTitle,
  teamDescription,
  behindTheScenesTitle,
  behindTheScenesImages[]{
    asset->{
      _id,
      url
    },
    alt
  },
  "behindTheScenesImageUrl": behindTheScenesImage.asset->url,
  ${e}
}`,
  h = `*[_type == "logoRail"][0] {
  _id,
  title,
  logos[]{
    asset->{
      _id,
      url
    },
    alt
  }
}`,
  b = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  photo,
  headModel{
    asset->{
      _id,
      url
    }
  },
  socialLinks,
  order
}`,
  S = `{
  "homePage": *[_type == "homePage"][0] {
    _updatedAt,
    heroTitle,
    heroSubtitle,
    spiralImages,
    sectionOneTitle,
    sectionOneCallout,
    sectionOneCalloutLink,
    showreelVideo,
    sectionOneTitleBottom,
    sectionTwoText,
    capabilitiesImage,
    capabilities,
    capabilitiesCallToAction,
    intersectionTitle,
    intersectionText,
    intersectionCallToAction,
    intersectionImage,
    worldLink,
    contactInfo,
    ${e}
  },
  "studioPage": *[_type == "studioPage"][0] {
    _updatedAt,
    heroTitle,
    worldSectionLabel,
    worldSectionText,
    worldCoordinates,
    globeMarkers[]{
      label,
      latitude,
      longitude,
      url
    },
    aboutText,
    capabilitiesTitle,
    "capabilitiesImageUrl": capabilitiesImage.asset->url,
    clientsTitle,
    clients,
    teamTitle,
    teamDescription,
    behindTheScenesTitle,
    behindTheScenesImages[]{
      asset->{
        _id,
        url
      },
      alt
    },
    "behindTheScenesImageUrl": behindTheScenesImage.asset->url,
    ${e}
  },
  "contactPage": *[_type == "contactPage"][0] {
    _updatedAt,
    emailTitle,
    subheading,
    hqLabel,
    currentTime,
    weather,
    address,
    internalLinks,
    externalLinks,
    weatherVideos,
    ${e}
  },
  "projects": *[_type == "project"] | order(order asc, year desc) {
    _id,
    _updatedAt,
    title,
    slug,
    mainImage,
    "imageUrl": mainImage.asset->url,
    images[0..3]{
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    year,
    client,
    description,
    ${e}
  },
  "research": *[_type == "research"] | order(order asc, date desc) {
    _id,
    _updatedAt,
    title,
    slug,
    summary,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    date,
    tags,
    ${e}
  },
  "products": *[_type == "product"] | order(_createdAt desc) {
    _id,
    _updatedAt,
    name,
    slug,
    description,
    media,
    link,
    status,
    ${e}
  },
  "teamMembers": *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    headModel{
      asset->{
        _id,
        url
      }
    },
    socialLinks,
    order
  },
  "logoRail": *[_type == "logoRail"][0] {
    _id,
    title,
    logos[]{
      asset->{
        _id,
        url
      },
      alt
    }
  },
  "siteSettings": *[_type == "siteSettings"][0] {
    title,
    tagline,
    foundingYear,
    description,
    keywords,
    twitterHandle,
    contactEmail,
    contactPhone,
    address,
    socialLinks,
    notFoundTitle,
    notFoundBody,
    logo{ asset->{_id, url}, alt },
    ogImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}`;
export {
  t as ALL_PROJECTS_QUERY,
  u as CAPABILITIES_QUERY,
  _ as CAPABILITY_BY_SLUG_QUERY,
  s as CASE_STUDY_BY_SLUG_QUERY,
  r as LABS_PAGE_QUERY,
  o as PRODUCTS_QUERY,
  a as PROJECTS_BY_CATEGORY_QUERY,
  n as PROJECTS_PAGE_QUERY,
  i as PROJECT_BY_SLUG_QUERY,
  c as RESEARCH_BY_SLUG_QUERY,
  d as RESEARCH_POSTS_QUERY,
  g as SITE_SETTINGS_QUERY,
  l as TEAM_MEMBERS_QUERY,
  p as contactPageQuery,
  y as footerContactQuery,
  m as homePageQuery,
  h as logoRailQuery,
  S as siteDataQuery,
  T as studioPageQuery,
  b as teamMembersQuery,
};
