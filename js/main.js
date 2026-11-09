/* Script optimization for Live Server and development */
(function () {
  // Check if scripts already initialized
  if (window.__siteCloneInitialized) {
    console.log("[Site Clone] Scripts already initialized, skipping re-execution");
    return;
  }

  // Mark as initialized
  window.__siteCloneInitialized = true;
  // React targets attach this file after mount, when the document is already
  // complete, so a boot step waiting for readystatechange would never run.
  var __siteCloneLate = document.readyState === "complete";
  var __siteCloneReady = document.onreadystatechange;

  // Execute scripts
  /* inline script */
  try {
    window.__REACT_QUERY_STATE__ = {
      mutations: [],
      queries: [
        {
          dehydratedAt: 1788426234496,
          state: {
            data: {
              contactPage: {
                _updatedAt: "2026-05-28T10:48:14Z",
                address: "73 Tib St,\nManchester,\nM4 1LS",
                currentTime: true,
                emailTitle: "HELLO@\nSTUDIODIALECT.COM",
                externalLinks: [
                  {
                    _key: "ef92525d205bff456a9686df6c41a423",
                    label: "Instagram",
                    url: "https://www.instagram.com/studio_dialect/",
                  },
                  {
                    _key: "39bbac019a0f57f60d65fa26abbebb2b",
                    label: "linkedin",
                    url: "https://www.linkedin.com/company/studio-dialect/",
                  },
                ],
                hqLabel: "dialect hq",
                internalLinks: [
                  { _key: "2cb99aa951964628f2f9c93f77dd9378", label: "home", url: "/" },
                  { _key: "a370781ea118d4885d43994dfb6c4727", label: "about us", url: "/studio" },
                  { _key: "066a64ae05de39c8e106807d0d976368", label: "projects", url: "/projects" },
                  { _key: "83eafb0c0f45", label: "labs", url: "/research" },
                  { _key: "bf3f4514a8e4247d2f3f25e2fc062966", label: "contact", url: "/contact" },
                  { _key: "377deca22a8b29c547b64040ffa7831a", label: "easter egg", url: "/easter-egg" },
                  { _key: "2185f069f003ecd5870dc49f6b5be1f7", label: "privacy policy", url: "/privacy" },
                ],
                seo: {
                  articleType: null,
                  canonicalOverride: null,
                  keywords: [
                    "contact Studio Dialect",
                    "hire interactive production studio",
                    "project brief",
                    "WebGL agency contact",
                    "work with Studio Dialect",
                    "creative technology partner",
                  ],
                  metaDescription:
                    "New project, new collaboration, or just want to talk? Get in touch with Studio Dialect. Interactive production for global brands and agencies.",
                  metaTitle: "Start a project with Studio Dialect",
                  noindex: null,
                  ogImage: {
                    alt: "3D render of Studio Dialect's futuristic robotic arm brand mascot",
                    asset: {
                      _id: "image-b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630.png",
                    },
                  },
                },
                subheading: "EXPLORE WHAT'S POSSIBLE",
                weather: "drizzle",
                weatherVideos: {
                  clear: "https://vimeo.com/1144501305",
                  clearNight: "https://vimeo.com/1144501322",
                  drizzle: "https://vimeo.com/1144501385",
                  drizzleNight: "https://vimeo.com/1144501369",
                  fog: "https://vimeo.com/1147761414",
                  fogNight: "https://vimeo.com/1147761446",
                  overcast: "https://vimeo.com/1144501356",
                  overcastNight: "https://vimeo.com/1144501337",
                  rain: "https://vimeo.com/1144501385",
                  rainNight: "https://vimeo.com/1144501369",
                  snow: "https://vimeo.com/1144501356",
                  snowNight: "https://vimeo.com/1144501369",
                  thunderstorm: "https://vimeo.com/1144501418",
                  thunderstormNight: "https://vimeo.com/1144501400",
                },
              },
              homePage: {
                _updatedAt: "2026-05-28T10:48:01Z",
                capabilities: [
                  {
                    _key: "6f64430b8fe8",
                    label: "Experience Strategy & Design",
                    number: "[ 04 ]",
                    videoTitle: "Fast paced showreel edit of Studio Dialect's experience strategy and design projects",
                    videoURL: {
                      _type: "file",
                      asset: { _ref: "file-3264dc3050d9f3f483718f1ba3b7896b9ea9a775-mp4", _type: "reference" },
                    },
                  },
                  {
                    _key: "8b66a77d9a68",
                    label: "3D Visualisation",
                    number: "[ 01 ]",
                    videoTitle: "Fast paced showreel edit of Studio Dialect's 3D visualisation projects",
                    videoURL: {
                      _type: "file",
                      asset: { _ref: "file-a9efedb630224d47cb840e4b2b936d2cd0ff871a-mp4", _type: "reference" },
                    },
                  },
                  {
                    _key: "10f6e680b098",
                    label: "Rapid Concept Prototyping",
                    number: "[ 05 ]",
                    videoTitle: "Fast paced showreel edit of Studio Dialect's rapid concept prototyping projects",
                    videoURL: {
                      _type: "file",
                      asset: { _ref: "file-62e071ed2d4888d7c48b72d35db50b446dcffffa-mp4", _type: "reference" },
                    },
                  },
                  {
                    _key: "55e851d3e687",
                    label: "Motion & Production",
                    number: "[ 02 ]",
                    videoTitle: "Fast paced showreel edit of Studio Dialect's motion and production projects",
                    videoURL: {
                      _type: "file",
                      asset: { _ref: "file-39602ffe93f88dcb09683a0f6d38cfa4e33d6a38-mp4", _type: "reference" },
                    },
                  },
                  {
                    _key: "5093792c4528",
                    label: "Website & App Experience",
                    number: "[ 03 ]",
                    videoTitle: "Fast paced showreel edit of Studio Dialect's web and experience projects",
                    videoURL: {
                      _type: "file",
                      asset: { _ref: "file-2071d123afba49b552e1d24184fb405724576302-mp4", _type: "reference" },
                    },
                  },
                ],
                capabilitiesCallToAction: { label: "START A PROJECT", url: "/contact" },
                capabilitiesImage: {
                  _type: "image",
                  alt: "Dramatic 3D rendered close up of a deep blue McLaren Artura Spider",
                  asset: { _ref: "image-195250563f03d6423593b63f7e35ba5d30964671-568x568-jpg", _type: "reference" },
                },
                contactInfo: { address: "73 Tib St,\nManchester,\nM4 1LS", status: "status open", time: "09:45" },
                heroSubtitle:
                  "Award-winning motion, design and interactive experiences that connect culture, technology, and contemporary aesthetics.",
                heroTitle: [
                  {
                    _key: "befb465c6f9a",
                    _type: "block",
                    children: [{ _key: "11463c1b99a6", _type: "span", marks: [], text: "EXPERT DIGITAL" }],
                    markDefs: [],
                    style: "normal",
                  },
                  {
                    _key: "9b2bb3196acc",
                    _type: "block",
                    children: [{ _key: "11463c1b99a6", _type: "span", marks: [], text: "PRODUCTION" }],
                    markDefs: [],
                    style: "normal",
                  },
                ],
                intersectionCallToAction: { label: "The Studio", url: "/studio" },
                intersectionImage: { _type: "image", aspectRatio: 0.5625, vimeoURL: "https://vimeo.com/1145249700" },
                intersectionText:
                  "Our approach sits where creativity and technical imagination meet. We explore emerging technologies with a practical, artistic eye, shaping them into experiences that feel human and memorable.\n\nOur curiosity is what keeps our work moving forward. It pushes us to stay close to new ideas, new tools and new ways of seeing. It keeps our aesthetics evolving and our technical approach sharp. It’s the energy that ensures every project feels considered and ready for the world it’s going into.",
                intersectionTitle: "art, technology, experience.",
                sectionOneCallout:
                  "Studio Dialect explores how technology can shape the way people move, feel and interact. \n\nFrom websites to installations, we design experiences that sit comfortably at the edge of what’s possible, guided by a belief in thoughtful design, meaningful experiences and a love of solving hard problems.",
                sectionOneCalloutLink: { label: "ALL PROJECTS", url: "/projects" },
                sectionOneTitle: "INTERSECTING\nCULTURE",
                sectionOneTitleBottom: "&\nTECHNOLOGY",
                sectionTwoText:
                  "Our work is grounded in research and experimentation. We help brands make sense of emerging technologies and turn them into clear, purposeful experiences that stay with people. \n\nEverything we create is built in close collaboration with our clients and agency partners, working together to bring ideas to life with clarity and intention.",
                seo: {
                  articleType: null,
                  canonicalOverride: null,
                  keywords: [
                    "interactive production studio",
                    "WebGL agency",
                    "3D production",
                    "immersive retail",
                    "anamorphic billboard",
                    "emerging technology",
                    "experiential design",
                    "creative technology",
                  ],
                  metaDescription:
                    "Studio Dialect is an interactive production studio intersecting culture and technology. Immersive 3D, WebGL, retail, and emerging-tech work for global brands.",
                  metaTitle: "Award-winning interactive production studio",
                  noindex: null,
                  ogImage: {
                    alt: "3D render of Studio Dialect's futuristic robotic arm brand mascot",
                    asset: {
                      _id: "image-b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630.png",
                    },
                  },
                },
                showreelVideo: {
                  _type: "file",
                  aspectRatio: 1,
                  previewVimeoURL: "https://vimeo.com/1144457641",
                  vimeoURL: "https://vimeo.com/1143419566",
                },
                spiralImages: [
                  {
                    _key: "35ded82958cb",
                    _type: "image",
                    asset: { _ref: "image-4f807995c89f29556760dfa3d6e13e0dfdfd5431-600x800-png", _type: "reference" },
                    label: "Blossom & Bloom AR Game",
                    url: "/projects/heinemann-blossom-and-bloom-ar-experience",
                  },
                  {
                    _key: "93c2e6373eea",
                    _type: "image",
                    asset: { _ref: "image-9db89dd7267eb081be98e032b6a0450fc282194e-600x800-png", _type: "reference" },
                    label: "Adidas Crazyfast",
                    url: "/projects/adidas-x-crazyfast-london",
                  },
                  {
                    _key: "af002a6eea6e",
                    _type: "image",
                    asset: { _ref: "image-09d746dc848ed0f742e9e3f97ac9f9cbbec8dccf-600x800-png", _type: "reference" },
                    label: "Nike AMD",
                    url: "/projects/nike-interactive-amd",
                  },
                  {
                    _key: "fde344ee44cc",
                    _type: "image",
                    asset: { _ref: "image-f4f492320dc49087797c390abffdf38d75bd585b-600x800-png", _type: "reference" },
                    label: "Nespresso",
                    url: "/projects/nespresso-immersive-room-vienna",
                  },
                  {
                    _key: "5135878615a7",
                    _type: "image",
                    asset: { _ref: "image-c573016faa0767876092ec34c420de96df7bb0a5-600x800-png", _type: "reference" },
                    label: "Blossom & Bloom AR Game",
                    url: "/projects/heinemann-blossom-and-bloom-ar-experience",
                  },
                  {
                    _key: "8111be4a5ccc",
                    _type: "image",
                    asset: { _ref: "image-9de0b71c49d3b443640f09abab65a4d53c0a126d-600x800-png", _type: "reference" },
                    label: "Squatwolf",
                    url: "/projects/squatwolf-web-and-app-reimagining",
                  },
                  {
                    _key: "728660c73586",
                    _type: "image",
                    asset: { _ref: "image-304917e1f9b50248319fc707b08192085c6ea870-600x800-png", _type: "reference" },
                    label: "On Running",
                    url: "/projects/on-running-cutting-edge-retail-display",
                  },
                  {
                    _key: "83c3b35b9dd7",
                    _type: "image",
                    asset: { _ref: "image-b8fd04c5cbf29e6f6888d3070ad7a438120d5c5d-600x800-png", _type: "reference" },
                    label: "HOKA TRAINING CAMP",
                    url: "/projects/hoka-utmb-base-camp-web-ar-experience",
                  },
                  {
                    _key: "bc82d97683ff",
                    _type: "image",
                    asset: { _ref: "image-be06227df5584683a466ab79fd47c8f79b09f767-600x800-png", _type: "reference" },
                    label: "Adidas Crazyfast",
                    url: "/projects/adidas-x-crazyfast-london",
                  },
                  {
                    _key: "65245436470b",
                    _type: "image",
                    asset: { _ref: "image-e329bb54474b4c03edda1642c55b352d9b609362-600x800-png", _type: "reference" },
                    label: "Face Your Fears",
                    url: "/projects/netflix-face-your-fears-ai-photobooth",
                  },
                  {
                    _key: "97f6f96b62a3",
                    _type: "image",
                    asset: { _ref: "image-76bb0cc371de0781523f0fe6050b25d022589de1-600x800-png", _type: "reference" },
                    label: "Mont Blanc",
                    url: "/projects/montblanc-interactive-clouds-holograms",
                  },
                  {
                    _key: "6b8fb65af282",
                    _type: "image",
                    asset: { _ref: "image-29eb161177cea7a9720c2499766c189cc96d32d4-600x800-png", _type: "reference" },
                    label: "Google Pixel Fold",
                    url: "/projects/google-pixel-fold-anamorphic-billboard",
                  },
                  {
                    _key: "ef8db520c249",
                    _type: "image",
                    asset: { _ref: "image-93df45e94807536d5d0e0265bd85a728c193f54c-600x800-png", _type: "reference" },
                    label: "Skimasters",
                    url: "/projects/heinemann-skimasters-motion-game",
                  },
                  {
                    _key: "2a616064f6a1",
                    _type: "image",
                    asset: { _ref: "image-4ff39151de280576e03861199e28673883796872-600x800-png", _type: "reference" },
                    label: "Adidas Crazyfast",
                    url: "/projects/adidas-x-crazyfast-london",
                  },
                  {
                    _key: "d7740fc62a8d",
                    _type: "image",
                    asset: { _ref: "image-6f1058e6f8291bc75f83c0353577d0e25e7b3a8f-600x800-png", _type: "reference" },
                    label: "Blossom & Bloom AR Game",
                    url: "/projects/heinemann-blossom-and-bloom-ar-experience",
                  },
                  {
                    _key: "a4d2435ff353",
                    _type: "image",
                    asset: { _ref: "image-affedda72854b10d583f965de3519cac0a90d9ea-600x800-png", _type: "reference" },
                    label: "Face Your Fears",
                    url: "/projects/netflix-face-your-fears-ai-photobooth",
                  },
                  {
                    _key: "300ec0f09068",
                    _type: "image",
                    asset: { _ref: "image-cff32326b9ac5e668ee546ba07e9111fd0142e4a-600x800-png", _type: "reference" },
                    label: "Mont Blanc",
                    url: "/projects/montblanc-interactive-clouds-holograms",
                  },
                  {
                    _key: "9232a5d2a421",
                    _type: "image",
                    asset: { _ref: "image-3aff6915e3b45a5ae257c3695aa7d5b4c1d39077-600x800-png", _type: "reference" },
                    label: "Google Pixel Fold",
                    url: "/projects/google-pixel-fold-anamorphic-billboard",
                  },
                  {
                    _key: "c79bc9b1c3b0",
                    _type: "image",
                    asset: { _ref: "image-2978909820fd1f8fcf0b56c7cb368ed903953cd5-600x800-png", _type: "reference" },
                    label: "Nike AMD",
                    url: "/projects/nike-interactive-amd",
                  },
                  {
                    _key: "eae3236043a1",
                    _type: "image",
                    asset: { _ref: "image-a84316ef792c34e3f8138508334f721fc7baf713-600x800-png", _type: "reference" },
                    label: "Face Your Fears",
                    url: "/projects/netflix-face-your-fears-ai-photobooth",
                  },
                  {
                    _key: "06c31e139f66",
                    _type: "image",
                    asset: { _ref: "image-4ffd25dec2620e4deab3b708f8735e91d0aeea92-600x800-png", _type: "reference" },
                    label: "Breitling",
                    url: "/projects/breitling-3d-holograms",
                  },
                  {
                    _key: "739a6bce6558",
                    _type: "image",
                    asset: { _ref: "image-df545474241329f0bfb5a937ca8debb343be6c1b-600x800-png", _type: "reference" },
                    label: "Coke Zero",
                    url: "/projects/cocacola-coke-zero-take-a-taste-interactive",
                  },
                  {
                    _key: "a86bc15ed996",
                    _type: "image",
                    asset: { _ref: "image-344ed43d854b5360e5eff1b46aa532919cd79564-600x800-png", _type: "reference" },
                    label: "Google Pixel Fold",
                    url: "/projects/google-pixel-fold-anamorphic-billboard",
                  },
                  {
                    _key: "13701cc28309",
                    _type: "image",
                    asset: { _ref: "image-a4915b6a0b70483708129eabb6dc44ec50250ee0-600x800-png", _type: "reference" },
                    label: "HOKA TRAINING CAMP",
                    url: "/projects/hoka-utmb-base-camp-web-ar-experience",
                  },
                  {
                    _key: "59aa4794d921",
                    _type: "image",
                    asset: { _ref: "image-879b4e21ce3388ecad5a83b0aa876bf9ed2b151e-600x800-png", _type: "reference" },
                    label: "Breitling",
                    url: "/projects/breitling-3d-holograms",
                  },
                  {
                    _key: "7f452f097f39",
                    _type: "image",
                    asset: { _ref: "image-653af15b8ed8760bd8a6b396a39e61dca41ca43e-600x800-png", _type: "reference" },
                    label: "Coke Zero",
                    url: "/projects/cocacola-coke-zero-take-a-taste-interactive",
                  },
                  {
                    _key: "42e350459f8c",
                    _type: "image",
                    asset: { _ref: "image-e2daefd62bcd56e93fbd135a8d296b75f9231f02-600x800-png", _type: "reference" },
                    label: "Nespresso Vienna",
                    url: "/projects/nespresso-immersive-room-vienna",
                  },
                  {
                    _key: "2e14f6e616db",
                    _type: "image",
                    asset: { _ref: "image-86368ce19908c1abe011e6f24f38ac56da4eeb34-600x800-png", _type: "reference" },
                    label: "Gate Zero",
                    url: "/projects/gatezero-frankfurt",
                  },
                  {
                    _key: "844e35efa3a6",
                    _type: "image",
                    asset: { _ref: "image-1253672390c29826f51790b2265e2448d932e4c9-600x800-png", _type: "reference" },
                    label: "Breitling",
                    url: "/projects/breitling-3d-holograms",
                  },
                  {
                    _key: "c0ac9e613cd7",
                    _type: "image",
                    asset: { _ref: "image-19a055bb92069254bce0aaf5733da4a27533c285-600x800-png", _type: "reference" },
                    label: "The Northface Vectiv",
                    url: "/projects/the-north-face-vectiv-immersive-vr-experience",
                  },
                  {
                    _key: "c5d7c6f35264",
                    _type: "image",
                    asset: { _ref: "image-892989b20cde73e1172a328f1ee3fe15917802c9-600x800-png", _type: "reference" },
                    label: "Mclaren Korean",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                  {
                    _key: "38867b5f2a49",
                    _type: "image",
                    asset: { _ref: "image-73ac2c9734834cadaa54687f71667681c5db79a7-600x800-png", _type: "reference" },
                    label: "HOKA UTMB",
                    url: "/projects/hoka-utmb-web-ar-experience",
                  },
                  {
                    _key: "7e9febe54a3d",
                    _type: "image",
                    asset: { _ref: "image-4139dce154255d372c4eec1949d3b75e3da66274-600x800-png", _type: "reference" },
                    label: "Adidas Crazyfast",
                    url: "/projects/adidas-x-crazyfast-london",
                  },
                  {
                    _key: "9f11690bdc18",
                    _type: "image",
                    asset: { _ref: "image-095fa0ff7c73d89252cd55e131eb30c13797f109-600x800-png", _type: "reference" },
                    label: "Nike AMD",
                    url: "/projects/nike-interactive-amd",
                  },
                  {
                    _key: "96ceefedfeb5",
                    _type: "image",
                    asset: { _ref: "image-54364056e6c98fae4f668aa85824dba4b8f2c9ea-600x800-png", _type: "reference" },
                    label: "Google Pixel Fold",
                    url: "/projects/google-pixel-fold-anamorphic-billboard",
                  },
                  {
                    _key: "548726733926",
                    _type: "image",
                    asset: { _ref: "image-6412fa293203c485987965deb248b8f9594334ce-600x800-png", _type: "reference" },
                    label: "On Running",
                    url: "/projects/on-running-cutting-edge-retail-display",
                  },
                  {
                    _key: "48db9cb2d895",
                    _type: "image",
                    asset: { _ref: "image-25ba62f359e9e80277f3c022550d42c361f495b8-600x800-png", _type: "reference" },
                    label: "Liquid R&D",
                    url: "/research/water-bending",
                  },
                  {
                    _key: "0b94df349519",
                    _type: "image",
                    asset: { _ref: "image-93a6e5baca0166430b6678c64e94d7edbadcb3e7-600x800-png", _type: "reference" },
                    label: "HOKA UTMB",
                    url: "/projects/hoka-utmb-web-ar-experience",
                  },
                  {
                    _key: "3bd8aa83b733",
                    _type: "image",
                    asset: { _ref: "image-69c206ae7df00adb4310cbfb501c614e210e071d-600x800-png", _type: "reference" },
                    label: "Mont Blanc",
                    url: "/projects/montblanc-interactive-clouds-holograms",
                  },
                  {
                    _key: "ae2b1a88b46f",
                    _type: "image",
                    asset: { _ref: "image-d4bb4ef4ebbda6e68a7c514c2b35b187fcda01a2-600x800-png", _type: "reference" },
                    label: "Nespresso Vienna",
                    url: "/projects/nespresso-immersive-room-vienna",
                  },
                  {
                    _key: "2f8712e4df7c",
                    _type: "image",
                    asset: { _ref: "image-9ca12081de73c006ee04122a3cddc64a7b336d08-600x800-png", _type: "reference" },
                    label: "Mclaren Korean",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                  {
                    _key: "f0dbdfdaf58f",
                    _type: "image",
                    asset: { _ref: "image-6db48ac657d8dbb78f9e85ec0a8c75058003c5d6-600x800-png", _type: "reference" },
                    label: "Nike AMD",
                    url: "/projects/nike-interactive-amd",
                  },
                  {
                    _key: "90ec9c9996c4",
                    _type: "image",
                    asset: { _ref: "image-f1f1b191661ac69eaa04c38cd1e1fa4614942781-600x800-png", _type: "reference" },
                    label: "Mclaren Korea",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                  {
                    _key: "499161e46a04",
                    _type: "image",
                    asset: { _ref: "image-7c377c3ef4332aa651717ffaf59b2505a3ebdf41-600x800-png", _type: "reference" },
                    label: "Mclaren Korean",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                  {
                    _key: "ec6722ce1ea1",
                    _type: "image",
                    asset: { _ref: "image-4b53e99ff6cd582c1ade5c69201bcfe1ca7eaac0-600x800-png", _type: "reference" },
                    label: "Breitling",
                    url: "/projects/breitling-3d-holograms",
                  },
                  {
                    _key: "c4bb53d5d471",
                    _type: "image",
                    asset: { _ref: "image-e2734d8807710d41d5a35567f723b4ffb42f9b86-600x800-png", _type: "reference" },
                    label: "The Northface Vectiv",
                    url: "/projects/the-north-face-vectiv-immersive-vr-experience",
                  },
                  {
                    _key: "0035e95c702d",
                    _type: "image",
                    asset: { _ref: "image-dcc7a54a261453e0d9e9c1bedc9f370bccbac1bf-600x800-png", _type: "reference" },
                    label: "Mclaren Korean",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                  {
                    _key: "52fb2d603676",
                    _type: "image",
                    asset: { _ref: "image-1f345fd25aa3a64e45124544561695866f90c528-600x800-png", _type: "reference" },
                    label: "On Running",
                    url: "/projects/on-running-cutting-edge-retail-display",
                  },
                  {
                    _key: "7808bac51ca9",
                    _type: "image",
                    asset: { _ref: "image-ee348b50b16cfa859e3cb89869c36e06614ff6dd-600x800-png", _type: "reference" },
                    label: "Nike AMD",
                    url: "/projects/nike-interactive-amd",
                  },
                  {
                    _key: "575ba67274f4",
                    _type: "image",
                    asset: { _ref: "image-3ee5da074d37b98e717ad11bd797a522d0e169b2-600x800-png", _type: "reference" },
                    label: "Onava",
                    url: "/projects/onava-branding",
                  },
                  {
                    _key: "266d24b1580d",
                    _type: "image",
                    asset: { _ref: "image-f15747bcc71136796446f60c8d55b2e06a1e37d2-600x800-png", _type: "reference" },
                    label: "Skimasters",
                    url: "/projects/heinemann-skimasters-motion-game",
                  },
                  {
                    _key: "4f8eecb02c64",
                    _type: "image",
                    asset: { _ref: "image-4119571939edcfc9538b4402795a37017280b436-600x800-png", _type: "reference" },
                    label: "Squatwolf",
                    url: "/projects/squatwolf-web-and-app-reimagining",
                  },
                  {
                    _key: "e57a685352b4",
                    _type: "image",
                    asset: { _ref: "image-5356a8948ab7797200c8926962af7c97ebee6bc2-600x800-png", _type: "reference" },
                    label: "On Running",
                    url: "/projects/on-running-cutting-edge-retail-display",
                  },
                  {
                    _key: "c33077855e59",
                    _type: "image",
                    asset: { _ref: "image-ea9085e4d46249f75a8a434b67bd511f18c281df-600x800-png", _type: "reference" },
                    label: "HOKA UTMB",
                    url: "/projects/hoka-utmb-web-ar-experience",
                  },
                  {
                    _key: "5b8b37a07599",
                    _type: "image",
                    asset: { _ref: "image-e91bedd9e98f34d08536c99f5be973b0f8b9c754-600x800-png", _type: "reference" },
                    label: "Mont Blanc",
                    url: "/projects/montblanc-interactive-clouds-holograms",
                  },
                  {
                    _key: "14a15978480c",
                    _type: "image",
                    asset: { _ref: "image-90ae1bdae6a824ca3bcf7e84a9c5503463b88da8-600x800-png", _type: "reference" },
                    label: "The Northface Vectiv",
                    url: "/projects/the-north-face-vectiv-immersive-vr-experience",
                  },
                  {
                    _key: "97ede5501160",
                    _type: "image",
                    asset: { _ref: "image-cd04d9d617ef591c6980feb26da509b7e171bd96-600x800-png", _type: "reference" },
                    label: "On Running",
                    url: "/projects/on-running-cutting-edge-retail-display",
                  },
                  {
                    _key: "2e0ebdd290a5",
                    _type: "image",
                    asset: { _ref: "image-1479dbc40d45acaf332be1ead74a6bc8e3dd488b-600x800-png", _type: "reference" },
                    label: "Skimasters",
                    url: "/projects/heinemann-skimasters-motion-game",
                  },
                  {
                    _key: "cf3b02c28376",
                    _type: "image",
                    asset: { _ref: "image-9e726b0af4be0e615878a2c551eb268697ef502c-600x800-png", _type: "reference" },
                    label: "Mont Blanc",
                    url: "/projects/montblanc-interactive-clouds-holograms",
                  },
                  {
                    _key: "f047e5cecab7",
                    _type: "image",
                    asset: { _ref: "image-d36920cf0f912c9bfaedb4e2e2c4818acf70ef31-600x800-png", _type: "reference" },
                    label: "Mclaren Korean",
                    url: "/projects/mclaren-artura-spider-s-korea-launch-event",
                  },
                ],
                worldLink: { label: "Let's Play", url: "/easter-egg" },
              },
              logoRail: {
                _id: "bd13faf8-ba84-4dc8-9c33-b0e88c80bcd4",
                logos: [
                  {
                    alt: "Nespresso",
                    asset: {
                      _id: "image-e71b80433ad154de88c3ec6641b3130f0056a0bc-128x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/e71b80433ad154de88c3ec6641b3130f0056a0bc-128x48.png",
                    },
                  },
                  {
                    alt: "H&M",
                    asset: {
                      _id: "image-2ff8c33c3ada739df61493a26268c37899816cfa-59x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/2ff8c33c3ada739df61493a26268c37899816cfa-59x48.png",
                    },
                  },
                  {
                    alt: "On Running",
                    asset: {
                      _id: "image-977598cc13fe510087ae1e1b575bed7b6f216e60-35x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/977598cc13fe510087ae1e1b575bed7b6f216e60-35x48.png",
                    },
                  },
                  {
                    alt: "McLaren",
                    asset: {
                      _id: "image-3ec929761952b11bff2b1a652e956dde93e33c76-140x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/3ec929761952b11bff2b1a652e956dde93e33c76-140x48.png",
                    },
                  },
                  {
                    alt: "Intel",
                    asset: {
                      _id: "image-d061ace106ee1add95062ca0511b624526f979d3-72x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/d061ace106ee1add95062ca0511b624526f979d3-72x48.png",
                    },
                  },
                  {
                    alt: "Adidas",
                    asset: {
                      _id: "image-2b77764ebf82e56ee0dad5709160867afa69e091-63x44-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/2b77764ebf82e56ee0dad5709160867afa69e091-63x44.png",
                    },
                  },
                  {
                    alt: "Google",
                    asset: {
                      _id: "image-c72d40efd611b3b6c2be7adcd4c03c6c3eefd966-97x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/c72d40efd611b3b6c2be7adcd4c03c6c3eefd966-97x48.png",
                    },
                  },
                  {
                    alt: "Hoka",
                    asset: {
                      _id: "image-68198132a6a6d68e8d9177cdfcf8e9474994e1e4-79x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/68198132a6a6d68e8d9177cdfcf8e9474994e1e4-79x48.png",
                    },
                  },
                  {
                    alt: "Heinemann",
                    asset: {
                      _id: "image-d8152dcd173e721180bcee6d9c7a8d7103eba2e1-71x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/d8152dcd173e721180bcee6d9c7a8d7103eba2e1-71x48.png",
                    },
                  },
                  {
                    alt: "Fossil",
                    asset: {
                      _id: "image-3d4e5e04325a847b831726855d1e3ad4e02b91e1-103x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/3d4e5e04325a847b831726855d1e3ad4e02b91e1-103x48.png",
                    },
                  },
                  {
                    alt: "Coca-Cola",
                    asset: {
                      _id: "image-c6ce8233b01bb65d46ddbfb7f2ef6e8ffc2b9349-94x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/c6ce8233b01bb65d46ddbfb7f2ef6e8ffc2b9349-94x48.png",
                    },
                  },
                  {
                    alt: "The North Face",
                    asset: {
                      _id: "image-fb23ea2699a8310baa63b2fa68d05668a24df3ca-71x48-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/fb23ea2699a8310baa63b2fa68d05668a24df3ca-71x48.png",
                    },
                  },
                ],
                title: "Home and Studio Logos",
              },
              products: [],
              projects: [
                {
                  _id: "50d962fd-a89e-461e-8e01-6710a91bd81f",
                  _updatedAt: "2026-05-29T11:34:11Z",
                  category: ["Interactive", "Immersive"],
                  client: "On Running",
                  description: "Developing intrinsic technology for a flagship experience.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/2290869abebf18564c41b48c3f906a7fcf5f6d8b-1200x641.png",
                  images: [
                    {
                      alt: "Top-down view of ON products on an interactive CloudTec display table",
                      asset: {
                        _id: "image-f25087553fc64fd991927a9261908b53911ae786-568x602-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f25087553fc64fd991927a9261908b53911ae786-568x602.png",
                      },
                    },
                    {
                      alt: "Wide shot of the ON Movement Lab Zurich store with the interactive display at the centre",
                      asset: {
                        _id: "image-6351956a4f6108d18cb643d9616ee37a916d776f-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/6351956a4f6108d18cb643d9616ee37a916d776f-568x766.png",
                      },
                    },
                    {
                      alt: "Wide shot of an ON shoe on the interactive display with a gold rock formation installation behind it",
                      asset: {
                        _id: "image-e396ff2f7d2548d76181706f2e2ab721383b69af-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e396ff2f7d2548d76181706f2e2ab721383b69af-568x766.png",
                      },
                    },
                    {
                      alt: "Top-down view of the ON interactive display table",
                      asset: {
                        _id: "image-b5dcf6d2e5979e30125f35f3ad66312776e88af2-568x602-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/b5dcf6d2e5979e30125f35f3ad66312776e88af2-568x602.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "ON products displayed on an interactive CloudTec table inside Movement Lab Zurich",
                    asset: { _ref: "image-2290869abebf18564c41b48c3f906a7fcf5f6d8b-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "On Running",
                      "Movement Lab",
                      "interactive retail",
                      "digital materiality",
                      "CloudTec display",
                      "responsive visuals",
                      "Zurich flagship store",
                      "Modem",
                      "creative technology",
                    ],
                    metaDescription:
                      "Interactive retail experience for ON Movement Lab Zurich, blending digital materiality, responsive displays and ambient storytelling with Modem.",
                    metaTitle: "ON Movement Lab Interactive Retail Experience",
                    noindex: null,
                    ogImage: {
                      alt: "ON products displayed on an interactive CloudTec table inside Movement Lab Zurich",
                      asset: {
                        _id: "image-2290869abebf18564c41b48c3f906a7fcf5f6d8b-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/2290869abebf18564c41b48c3f906a7fcf5f6d8b-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "on-running-cutting-edge-retail-display" },
                  title: "Where Movement Lives",
                  year: null,
                },
                {
                  _id: "885ba00e-bddd-414f-a7d0-c3721c040809",
                  _updatedAt: "2026-05-29T11:33:05Z",
                  category: ["Web/App", "3D", "Interactive", "Immersive", "DOOH", "Game"],
                  client: "Coca-Cola",
                  description:
                    "#TakeATaste a large-scale, epic interactive anamorphic experiences at Picadilly Lights coupled with a AR handoff and reward. ",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/ba21289beb89a4fe4808b59660afe4fa22f23d62-1200x641.png",
                  images: [
                    {
                      alt: "Behind-the-scenes studio test of the Coke Zero #TakeATaste AR experience on mobile and large display",
                      asset: {
                        _id: "image-24c0da13faec97d17a9313f2da79c50af7430292-284x364-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/24c0da13faec97d17a9313f2da79c50af7430292-284x364.png",
                      },
                    },
                    {
                      alt: "Coke Zero #TakeATaste takeover on Piccadilly Lights with an interactive grabber experience",
                      asset: {
                        _id: "image-a4e24370ec53d450cc6d912b4119e21e8d128dd3-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/a4e24370ec53d450cc6d912b4119e21e8d128dd3-284x272.png",
                      },
                    },
                    {
                      alt: "Behind-the-scenes Blender rig of a 3D Coke character created for the #TakeATaste campaign",
                      asset: {
                        _id: "image-e7f2805333b481a0792c7552ed5fe752e17ef081-284x364-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e7f2805333b481a0792c7552ed5fe752e17ef081-284x364.png",
                      },
                    },
                    {
                      alt: "Woman in London scanning a QR code on a Coke Zero digital outdoor display",
                      asset: {
                        _id: "image-9af54778d93fd028bd057bcf2d05561583fb6296-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/9af54778d93fd028bd057bcf2d05561583fb6296-284x272.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Piccadilly Lights takeover for Coke Zero #TakeATaste with an interactive anamorphic display",
                    asset: { _ref: "image-ba21289beb89a4fe4808b59660afe4fa22f23d62-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Coca-Cola",
                      "Coke Zero",
                      "#TakeATaste",
                      "Piccadilly Lights",
                      "Interactive AR",
                      "Anamorphic Billboard",
                      "Digital six-sheet",
                      "Outdoor Media Campaign",
                      "DOOH",
                      "creative technology",
                    ],
                    metaDescription:
                      "Interactive AR campaign for Coke Zero, turning Piccadilly Lights and digital six-sheets into playful moments of can grabbing, gameplay and reward.",
                    metaTitle: "Coke Zero #TakeATaste AR Interactive Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Piccadilly Lights takeover for Coke Zero #TakeATaste with an interactive anamorphic display",
                      asset: {
                        _id: "image-ba21289beb89a4fe4808b59660afe4fa22f23d62-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/ba21289beb89a4fe4808b59660afe4fa22f23d62-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "cocacola-coke-zero-take-a-taste-interactive" },
                  title: "Coke Zero\nInteractive DOOH",
                  year: null,
                },
                {
                  _id: "b5accacb-0847-450c-9437-42059ec77918",
                  _updatedAt: "2026-05-29T11:37:26Z",
                  category: ["Interactive", "Immersive"],
                  client: "Nespresso",
                  description: "A 360° immersive journey redefining luxury retail through taste.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/22d6191cfda57f0f1d20aa9761e5464cc48a98dc-1200x630.png",
                  images: [
                    {
                      alt: "3D render of a glass coffee tasting experience floating on a European lake",
                      asset: {
                        _id: "image-b2d6892d99cbd9f8f6c9491395eaf0a3d6338085-1080x1056-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/b2d6892d99cbd9f8f6c9491395eaf0a3d6338085-1080x1056.jpg",
                      },
                    },
                    {
                      alt: "Hubert Wallner and a Nespresso representative sharing coffee beside a European lake",
                      asset: {
                        _id: "image-56ad2041b55e855e25254ecc5cdb25e0841692b2-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/56ad2041b55e855e25254ecc5cdb25e0841692b2-1080x1387.jpg",
                      },
                    },
                    {
                      alt: "3D render of a glass coffee tasting experience surrounded by immersive digital lake displays",
                      asset: {
                        _id: "image-0dd64de9efb51cce5201fcf9da1ccc1b8fa467d8-1080x1056-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/0dd64de9efb51cce5201fcf9da1ccc1b8fa467d8-1080x1056.jpg",
                      },
                    },
                    {
                      alt: "Close-up of a restaurant coffee setup featuring a Nespresso machine and coffee pods",
                      asset: {
                        _id: "image-1c1a9cf3b8e61fa95dcc9950be0978dc75c7cad2-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/1c1a9cf3b8e61fa95dcc9950be0978dc75c7cad2-1080x1387.jpg",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of a glass Nespresso coffee tasting experience floating on a European lake",
                    asset: { _ref: "image-22d6191cfda57f0f1d20aa9761e5464cc48a98dc-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Nespresso Vienna",
                      "Immersive tasting",
                      "Luxury retail experience",
                      "Sensorial design",
                      "Digital displays",
                      "Coffee experience",
                      "creative technology",
                    ],
                    metaDescription:
                      "Luxury immersive tasting experience for Nespresso Vienna, blending digital displays, sensorial effects and storytelling to reimagine coffee discovery.",
                    metaTitle: "Nespresso Vienna Immersive Tasting Experience",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of a glass Nespresso coffee tasting experience floating on a European lake",
                      asset: {
                        _id: "image-3715607a30cbfdbdda49258e3b1354eb861c1058-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3715607a30cbfdbdda49258e3b1354eb861c1058-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "nespresso-immersive-room-vienna" },
                  title: "A Journey Through Taste",
                  year: null,
                },
                {
                  _id: "bb5783f8-bdcb-45a0-84b7-4c8fe5111d39",
                  _updatedAt: "2026-05-29T11:32:57Z",
                  category: ["3D", "Immersive", "Interactive"],
                  client: "McLaren",
                  description:
                    "Reintroducing McLaren to South Korea and bringing the excitement and prestige of the brand to life in a way that felt as dynamic as the car itself.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/0619a85dc5f34f005e10b25aa16fe47988fcecdf-1200x641.png",
                  images: [
                    {
                      alt: "3D render of the red McLaren Artura Spider created for the Korea launch experience",
                      asset: {
                        _id: "image-ca70c29618cf71c4bb8707f83c45bd9d668eaf01-284x160-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/ca70c29618cf71c4bb8707f83c45bd9d668eaf01-284x160.png",
                      },
                    },
                    {
                      alt: "Close-up 3D render of the McLaren badge on the front grille of the Artura Spider",
                      asset: {
                        _id: "image-475fcb8ff65b013faee2bba2c3f9226ef3bd7314-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/475fcb8ff65b013faee2bba2c3f9226ef3bd7314-284x272.png",
                      },
                    },
                    {
                      alt: "Cherry blossoms over a river in Seoul, South Korea",
                      asset: {
                        _id: "image-719f0b9428b36dd458722e2ae29d27471512354e-284x177-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/719f0b9428b36dd458722e2ae29d27471512354e-284x177.png",
                      },
                    },
                    {
                      alt: "3D render of cherry blossoms floating through a bright blue sky environment",
                      asset: {
                        _id: "image-17bf863659b28b7e73d020b2b574922560ace3dc-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/17bf863659b28b7e73d020b2b574922560ace3dc-284x272.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of the blue McLaren Artura Spider on stage with blossoms reflected in the bodywork",
                    asset: { _ref: "image-0619a85dc5f34f005e10b25aa16fe47988fcecdf-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "McLaren Artura Spider",
                      "Korea launch",
                      "Seoul event",
                      "interactive installation",
                      "3D car renders",
                      "interactive installation",
                      "cherry blossom experience",
                      "luxury automotive",
                      "creative technology",
                    ],
                    metaDescription:
                      "Launch experience for McLaren Artura Spider in Seoul, blending cinematic 3D car visuals, Korean-inspired storytelling and interactive cherry blossoms.",
                    metaTitle: "McLaren Artura Spider Korea Launch Experience",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of the blue McLaren Artura Spider on stage with blossoms reflected in the bodywork",
                      asset: {
                        _id: "image-0619a85dc5f34f005e10b25aa16fe47988fcecdf-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/0619a85dc5f34f005e10b25aa16fe47988fcecdf-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "mclaren-artura-spider-s-korea-launch-event" },
                  title: "Artura Spider\nS.Korea Launch Event",
                  year: 2025,
                },
                {
                  _id: "19e28cac-b8ff-48c7-8f7f-6fbf863dc126",
                  _updatedAt: "2026-05-28T11:09:20Z",
                  category: ["3D", "DOOH"],
                  client: "Gate Zero",
                  description:
                    "A series of cinematic visuals that transformed the store’s key screens into atmospheric windows into a futuristic world of motion.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/70150bd53b407b73e7b8fa4f9b9148d5763002a7-1200x630.png",
                  images: [
                    {
                      alt: "3D render of the GATEZERO logo embossed on a brushed metallic surface",
                      asset: {
                        _id: "image-ea8e09a37c30a1f51f22d53234e4d1a1859430a7-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/ea8e09a37c30a1f51f22d53234e4d1a1859430a7-284x383.png",
                      },
                    },
                    {
                      alt: "3D render of polished metallic aeroplane bodywork with reflective detailing",
                      asset: {
                        _id: "image-7962d339aa889c7722ca23444432d476891ea2dd-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7962d339aa889c7722ca23444432d476891ea2dd-284x319.png",
                      },
                    },
                    {
                      alt: "3D render of GATEZERO graphic typography applied to a metallic aeroplane surface",
                      asset: {
                        _id: "image-5ad963f1f43480ca42e614daaff308a930f62e42-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/5ad963f1f43480ca42e614daaff308a930f62e42-284x383.png",
                      },
                    },
                    {
                      alt: "3D render of a white cloth draped over a futuristic concept jet",
                      asset: {
                        _id: "image-9702a1e1c01a9cef6886167ef9513ba9212e2720-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/9702a1e1c01a9cef6886167ef9513ba9212e2720-284x319.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of a white cloth draped over a futuristic concept jet for GATEZERO Frankfurt",
                    asset: { _ref: "image-70150bd53b407b73e7b8fa4f9b9148d5763002a7-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "3D visual design",
                      "Retail experience",
                      "GATEZERO Frankfurt",
                      "Aviation inspired 3D design",
                      "Motion Graphics",
                      "Travel retail",
                      "Futuristic aviation visuals",
                    ],
                    metaDescription:
                      "Immersive 3D visuals for GATEZERO Frankfurt, blending futuristic aircraft design, metallic textures and atmospheric motion for premium retail.",
                    metaTitle: "GATEZERO Frankfurt Retail Visuals",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of a white cloth draped over a futuristic concept jet for GATEZERO Frankfurt",
                      asset: {
                        _id: "image-7178bbfa4a636a613ffc0dbebae9ab21624981f9-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7178bbfa4a636a613ffc0dbebae9ab21624981f9-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "gatezero-frankfurt" },
                  title: "Luxury Retail\nTakes Flight",
                  year: null,
                },
                {
                  _id: "6783be3c-a0de-4ba5-84e7-c8e3b9ea8cc5",
                  _updatedAt: "2026-05-29T11:37:06Z",
                  category: ["Web/App", "Interactive", "3D", "Immersive"],
                  client: "Nike",
                  description:
                    "We developed a prototype for real-time interactive 3D. It caught the attention of the Nike team just ahead of Nike Air Max Day (AMD).",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/1d57db5e7e2761843cdcb548a050d52806400cd0-1200x630.png",
                  images: [
                    {
                      alt: "Digital out-of-home display showing the Nike Air Max interactive 3D experience at Westfield Shopping Centre",
                      asset: {
                        _id: "image-22e4a00096b9e659270b89f2560a8d3441806dc4-284x212-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/22e4a00096b9e659270b89f2560a8d3441806dc4-284x212.png",
                      },
                    },
                    {
                      alt: "3D render of Nike accessories floating in a zero-gravity environment",
                      asset: {
                        _id: "image-995a4f05e75475302cef48551ca8b78a5edb8ed4-284x326-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/995a4f05e75475302cef48551ca8b78a5edb8ed4-284x326.png",
                      },
                    },
                    {
                      alt: "3D render of Nike trainers floating in a zero-gravity environment",
                      asset: {
                        _id: "image-aa56e27d5d8ab8c999bf068909ce703f08e552c9-284x177-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/aa56e27d5d8ab8c999bf068909ce703f08e552c9-284x177.png",
                      },
                    },
                    {
                      alt: "3D render of Nike trainers and shoe boxes floating in a zero-gravity environment",
                      asset: {
                        _id: "image-947ab879b78d0ddea5a2b42bbfb83239d44432a1-284x326-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/947ab879b78d0ddea5a2b42bbfb83239d44432a1-284x326.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Nike Air Max trainers floating in a zero-gravity 3D environment for an interactive anamorphic billboard",
                    asset: { _ref: "image-1d57db5e7e2761843cdcb548a050d52806400cd0-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Nike Air Max",
                      "Anamorphic billboard",
                      "Unity",
                      "WebGL",
                      "Air Max Day",
                      "Interactive 3D",
                      "DOOH",
                      "Digital out-of-home display",
                      "creative technology",
                    ],
                    metaDescription:
                      "Interactive 3D anamorphic billboard for Nike Air Max, built in Unity and WebGL for a personalised launch experience at Westfield Shopping Centre. ",
                    metaTitle: "Nike Air Max Interactive 3D Billboard",
                    noindex: null,
                    ogImage: {
                      alt: "Nike Air Max trainers floating in a zero-gravity 3D environment for an interactive anamorphic billboard",
                      asset: {
                        _id: "image-55758373b52a3498dabe3a47839c9f488ecde1e3-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/55758373b52a3498dabe3a47839c9f488ecde1e3-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "nike-interactive-amd" },
                  title: "Air Max Day\nInteractive",
                  year: null,
                },
                {
                  _id: "57abe18a-e494-4b1a-8b17-8f2709fd83b8",
                  _updatedAt: "2026-05-29T11:36:13Z",
                  category: ["Web/App", "3D", "Interactive", "VR/AR"],
                  client: "Hoka",
                  description:
                    "We partnered with HOKA to create an immersive AR experience that brings the scale and spirit of UTMB to life.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/caa2c3344cf76cdefd16be0302e7404342789279-1200x630.png",
                  images: [
                    {
                      alt: "3D render of a low-poly HOKA shoe world with a cable car travelling over the mountain",
                      asset: {
                        _id: "image-f515dcd06547ab068280a64fd69194ecff429a61-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f515dcd06547ab068280a64fd69194ecff429a61-284x319.png",
                      },
                    },
                    {
                      alt: "Wide 3D render of a HOKA shoe world showing activities around the mountain base camp",
                      asset: {
                        _id: "image-cd0c940f40d3795e59133db2659480d1e8b4f8bb-284x214-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/cd0c940f40d3795e59133db2659480d1e8b4f8bb-284x214.png",
                      },
                    },
                    {
                      alt: "3D render of a low-poly HOKA shoe world with a runner crossing the start and finish line",
                      asset: {
                        _id: "image-7302a2ad7f231dd30404433b7aa27404f244be1d-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7302a2ad7f231dd30404433b7aa27404f244be1d-284x383.png",
                      },
                    },
                    {
                      alt: "3D render of the HOKA shoe world showing the base camp building",
                      asset: {
                        _id: "image-b38081d21c23c44c299dd0aca6473414852a758e-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/b38081d21c23c44c299dd0aca6473414852a758e-284x319.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "HOKA shoe-shaped 3D world reimagining Mont Blanc as an immersive AR experience",
                    asset: { _ref: "image-caa2c3344cf76cdefd16be0302e7404342789279-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "HOKA UTMB",
                      "AR experience",
                      "3D shoe world",
                      "360 interviews",
                      "athlete storytelling",
                      "Mont Blanc",
                      "trail running",
                      "sport retail experience",
                      "creative technology",
                    ],
                    metaDescription:
                      "Immersive AR experience for HOKA at UTMB, combining a playful 3D shoe world, 360 athlete interviews and mountain training camp stories.",
                    metaTitle: "HOKA UTMB AR Training Camp Experience",
                    noindex: null,
                    ogImage: {
                      alt: "HOKA shoe-shaped 3D world reimagining Mont Blanc as an immersive AR experience",
                      asset: {
                        _id: "image-caa2c3344cf76cdefd16be0302e7404342789279-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/caa2c3344cf76cdefd16be0302e7404342789279-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "hoka-utmb-base-camp-web-ar-experience" },
                  title: "UTMB Base Camp\nWeb AR Experience",
                  year: null,
                },
                {
                  _id: "60d590da-a1a5-4d3a-b6cf-3f1a575fbe7f",
                  _updatedAt: "2026-05-29T11:37:16Z",
                  category: ["Web/App", "Brand"],
                  client: "Squatwolf",
                  description: "We developed a complete app and website experience for Squatwolf.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/f6c840842a782e43f8143233c1f1e1ef5d2e392c-1200x630.png",
                  images: [
                    {
                      alt: "Dramatic black and white portrait of a male athlete wearing sunglasses",
                      asset: {
                        _id: "image-166966f81255fe122181778d0faf612a3e9e09bf-284x240-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/166966f81255fe122181778d0faf612a3e9e09bf-284x240.png",
                      },
                    },
                    {
                      alt: "SQUATWOLF e-commerce app homepage featuring a sportswoman wearing an athletic hijab",
                      asset: {
                        _id: "image-5f9e148a326237201f4003a4d6408ce36248885a-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/5f9e148a326237201f4003a4d6408ce36248885a-284x383.png",
                      },
                    },
                    {
                      alt: "Sportswoman wearing an athletic tank top, photographed from behind",
                      asset: {
                        _id: "image-991bfdefb189b2f543eb227b637439e8b426b9a9-284x250-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/991bfdefb189b2f543eb227b637439e8b426b9a9-284x250.png",
                      },
                    },
                    {
                      alt: "SQUATWOLF e-commerce app product listing page featuring athleisure wear",
                      asset: {
                        _id: "image-aba356402b7f45f7474c231f33ed0acdc5445217-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/aba356402b7f45f7474c231f33ed0acdc5445217-284x383.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "SQUATWOLF homepage design featuring a black and white image of an athlete wearing sunglasses",
                    asset: { _ref: "image-f6c840842a782e43f8143233c1f1e1ef5d2e392c-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "SQUATWOLF",
                      "e-commerce redesign",
                      "app design",
                      "athleisure brand",
                      "UX design",
                      "digital brand language",
                      "sportswear retail",
                      "creative technology",
                    ],
                    metaDescription:
                      "Redesign for SQUATWOLF, spanning brand language, e-commerce UX, app design and motion for a sharper athleisure shopping experience.",
                    metaTitle: "SQUATWOLF sports e-commerce website & app redesign",
                    noindex: null,
                    ogImage: {
                      alt: "SQUATWOLF homepage design featuring a black and white image of an athlete wearing sunglasses",
                      asset: {
                        _id: "image-7784bc704a5fb50cbe9bc4670e676a564f497e18-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7784bc704a5fb50cbe9bc4670e676a564f497e18-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "squatwolf-web-and-app-reimagining" },
                  title: "Web and App Reimagining ",
                  year: null,
                },
                {
                  _id: "aa9542c9-97c7-4225-a0ec-47dddb8180f9",
                  _updatedAt: "2026-05-29T11:35:38Z",
                  category: ["Immersive", "3D", "Game", "Interactive"],
                  client: "Adidas",
                  description:
                    "Mixed reality theatre of speed for the Women’s World Cup. In the lead-up to the Women’s World Cup, adidas transformed their London Flagship into a launch arena for X Crazyfast.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/bcebf6f2e8f9418dac5fbddb75d4ded9c5d8f88c-1200x641.png",
                  images: [
                    {
                      alt: "Close-up of the Adidas X Crazyfast football boot",
                      asset: {
                        _id: "image-caa4a5ceb28af9e5beea6bff40b5791b6a6b0346-1946x1080-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/caa4a5ceb28af9e5beea6bff40b5791b6a6b0346-1946x1080.png",
                      },
                    },
                    {
                      alt: "Adidas X Crazyfast retail display with mannequins set against a reactive light installation",
                      asset: {
                        _id: "image-754f7e1286380d4b8316db2373659f4411d6f8af-1144x1672-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/754f7e1286380d4b8316db2373659f4411d6f8af-1144x1672.png",
                      },
                    },
                    {
                      alt: "Close-up of hands using an Adidas X Crazyfast branded Xbox controller",
                      asset: {
                        _id: "image-0df7bea1d78ff22de7ae81fbf7e218e9a8661e42-2104x1664-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/0df7bea1d78ff22de7ae81fbf7e218e9a8661e42-2104x1664.png",
                      },
                    },
                    {
                      alt: "Adidas X Crazyfast esports area with branded stadium seats and FIFA gameplay on screen",
                      asset: {
                        _id: "image-a2c83d0128a9757f0edec6bbb602e11fdac2432d-2015x1655-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/a2c83d0128a9757f0edec6bbb602e11fdac2432d-2015x1655.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Adidas X Crazyfast retail display with mannequins set against a reactive light installation",
                    asset: { _ref: "image-bcebf6f2e8f9418dac5fbddb75d4ded9c5d8f88c-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Adidas",
                      "X Crazyfest",
                      "retail experience",
                      "FIFA",
                      "reactive lightning",
                      "motion graphics",
                      "e-sports zone",
                      "football launch",
                      "creative technology",
                    ],
                    metaDescription:
                      "Retail launch experience for Adidas X Crazyfast, combining motion graphics, reactive lighting and esports to bring unexpected speed to the London Flagship.",
                    metaTitle: "Adidas X Crazyfast Retail Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Adidas X Crazyfast retail display with mannequins set against a reactive light installation",
                      asset: {
                        _id: "image-bcebf6f2e8f9418dac5fbddb75d4ded9c5d8f88c-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/bcebf6f2e8f9418dac5fbddb75d4ded9c5d8f88c-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "adidas-x-crazyfast-london" },
                  title: "X Crazyfast",
                  year: null,
                },
                {
                  _id: "246e0f1a-fed5-4106-bfc2-e7ac5442c09f",
                  _updatedAt: "2026-05-29T08:32:34Z",
                  category: ["Web/App", "3D", "Interactive", "Brand"],
                  client: "Internal R&D",
                  description:
                    "Our AI-powered photo booth isn’t just tech, it’s a glimpse into how we rapidly turn emerging technology into immersive, creative experiences.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/071f450cf7ac62b5b827ba4bf3e2e3073dcb38a6-1200x641.png",
                  images: [
                    {
                      alt: "Face Your Fears logo for Dialect’s Halloween-themed AI photo booth experience",
                      asset: {
                        _id: "image-3060ff08c82cbd27c9c2dd5ca568aa2805b4ff08-568x354-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3060ff08c82cbd27c9c2dd5ca568aa2805b4ff08-568x354.png",
                      },
                    },
                    {
                      alt: "3D render of an 80s video rental-inspired digital display featuring the AI photo booth tech demo",
                      asset: {
                        _id: "image-7057b97f018b84e883b610a3cf1c99bbaabd3c89-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7057b97f018b84e883b610a3cf1c99bbaabd3c89-568x766.png",
                      },
                    },
                    {
                      alt: "3D render of a VHS cover featuring an AI-generated augmented selfie",
                      asset: {
                        _id: "image-1a8e657fd1d3a245ecf665ab87b022799eeaf4dc-568x622-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/1a8e657fd1d3a245ecf665ab87b022799eeaf4dc-568x622.png",
                      },
                    },
                    {
                      alt: "Face Your Fears ghost mascot icon holding a camera",
                      asset: {
                        _id: "image-acbd24e86799edd630aa8e73b3de3ba28b3c0c33-568x354-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/acbd24e86799edd630aa8e73b3de3ba28b3c0c33-568x354.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of an 80s video rental-inspired AI photo booth display for Face Your Fears",
                    asset: { _ref: "image-071f450cf7ac62b5b827ba4bf3e2e3073dcb38a6-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Halloween AI photo booth",
                      "Face Your Fears",
                      "AI Experience",
                      "creative technology",
                      "Halloween activation",
                      "Retail activation",
                      "immersive photo experience",
                      "cloud-based AI",
                    ],
                    metaDescription:
                      "AI-powered Halloween photo booth by Studio Dialect, turning selfies into cinematic VHS-style portraits through a fast, cloud-based creative experience.",
                    metaTitle: "Face Your Fears Halloween AI Photo Booth",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of an 80s video rental-inspired AI photo booth display for Face Your Fears",
                      asset: {
                        _id: "image-071f450cf7ac62b5b827ba4bf3e2e3073dcb38a6-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/071f450cf7ac62b5b827ba4bf3e2e3073dcb38a6-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "netflix-face-your-fears-ai-photobooth" },
                  title: "Face Your Fears\nAI Photobooth",
                  year: 2025,
                },
                {
                  _id: "dc1af156-77f1-4dbb-a5d5-2b0c07a59839",
                  _updatedAt: "2026-05-29T11:33:52Z",
                  category: ["3D"],
                  client: "Mont Blanc",
                  description:
                    "For the 100th anniversary of the Meisterstück, we created a series of 3D animations that celebrated a century of craftsmanship through a contemporary lens.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/84882cf7d307e0ffe8aed1bb671f52c1ba46e17c-1200x641.png",
                  images: [
                    {
                      alt: "3D render of a cloud inside a branded wireframe box, lit by sunlight for the Montblanc Meisterstück experience",
                      asset: {
                        _id: "image-f1baf2843cec4811bf467dca70f0a8ec53df2be9-568x544-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f1baf2843cec4811bf467dca70f0a8ec53df2be9-568x544.png",
                      },
                    },
                    {
                      alt: "Extreme close-up 3D render of the Montblanc Meisterstück pen nib",
                      asset: {
                        _id: "image-c1f050e4fddb8ffd8a900f9e66fa061f7b0c49b1-568x744-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c1f050e4fddb8ffd8a900f9e66fa061f7b0c49b1-568x744.png",
                      },
                    },
                    {
                      alt: "Exterior store render with large-format window displays showing Montblanc Meisterstück 3D visuals",
                      asset: {
                        _id: "image-633f91d5ca96ab92c7c4119c1669671bc654bee4-568x544-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/633f91d5ca96ab92c7c4119c1669671bc654bee4-568x544.png",
                      },
                    },
                    {
                      alt: "In-store render of a large-format display featuring 3D cloud visuals for Montblanc",
                      asset: {
                        _id: "image-d0381687a8a5c699b19f290ab9897a38eeefc9d7-568x376-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/d0381687a8a5c699b19f290ab9897a38eeefc9d7-568x376.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of the Montblanc Meisterstück emerging the clouds",
                    asset: { _ref: "image-84882cf7d307e0ffe8aed1bb671f52c1ba46e17c-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Montblanc Meisterstück",
                      "luxury retail experience",
                      "3D product visuals",
                      "interactive clouds",
                      "digital storytelling",
                      "gesture controls",
                      "Checkland Kindleysides",
                      "Large format display content",
                      "creative technology",
                    ],
                    metaDescription:
                      "Retail experience for Montblanc Meisterstück’s 100th anniversary, blending luxury 3D product visuals, cloud interaction and elegant digital storytelling.",
                    metaTitle: "Montblanc Meisterstück Retail Experience",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of the Montblanc Meisterstück emerging the clouds",
                      asset: {
                        _id: "image-c4e87a70333ebb47da74e79e200d07b209987044-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c4e87a70333ebb47da74e79e200d07b209987044-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "montblanc-interactive-clouds-holograms" },
                  title: "Capturing Exquisite Craftsmanship",
                  year: null,
                },
                {
                  _id: "e54f3d34-b0fd-4cba-b12b-6a8ab03c48d7",
                  _updatedAt: "2026-05-29T11:34:25Z",
                  category: ["Interactive", "Immersive"],
                  client: "Heinmann",
                  description:
                    "A fluid interactive experience woven into the fabric of Copenhagens airport retail space.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/3ad7dc98356e3793929a67c71cffaabfe8c04a5d-1200x641.png",
                  images: [
                    {
                      alt: "3D render of water floating and moving through the air",
                      asset: {
                        _id: "image-17ebfb243793c19a986e4b57d45f2e5fa55f78e7-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/17ebfb243793c19a986e4b57d45f2e5fa55f78e7-284x383.png",
                      },
                    },
                    {
                      alt: "Over-the-shoulder shot of a visitor interacting with the Heinemann Copenhagen retail experience",
                      asset: {
                        _id: "image-782aa03f341993feddfb50195a743c99d0ca099b-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/782aa03f341993feddfb50195a743c99d0ca099b-284x319.png",
                      },
                    },
                    {
                      alt: "3D water simulation showing water flowing through a rocky river environment",
                      asset: {
                        _id: "image-92fe36d84e7789d270587df032f146dbd1269b39-284x319-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/92fe36d84e7789d270587df032f146dbd1269b39-284x319.png",
                      },
                    },
                    {
                      alt: "3D render of suspended water moving through the air",
                      asset: {
                        _id: "image-25afbda4d7f93bc1c3b4e1d4e5b8a5ce21a0180a-284x214-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/25afbda4d7f93bc1c3b4e1d4e5b8a5ce21a0180a-284x214.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Visitor interacting with the Heinemann Copenhagen retail experience on a large digital screen",
                    asset: { _ref: "image-3ad7dc98356e3793929a67c71cffaabfe8c04a5d-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Heinemann Copenhagen",
                      "interactive retail",
                      "travel retail",
                      "3D water simulation",
                      "touch interaction",
                      "premium retail experience",
                      "Checkland Kindleysides",
                      "creative technology",
                    ],
                    metaDescription:
                      "Interactive retail experience for Heinemann Copenhagen, blending water-inspired 3D visuals, touch interaction and premium product discovery.",
                    metaTitle: "Heinemann Interactive Retail Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Visitor interacting with the Heinemann Copenhagen retail experience on a large digital screen",
                      asset: {
                        _id: "image-3ad7dc98356e3793929a67c71cffaabfe8c04a5d-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3ad7dc98356e3793929a67c71cffaabfe8c04a5d-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "heinemann-copenhagen-fluid-by-design-interactive-retail" },
                  title: "Fluid by Design",
                  year: null,
                },
                {
                  _id: "6b564c1e-707f-4ae0-a8fe-7a90497e46dc",
                  _updatedAt: "2026-05-29T11:33:25Z",
                  category: ["Web/App", "VR/AR", "3D", "Brand", "Game"],
                  client: "Heinemann",
                  description: "A seasonal AR moment designed to bring a little softness into the rush of travel.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/3675b9d030627d7a33d0f47f5cfbbde1c1cab6d4-1200x630.png",
                  images: [
                    {
                      alt: "3D render of a stylised floral bouquet for the Blossom and Bloom AR experience",
                      asset: {
                        _id: "image-4e59b3b31536429fcb1f1e6cb96c973a077c593d-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/4e59b3b31536429fcb1f1e6cb96c973a077c593d-1080x1387.jpg",
                      },
                    },
                    {
                      alt: "Blossom and Bloom identity featuring decorative floral letterforms",
                      asset: {
                        _id: "image-e47a2ac32d0b0de8fa429315b03cba2a3201784a-1080x889-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e47a2ac32d0b0de8fa429315b03cba2a3201784a-1080x889.jpg",
                      },
                    },
                    {
                      alt: "Mobile AR experience mockup with flowers gently floating around the screen",
                      asset: {
                        _id: "image-94ce5129cfabcd0a3afc3aa1a02d6d0311ff1501-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/94ce5129cfabcd0a3afc3aa1a02d6d0311ff1501-1080x1387.jpg",
                      },
                    },
                    {
                      alt: "Behind-the-scenes shot of a team member testing the Blossom and Bloom AR experience",
                      asset: {
                        _id: "image-f5882658c03c0034d2cd47dbb5c81cac013e85ba-1080x889-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f5882658c03c0034d2cd47dbb5c81cac013e85ba-1080x889.jpg",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D flowers gently falling across the Blossom and Bloom AR Mother’s Day experience",
                    asset: { _ref: "image-3675b9d030627d7a33d0f47f5cfbbde1c1cab6d4-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Blossom and Bloom",
                      "AR experience",
                      "Mother’s Day",
                      "personalised bouquet",
                      "procedural 3D flowers",
                      "travel retail experience",
                      "creative technology",
                    ],
                    metaDescription:
                      "Personalised AR bouquet experience for Mother’s Day, using procedural 3D flowers to create unique digital cards for travellers to share.",
                    metaTitle: "Blossom and Bloom AR Experience",
                    noindex: null,
                    ogImage: {
                      alt: "3D flowers gently falling across the Blossom and Bloom AR Mother’s Day experience",
                      asset: {
                        _id: "image-3675b9d030627d7a33d0f47f5cfbbde1c1cab6d4-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3675b9d030627d7a33d0f47f5cfbbde1c1cab6d4-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "heinemann-blossom-and-bloom-ar-experience" },
                  title: "Blossom & Bloom\nAR Experience",
                  year: null,
                },
                {
                  _id: "cee35b49-857d-455e-9533-6bb65ee42ea4",
                  _updatedAt: "2026-05-29T11:35:47Z",
                  category: ["3D", "DOOH"],
                  client: "Google",
                  description:
                    "A milestone moment for Google as they introduced their next evolution in phone technology, the Pixel Fold.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/b31ff60b0d5dbd6a6e01b46c9a89b4ec36464a17-1200x641.png",
                  images: [
                    {
                      alt: "3D render of a photorealistic chameleon sitting on a Google Pixel Fold and looking at a butterfly",
                      asset: {
                        _id: "image-3bb41d0ab0a73daca40c791dd14dbb200354b0a5-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3bb41d0ab0a73daca40c791dd14dbb200354b0a5-284x383.png",
                      },
                    },
                    {
                      alt: "Google Pixel Fold anamorphic billboard installation created by Studio Dialect",
                      asset: {
                        _id: "image-07f42e9febdb51bcb4ab20034b2adb6e4495db92-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/07f42e9febdb51bcb4ab20034b2adb6e4495db92-284x272.png",
                      },
                    },
                    {
                      alt: "3D render of a photorealistic chameleon sitting on a Google Pixel Fold",
                      asset: {
                        _id: "image-f27b8ad383ba1182fdcb4c36e7efbe4c283a2ead-284x159-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f27b8ad383ba1182fdcb4c36e7efbe4c283a2ead-284x159.png",
                      },
                    },
                    {
                      alt: "Two views of the Google Pixel Fold anamorphic billboard installation",
                      asset: {
                        _id: "image-91737347504fccfa3025fffbe3b755897b9bda74-284x298-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/91737347504fccfa3025fffbe3b755897b9bda74-284x298.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Google Pixel Fold anamorphic installation showing a chameleon emerging from the screen",
                    asset: { _ref: "image-b31ff60b0d5dbd6a6e01b46c9a89b4ec36464a17-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Google Pixel Fold",
                      "anamorphic billboard",
                      "photorealistic 3D",
                      "character animation",
                      "product launch",
                      "3D installation",
                      "DOOH",
                      "creative technology",
                    ],
                    metaDescription:
                      "Anamorphic billboard installation for Google Pixel Fold, using photoreal 3D, playful character animation and immersive scenes to showcase the folding display.",
                    metaTitle: "Google Pixel Fold Anamorphic Billboard",
                    noindex: null,
                    ogImage: {
                      alt: "Google Pixel Fold anamorphic installation showing a chameleon emerging from the screen",
                      asset: {
                        _id: "image-b31ff60b0d5dbd6a6e01b46c9a89b4ec36464a17-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/b31ff60b0d5dbd6a6e01b46c9a89b4ec36464a17-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "google-pixel-fold-anamorphic-billboard" },
                  title: "Pixel Fold\nAnamorphic",
                  year: null,
                },
                {
                  _id: "8d2844b2-c3c5-4c91-a878-52bf26d55aee",
                  _updatedAt: "2026-05-29T11:34:37Z",
                  category: ["3D"],
                  client: "Breitling",
                  description:
                    "Known for their precision, innovation, and deep roots in aviation, we developed a series of detailed 3D animations for Breitling.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/da7255055448eccbd3c1520fbaeaf641190785a6-1200x641.png",
                  images: [
                    {
                      alt: "3D render of an exploded Breitling Navitimer watch in a stylised wireframe view",
                      asset: {
                        _id: "image-7c4ae2937612c732fd9d864466349227f99418af-568x544-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/7c4ae2937612c732fd9d864466349227f99418af-568x544.png",
                      },
                    },
                    {
                      alt: "Storefront large-format display featuring 3D beauty renders of the Breitling Navitimer",
                      asset: {
                        _id: "image-61aa79d3ee40f7110cb58c45c30151026a6b29ff-568x650-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/61aa79d3ee40f7110cb58c45c30151026a6b29ff-568x650.png",
                      },
                    },
                    {
                      alt: "Extreme close-up 3D render of the Breitling Navitimer watch face",
                      asset: {
                        _id: "image-e4c3b413151f75be3f643b135c0fcf471689dede-568x350-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e4c3b413151f75be3f643b135c0fcf471689dede-568x350.png",
                      },
                    },
                    {
                      alt: "Detailed 3D close-up of the Breitling Navitimer watch face",
                      asset: {
                        _id: "image-5e88c278f7ed7f8c0422a21acb0922c5ff66fbb6-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/5e88c278f7ed7f8c0422a21acb0922c5ff66fbb6-568x766.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Breitling Navitimer 3D render showing the watch face and precision aviation-inspired design",
                    asset: { _ref: "image-da7255055448eccbd3c1520fbaeaf641190785a6-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Breitling Navitimer",
                      "3D watch animation",
                      "large format retail display",
                      "holographic visuals",
                      "aviation-inspired design",
                      "luxury watch",
                      "Checkland Kindleysides",
                      "creative technology",
                    ],
                    metaDescription:
                      "3D retail animations for Breitling Navitimer, blending precision watch detail, aviation-inspired motion and holographic display storytelling.",
                    metaTitle: "Breitling Navitimer 3D Retail Animations",
                    noindex: null,
                    ogImage: {
                      alt: "Breitling Navitimer 3D render showing the watch face and precision aviation-inspired design",
                      asset: {
                        _id: "image-da7255055448eccbd3c1520fbaeaf641190785a6-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/da7255055448eccbd3c1520fbaeaf641190785a6-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "breitling-3d-holograms" },
                  title: "Time Takes Flight",
                  year: null,
                },
                {
                  _id: "2be3b5b3-3eaf-413a-acbc-18413f563de6",
                  _updatedAt: "2026-05-29T11:33:29Z",
                  category: ["Interactive", "3D", "Brand", "Game"],
                  client: "Heinemann",
                  description:
                    "A retro 1980s inspired skiing game designed to make Heinemann retail spaces more playful and engaging.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/3ee17c7c3180fca574ba4ba7ec82d14a003f68e3-1200x641.png",
                  images: [
                    {
                      alt: "3D render of a Skimasters character racing down a stylised low-poly ski slope",
                      asset: {
                        _id: "image-3f1cf1dd3bf4fb4eb3420683862ab6d0a22687cc-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3f1cf1dd3bf4fb4eb3420683862ab6d0a22687cc-1080x1387.jpg",
                      },
                    },
                    {
                      alt: "Behind-the-scenes shot of a 3D artist developing Skimasters in-game assets",
                      asset: {
                        _id: "image-88090b219bf3adc92092462683b90f42d16a2871-1080x608-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/88090b219bf3adc92092462683b90f42d16a2871-1080x608.jpg",
                      },
                    },
                    {
                      alt: "3D render of a Skimasters character posing mid-air above a ski slope",
                      asset: {
                        _id: "image-837ef5a6eb4da7d3df919a66f4b6df648412fc4c-1080x1387-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/837ef5a6eb4da7d3df919a66f4b6df648412fc4c-1080x1387.jpg",
                      },
                    },
                    {
                      alt: "Skimasters logo for Heinemann’s retro-inspired travel retail game",
                      asset: {
                        _id: "image-c09e516c2ab5f8413f32d9cbe4675fcecf9fd2d3-1080x944-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c09e516c2ab5f8413f32d9cbe4675fcecf9fd2d3-1080x944.jpg",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "In-store design render showing large-format digital displays suspended in a clean branded retail environment",
                    asset: { _ref: "image-3ee17c7c3180fca574ba4ba7ec82d14a003f68e3-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Heinemann",
                      "travel retail game",
                      "low-poly 3D",
                      "multiplayer experience",
                      "festive retail",
                      "skiing game",
                      "motion controlled",
                      "creative technology",
                    ],
                    metaDescription:
                      "Retro-inspired motion controlled skiing game for Heinemann travel retail, combining low-poly 3D design, multiplayer gameplay and festive in-store interaction.",
                    metaTitle: "Heinemann Skimasters Motion Controlled Retail Game",
                    noindex: null,
                    ogImage: {
                      alt: "In-store design render showing large-format digital displays suspended in a clean branded retail environment",
                      asset: {
                        _id: "image-3ee17c7c3180fca574ba4ba7ec82d14a003f68e3-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3ee17c7c3180fca574ba4ba7ec82d14a003f68e3-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "heinemann-skimasters-multiplayer-game" },
                  title: "Skimasters\nMultiplayer Motion Game",
                  year: null,
                },
                {
                  _id: "42457cb2-6887-423e-9852-bc1ab4ce2a01",
                  _updatedAt: "2026-05-29T11:36:21Z",
                  category: ["Web/App", "VR/AR", "3D", "Interactive"],
                  client: "Hoka",
                  description:
                    "We returned to UTMB for a second year and this time we helped its primary sponsor HOKA continue to lead the pack with an immersive WebAR and 360 video experience.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/4076a8788b66f9408bd9491e4a21c1e438c71234-1200x630.png",
                  images: [
                    {
                      alt: "Close-up of a person holding a phone showing the HOKA UTMB WebAR experience",
                      asset: {
                        _id: "image-1bb62d9c661cb1ecc84922bbd2f1c6f0a3d69ec8-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/1bb62d9c661cb1ecc84922bbd2f1c6f0a3d69ec8-284x383.png",
                      },
                    },
                    {
                      alt: "Starting line of the UTMB race with runners preparing to begin",
                      asset: {
                        _id: "image-29357e795ce99ade6f4ef861bd34c391cc7beceb-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/29357e795ce99ade6f4ef861bd34c391cc7beceb-284x272.png",
                      },
                    },
                    {
                      alt: "3D render of the Mont Blanc mountain terrain used in the UTMB route experience",
                      asset: {
                        _id: "image-483ca53e2ba93873df39fcdfa3c74254163d93e4-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/483ca53e2ba93873df39fcdfa3c74254163d93e4-284x383.png",
                      },
                    },
                    {
                      alt: "Mobile device displaying a 3D render of the UTMB mountain terrain",
                      asset: {
                        _id: "image-c9cce103c304d1a2318b540ef4a361ecac226428-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c9cce103c304d1a2318b540ef4a361ecac226428-284x272.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Mobile phone showing the HOKA UTMB WebAR experience with interactive mountain route content",
                    asset: { _ref: "image-4076a8788b66f9408bd9491e4a21c1e438c71234-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "HOKA UTMB",
                      "WebAR",
                      "360 film",
                      "Ultra Trail Mont Blanc",
                      "interactive map",
                      "trail running",
                      "immersive sports experience",
                      "creative technology",
                    ],
                    metaDescription:
                      "Immersive WebAR and 360 film experience for HOKA at UTMB, bringing fans closer to the 170km Mont Blanc course, athletes and terrain.",
                    metaTitle: "HOKA UTMB WebAR & 360 Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Mobile phone showing the HOKA UTMB WebAR experience with interactive mountain route content",
                      asset: {
                        _id: "image-4076a8788b66f9408bd9491e4a21c1e438c71234-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/4076a8788b66f9408bd9491e4a21c1e438c71234-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "hoka-utmb-web-ar-experience" },
                  title: "UTMB\nWeb AR Experience",
                  year: null,
                },
                {
                  _id: "017eaf52-1651-4655-8df6-f98771cd7456",
                  _updatedAt: "2026-05-29T11:36:07Z",
                  category: ["DOOH", "3D", "Web/App", "Immersive", "Interactive"],
                  client: "Haeckels / Dulcie R&D",
                  description:
                    "We used a variety of web, offline and real-time technologies to create an immersive and connected e-commerce experience.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/62acef07a474464cfda03791105241f14bd5a5f1-1200x641.png",
                  images: [
                    {
                      alt: "Close-up 3D render of a Haeckels bottle surrounded by flowers and petals",
                      asset: {
                        _id: "image-97af13ddbe85ad6685900ddc54b0136f0a694b43-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/97af13ddbe85ad6685900ddc54b0136f0a694b43-284x272.png",
                      },
                    },
                    {
                      alt: "Behind-the-scenes Blender scene showing a 3D camera above a Haeckels bottle inside misted glass",
                      asset: {
                        _id: "image-75ad786e526f76eb64945f5240132171f3f4f5cc-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/75ad786e526f76eb64945f5240132171f3f4f5cc-284x383.png",
                      },
                    },
                    {
                      alt: "3D render of Haeckels bottles floating in space",
                      asset: {
                        _id: "image-80e35856f43162a224b8900cd66284f72da97abe-284x272-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/80e35856f43162a224b8900cd66284f72da97abe-284x272.png",
                      },
                    },
                    {
                      alt: "Mobile phone showing the Haeckels interactive experience with a bottle inside misted glass",
                      asset: {
                        _id: "image-060f33e1b24ca7849395c6019105e49aeba1947d-284x383-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/060f33e1b24ca7849395c6019105e49aeba1947d-284x383.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Haeckels bottle surrounded by flowers and petals in a close-up 3D product render",
                    asset: { _ref: "image-62acef07a474464cfda03791105241f14bd5a5f1-1200x641-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Haeckels",
                      "interactive DOOH",
                      "real-time 3D",
                      "anamorphic billboard",
                      "phone-controlled interaction",
                      "e-commerce experience",
                      "parallax design",
                      "creative technology",
                    ],
                    metaDescription:
                      "Live interactive DOOH experience R&D for Haeckels, using phone-controlled parallax, real-time 3D and anamorphic visuals to connect product discovery and purchase.",
                    metaTitle: "Haeckels Interactive DOOH Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Haeckels bottle surrounded by flowers and petals in a close-up 3D product render",
                      asset: {
                        _id: "image-62acef07a474464cfda03791105241f14bd5a5f1-1200x641-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/62acef07a474464cfda03791105241f14bd5a5f1-1200x641.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "haeckels-dulcie-live-interactive-dooh-research-and-development" },
                  title: "Live Interactive DOOH",
                  year: null,
                },
                {
                  _id: "091f0d45-2003-417b-a340-7560d35a525a",
                  _updatedAt: "2026-05-29T11:36:49Z",
                  category: ["VR/AR", "Immersive", "Web/App", "3D"],
                  client: "The North Face",
                  description:
                    "A VR experience shipped directly to press and influencers alongside the VECTIV shoe, transporting them into the heart of UTMB.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/c29bc1efd5f386ba3a30a7a04bc7b052a1b3f4bb-1824x1026.webp",
                  images: [
                    {
                      alt: "Trail runners wearing The North Face VECTIV shoes running across rocky mountain terrain",
                      asset: {
                        _id: "image-97f8b1e98d0e32073ad41040b1bec2952ac9abc1-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/97f8b1e98d0e32073ad41040b1bec2952ac9abc1-568x766.png",
                      },
                    },
                    {
                      alt: "VR headset view of a hiker walking through a grassy mountain field with digital mountain labels",
                      asset: {
                        _id: "image-f68ba8dca4a3b91cb4d6341b25b9e8a7dbffcfd0-568x622-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f68ba8dca4a3b91cb4d6341b25b9e8a7dbffcfd0-568x622.png",
                      },
                    },
                    {
                      alt: "Behind-the-scenes shot of a Titan 360 camera set up on a mountain",
                      asset: {
                        _id: "image-123f1be9c0ac33bfc7fd44b83ee7fd289b45144d-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/123f1be9c0ac33bfc7fd44b83ee7fd289b45144d-568x766.png",
                      },
                    },
                    {
                      alt: "VR headset view of a lakeside route at night with wayfinding graphics on screen",
                      asset: {
                        _id: "image-c42207fcd8bc1c74d01a2101772d3f967c620a58-568x622-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c42207fcd8bc1c74d01a2101772d3f967c620a58-568x622.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "Trail runners wearing The North Face VECTIV shoes crossing rocky mountain terrain",
                    asset: {
                      _ref: "image-c29bc1efd5f386ba3a30a7a04bc7b052a1b3f4bb-1824x1026-webp",
                      _type: "reference",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "The North Face VECTIV",
                      "immersive VR",
                      "trail running",
                      "360 video",
                      "UTMB",
                      "product storytelling",
                      "press experience",
                      "creative technology",
                    ],
                    metaDescription:
                      "Immersive VR experience for The North Face VECTIV, transporting press and influencers into UTMB mountain terrain through 360 content and product storytelling.",
                    metaTitle: "The North Face VECTIV VR Experience",
                    noindex: null,
                    ogImage: {
                      alt: "Trail runners wearing The North Face VECTIV shoes crossing rocky mountain terrain",
                      asset: {
                        _id: "image-c29bc1efd5f386ba3a30a7a04bc7b052a1b3f4bb-1824x1026-webp",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c29bc1efd5f386ba3a30a7a04bc7b052a1b3f4bb-1824x1026.webp",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "the-north-face-vectiv-immersive-vr-experience" },
                  title: "Vectiv Immersive\nVR Experience",
                  year: null,
                },
                {
                  _id: "bcfb6215-427f-4686-9638-894c69f43089",
                  _updatedAt: "2026-07-06T08:40:36Z",
                  category: ["Brand", "Web/App", "3D"],
                  client: "Onava",
                  description:
                    "Transforming advanced therapeutic science into a confident and expressive brand visual language.",
                  imageUrl:
                    "https://cdn.sanity.io/images/z4rfkkmu/production/ca1586ff1d2bbf6fe6c9b07ea1d5a80b53fe2612-1200x630.png",
                  images: [
                    {
                      alt: "Onava logo",
                      asset: {
                        _id: "image-e72fb65cac7be0c067f082fadfacc263610504f6-570x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e72fb65cac7be0c067f082fadfacc263610504f6-570x766.png",
                      },
                    },
                    {
                      alt: "3D render of a robotic microscope examining a stylised cell and protein",
                      asset: {
                        _id: "image-5a1271b1233af72703de3fd499586cdeac4cbcbf-568x638-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/5a1271b1233af72703de3fd499586cdeac4cbcbf-568x638.png",
                      },
                    },
                    {
                      alt: "Mobile website mockup showing Onava’s modern minimal homepage hero section",
                      asset: {
                        _id: "image-9e85526e4f5eed5ed8b4c46dd281cd54a2f2946e-568x766-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/9e85526e4f5eed5ed8b4c46dd281cd54a2f2946e-568x766.png",
                      },
                    },
                    {
                      alt: "3D render of a stylised biological cell for Onava",
                      asset: {
                        _id: "image-3ee9d732bfdcd5d76e572e526f303807ad65e4af-568x638-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/3ee9d732bfdcd5d76e572e526f303807ad65e4af-568x638.png",
                      },
                    },
                  ],
                  mainImage: {
                    _type: "image",
                    alt: "3D render of a robotic microscope examining a stylised cell and protein for Onava",
                    asset: { _ref: "image-ca1586ff1d2bbf6fe6c9b07ea1d5a80b53fe2612-1200x630-png", _type: "reference" },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Onava",
                      "Advanced therapeutics",
                      "Biotech branding",
                      "3D science and cell visuals",
                      "Immersive website",
                      "Scientific visualisation",
                      "3D generator",
                      "creative technology",
                    ],
                    metaDescription:
                      "Brand, website and 3D visuals for Onava, combining advanced therapeutics, stylised cell design and interactive digital experience.",
                    metaTitle: "Onava Brand, Website & 3D Visuals",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of a robotic microscope examining a stylised cell and protein for Onava",
                      asset: {
                        _id: "image-0c4f3b757293fe422f086c4ed45c7e1d2cf035b8-1200x630-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/0c4f3b757293fe422f086c4ed45c7e1d2cf035b8-1200x630.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "onava-branding" },
                  title: "Shaping Advanced Therapeutics",
                  year: null,
                },
              ],
              research: [
                {
                  _id: "4a199f2a-d4c4-4a54-b790-2e7fd3d25d71",
                  _updatedAt: "2026-07-28T13:31:47Z",
                  date: "2026-07-15",
                  mainImage: {
                    alt: "Model wearing Grit outdoor wear sitting on a rock above the Peak District",
                    asset: {
                      _id: "image-f0667606f79100979902171fccf094ea4167f974-1200x630-jpg",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/f0667606f79100979902171fccf094ea4167f974-1200x630.jpg",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: [
                      "Grit outdoor brand",
                      "AI",
                      "AI Generated Imagery",
                      "brand concept",
                      "brand identity",
                      "Generative Imagery",
                      "technical apparel",
                    ],
                    metaDescription:
                      "GRIT is an experimental trail running brand created by Studio Dialect to explore new models for creative production.",
                    metaTitle: "Grit Outdoor Performance Brand",
                    noindex: false,
                    ogImage: {
                      alt: "Model wearing Grit outdoor wear sitting on a rock above the Peak District",
                      asset: {
                        _id: "image-f0667606f79100979902171fccf094ea4167f974-1200x630-jpg",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f0667606f79100979902171fccf094ea4167f974-1200x630.jpg",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "grit-outdoor-performance-brand" },
                  summary:
                    "GRIT is an experimental trail running brand created by Studio Dialect to explore new models for creative production.",
                  tags: null,
                  title: "Taste Is Everything",
                },
                {
                  _id: "63202133-f528-4f79-a420-31c344fba256",
                  _updatedAt: "2026-07-09T19:29:10Z",
                  date: "2026-07-09",
                  mainImage: {
                    alt: "PUMA NEYMAR JR. FUTURE Z: Animation Look Dev",
                    asset: {
                      _id: "image-2938f05d25d28ec1329abf792bf0ce7d24eef795-960x540-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/2938f05d25d28ec1329abf792bf0ce7d24eef795-960x540.png",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: ["motion graphics", "3d animation", "3d design ", "puma", "neymar jr", "netymar"],
                    metaDescription:
                      "PUMA NEYMAR JR. FUTURE Z: His first shoe with Puma - some BTS look dev for the interactive piece we did on Puma.com",
                    metaTitle: "PUMA NEYMAR JR. FUTURE Z: Animation Look Dev",
                    noindex: false,
                    ogImage: {
                      alt: "PUMA NEYMAR JR. FUTURE Z",
                      asset: {
                        _id: "image-2938f05d25d28ec1329abf792bf0ce7d24eef795-960x540-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/2938f05d25d28ec1329abf792bf0ce7d24eef795-960x540.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "puma-future-z-look-dev-archive" },
                  summary:
                    "NEYMAR JR. first shoe with Puma - some BTS look dev for the interactive piece we did on Puma.com",
                  tags: null,
                  title: "PUMA FUTURE Z LOOK DEV [Archive]",
                },
                {
                  _id: "7a005e14-3e37-44fa-b3fb-6830a2c7e07c",
                  _updatedAt: "2026-06-26T22:23:52Z",
                  date: "2026-06-26",
                  mainImage: {
                    alt: "AI-powered Virtual Try-On prototype for garments and glasses",
                    asset: {
                      _id: "image-5b3b33ba632b2aeb798e4ce21873eb84df6d407c-960x540-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/5b3b33ba632b2aeb798e4ce21873eb84df6d407c-960x540.png",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: ["vto", "virtual try-on", "ai vto ", "mobile", "interactive", "retail", "RND"],
                    metaDescription:
                      "An AI-powered Virtual Try-On prototype for garments and glasses, letting shoppers explore product variations in seconds and move effortlessly from try-on to checkout.",
                    metaTitle: "AI-powered Virtual Try-On prototype for garments and glasses",
                    noindex: false,
                    ogImage: {
                      alt: "AI-powered Virtual Try-On prototype for garments and glasses",
                      asset: {
                        _id: "image-5b3b33ba632b2aeb798e4ce21873eb84df6d407c-960x540-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/5b3b33ba632b2aeb798e4ce21873eb84df6d407c-960x540.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "virtual-try-on" },
                  summary:
                    "An AI-powered Virtual Try-On prototype for garments and glasses, letting shoppers explore product variations in seconds and move effortlessly from try-on to checkout.",
                  tags: null,
                  title: "Virtual Try-on",
                },
                {
                  _id: "677d5f7d-86fa-4e29-adbf-9e383b1257e7",
                  _updatedAt: "2026-07-09T12:27:38Z",
                  date: "2026-06-25",
                  mainImage: {
                    alt: "Dialect Lego Configurator thumbnail image with Redeemed custom minifigure",
                    asset: {
                      _id: "image-c2ce65e19837e9341715a4b254a82c8bf6e23d0a-960x540-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/c2ce65e19837e9341715a4b254a82c8bf6e23d0a-960x540.png",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: ["Lego", "RND", "Congifurator", "Mobile", "Interactive", "Handheld", "QR"],
                    metaDescription:
                      "A Studio Dialect R&D prototype for LEGO, combining QR mobile control, real-time 3D Minifig customisation and hand-tracking AR to create a playful in-store retail experience.",
                    metaTitle: "Dialect Custom Lego Box Configutator for Minifigures R&D",
                    noindex: false,
                    ogImage: {
                      alt: "Dialect Lego Configurator thumbnail image with handheld mobile interaction.",
                      asset: {
                        _id: "image-c2ce65e19837e9341715a4b254a82c8bf6e23d0a-960x540-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/c2ce65e19837e9341715a4b254a82c8bf6e23d0a-960x540.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "lego-configurator" },
                  summary:
                    "A playful prototype using small screens, QR interaction, real-time 3D and hand-tracking AR to create memorable in-store moments.",
                  tags: null,
                  title: "Lego Minifig Configurator",
                },
                {
                  _id: "41852926-c8de-4410-a07b-dfd12dd8f126",
                  _updatedAt: "2026-06-04T16:33:03Z",
                  date: "2026-05-24",
                  mainImage: {
                    alt: "AI powered kioks and mobile ready photobooth with total creative control. ",
                    asset: {
                      _id: "image-6edb697b59f646728a11cde3a60e45e2f234e3cf-960x540-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/6edb697b59f646728a11cde3a60e45e2f234e3cf-960x540.png",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: [
                      "ai",
                      "photobooth",
                      "kiosk",
                      "installation",
                      "artificial intelligence",
                      "interactive",
                      "physical activation",
                      "creative technology",
                      "brand experience",
                    ],
                    metaDescription:
                      "Studio R&D project showing off their flexible AI Photobooth solution that works across kiosk and mobile. ",
                    metaTitle: "Kiosk and Mobile AI Photobooth",
                    noindex: false,
                    ogImage: {
                      alt: "AI powered kioks and mobile ready photobooth with total creative control. ",
                      asset: {
                        _id: "image-6edb697b59f646728a11cde3a60e45e2f234e3cf-960x540-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/6edb697b59f646728a11cde3a60e45e2f234e3cf-960x540.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "kiosk-and-mobile-ai-photobooth" },
                  summary: "AI powered kiosk and mobile ready photobooth with total creative control. ",
                  tags: null,
                  title: "Kiosk and Mobile AI Photobooth",
                },
                {
                  _id: "0d532a5e-f67f-4dfd-a007-5b8b799ca3f0",
                  _updatedAt: "2026-05-29T11:02:13Z",
                  date: "2026-05-21",
                  mainImage: {
                    alt: "ACG logo over an interactive thermal screen capture showing heat-inspired human silhouettes",
                    asset: {
                      _id: "image-8fecda77657fa4a4c4d5a88a8d8306f9947f861f-3840x2160-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/8fecda77657fa4a4c4d5a88a8d8306f9947f861f-3840x2160.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "ACG",
                      "interactive thermal",
                      "R&D experience",
                      "motion tracking",
                      "responsive visuals",
                      "thermal silhouettes",
                      "creative technology",
                      "Creative technology",
                    ],
                    metaDescription:
                      "Interactive thermal R&D experience for ACG, transforming human movement into live heat-inspired silhouettes through responsive camera tracking.",
                    metaTitle: "ACG Interactive Thermal Camera Experience R&D",
                    noindex: null,
                    ogImage: {
                      alt: "ACG logo over an interactive thermal screen capture showing heat-inspired human silhouettes",
                      asset: null,
                    },
                  },
                  slug: { _type: "slug", current: "thermal-traces-acg-r-and-d" },
                  summary: "A capture experiment exploring the beauty of thermals in motion",
                  tags: null,
                  title: "Thermal Traces ACG R&D",
                },
                {
                  _id: "3fb00673-1825-4af7-a204-e51a1e27d0de",
                  _updatedAt: "2026-05-29T11:02:15Z",
                  date: "2026-05-01",
                  mainImage: {
                    alt: "HOKA Speedgoat7 runners climbing a trail on the side of a hill",
                    asset: {
                      _id: "image-6a2b4f3019b2399727195c75e4a7727cb720cd18-1920x1080-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/6a2b4f3019b2399727195c75e4a7727cb720cd18-1920x1080.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "HOKA",
                      "Speedgoat7",
                      "Speedgoat7 Challenge",
                      "Strava",
                      "Strava integration",
                      "Challenge microsite",
                      "running community",
                      "personalised results",
                      "global fitness challenge",
                      "elevation tracking experience",
                      "Creative technology",
                    ],
                    metaDescription:
                      "Global challenge microsite for HOKA, connecting Strava data to track elevation gain, personalised recaps and worldwide participant results.",
                    metaTitle: "HOKA Speedgoat7 Challenge Microsite",
                    noindex: null,
                    ogImage: {
                      alt: "HOKA Speedgoat7 runners climbing a trail on the side of a hill",
                      asset: {
                        _id: "image-431cdb791720ccef57b5567eae850e002f4ca8ec-1920x1080-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/431cdb791720ccef57b5567eae850e002f4ca8ec-1920x1080.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "hoka-speedgoat7-challenge" },
                  summary: "Microsite for the global Hoka & Strava Speedgoat7 Challenge",
                  tags: null,
                  title: "Global Ascension",
                },
                {
                  _id: "8f051e91-9275-40ec-b14a-b96fea57b5dd",
                  _updatedAt: "2026-05-29T11:32:40Z",
                  date: "2026-04-30",
                  mainImage: {
                    alt: "3D model of the Dialect arcade explorer vehicle in a clean white environment",
                    asset: {
                      _id: "image-472d41de752134828e555b2710e8f2484fc3fd75-960x540-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/472d41de752134828e555b2710e8f2484fc3fd75-960x540.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "custom arcade machine",
                      "unreal engine",
                      "brand experience",
                      "interactive game",
                      "physical activation",
                      "creative technology",
                    ],
                    metaDescription:
                      "Studio R&D project creating a custom arcade machine in Unreal Engine, turning the Dialect brand into a physical, playable experience.",
                    metaTitle: "Dialect Custom Arcade Machine and Explorer Game R&D",
                    noindex: null,
                    ogImage: {
                      alt: "3D model of the Dialect arcade explorer vehicle in a clean white environment",
                      asset: {
                        _id: "image-1d59fbbd8c45585dd544a2e179056ccc67e23f3e-960x540-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/1d59fbbd8c45585dd544a2e179056ccc67e23f3e-960x540.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "dialect-arcade" },
                  summary: "A celebration of making things",
                  tags: null,
                  title: "Playful by Design",
                },
                {
                  _id: "a4472965-c6e9-46d8-956b-dfe573b52341",
                  _updatedAt: "2026-05-29T11:26:59Z",
                  date: "2026-03-25",
                  mainImage: {
                    alt: "3D spacecraft model shown above Racer title typography",
                    asset: {
                      _id: "image-7ebff5b2ccbb96500fd3887e2f5641a8dfa4a6de-782x614-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/7ebff5b2ccbb96500fd3887e2f5641a8dfa4a6de-782x614.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Mobile multiplayer game",
                      "mobile controller",
                      "web game",
                      "QR joining code",
                      "Studio R&D",
                      "real-time gameplay",
                      "creative technology",
                    ],
                    metaDescription:
                      "Studio R&D project building a mobile-controlled web multiplayer racing game in one day, with QR joining, power-ups, shields and fast shared play.",
                    metaTitle: "Racer Multiplayer Game R&D",
                    noindex: null,
                    ogImage: {
                      alt: "3D spacecraft model shown above Racer title typography",
                      asset: {
                        _id: "image-49a049d2c931a21d1287635650fb2dbf7858b71c-782x614-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/49a049d2c931a21d1287635650fb2dbf7858b71c-782x614.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "multiplayer-crowd-games" },
                  summary: "Built in a day. Prototype of a browser based multiplayer games for events",
                  tags: null,
                  title: "GAMES FOR CROWDS: RACER",
                },
                {
                  _id: "2df7e111-e73d-4a49-88d4-ae2da1c3621e",
                  _updatedAt: "2026-05-29T11:02:18Z",
                  date: "2025-10-14",
                  mainImage: {
                    alt: "Transparent resin 3D print of the SkiMasters character held in front of a window",
                    asset: {
                      _id: "image-2c2810ec69a3fb1de047d2822bca3cad6daeb68b-1648x1352-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/2c2810ec69a3fb1de047d2822bca3cad6daeb68b-1648x1352.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Heinemann",
                      "Skimasters",
                      "3D printing",
                      "transparent resin",
                      "LABS experiment",
                      "digital to physical",
                      "character design",
                      "3D prototype",
                      "Creative technology",
                    ],
                    metaDescription:
                      "Labs experiment exploring how the SkiMasters character moves from digital design into transparent resin 3D print, testing scale and tactility.",
                    metaTitle: "SkiMasters 3D Printed Character Experiment",
                    noindex: null,
                    ogImage: {
                      alt: "Transparent resin 3D print of the SkiMasters character held in front of a window",
                      asset: {
                        _id: "image-1a1f5863150e508bca89809a0c9c5b48794f0564-1648x1352-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/1a1f5863150e508bca89809a0c9c5b48794f0564-1648x1352.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "explorations-in-materials" },
                  summary: "Digital form, made physical",
                  tags: null,
                  title: "Pixels to Presence",
                },
                {
                  _id: "2892b7ab-fa7c-4949-ac3b-4a16c8052554",
                  _updatedAt: "2026-07-15T10:22:46Z",
                  date: "2025-10-13",
                  mainImage: {
                    alt: "PS1-style 3D render of the Dialect studio at night in a rainy street scene",
                    asset: {
                      _id: "image-748d636a8a1c4d6ef51c53e1ea8dd3f8b72f0274-1834x1388-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/748d636a8a1c4d6ef51c53e1ea8dd3f8b72f0274-1834x1388.png",
                    },
                  },
                  seo: {
                    articleType: "TechArticle",
                    canonicalOverride: null,
                    keywords: [
                      "PS1-style 3D",
                      "low-poly environment",
                      "Dialect Labs",
                      "Game environment inspired",
                      "nostalgic design",
                      "Cinema 4D",
                      "Atmospheric 3D",
                      "Creative technology",
                    ],
                    metaDescription: null,
                    metaTitle: null,
                    noindex: null,
                    ogImage: {
                      alt: "PS1-style 3D render of the Dialect studio at night in a rainy street scene",
                      asset: {
                        _id: "image-07fe418f102e0197faa93ffc5dc2e0acc677a957-1834x1388-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/07fe418f102e0197faa93ffc5dc2e0acc677a957-1834x1388.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "90s-dialect-office" },
                  summary: "90's love letter",
                  tags: null,
                  title: "Low Resolution, High Intent",
                },
                {
                  _id: "96ba77de-f6c7-4aa6-9ce1-266cacfdbdf7",
                  _updatedAt: "2026-05-29T11:21:48Z",
                  date: "2025-10-13",
                  mainImage: {
                    alt: "Green thermal-style screen capture of a person waving in the real-time Dialect image treatment",
                    asset: {
                      _id: "image-41656e73a8256da417a8c81c4381a571f82754ca-782x614-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/41656e73a8256da417a8c81c4381a571f82754ca-782x614.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "real-time image treatment",
                      "TouchDesigner",
                      "MediaPipe",
                      "AI tracking",
                      "thermal visuals",
                      "responsive design",
                      "creative technology ",
                    ],
                    metaDescription:
                      "R&D project using TouchDesigner, MediaPipe and real-time tracking to create a responsive green thermal image treatment for Dialect’s visual language.",
                    metaTitle: "Real-Time Thermal Treatment R&D",
                    noindex: null,
                    ogImage: {
                      alt: "Green thermal-style screen capture of a person waving in the real-time Dialect image treatment",
                      asset: {
                        _id: "image-f4b785b2730737874db8568d7cd8246bf6a1472f-782x614-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f4b785b2730737874db8568d7cd8246bf6a1472f-782x614.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "thermal-effect-experimentation" },
                  summary: "Identity through behaviour",
                  tags: null,
                  title: "A Living Visual Language",
                },
                {
                  _id: "d025b1f4-37fb-4793-b0f4-ae968da58fc8",
                  _updatedAt: "2026-05-29T11:18:45Z",
                  date: "2025-10-13",
                  mainImage: {
                    alt: "3D render of the Dialect team characters standing side by side",
                    asset: {
                      _id: "image-5a1c9610b858833f60f704b77c23ce057ca0374b-3840x2160-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/5a1c9610b858833f60f704b77c23ce057ca0374b-3840x2160.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Dialect team characters",
                      "interactive 3D",
                      "character design",
                      "cursor tracking",
                      "website footer",
                      "rigging",
                      "digital portraits",
                      "3d modelling",
                      "creative technology",
                    ],
                    metaDescription:
                      "Interactive 3D team characters for the Studio Dialect website, using minimal portrait design, real-time rigging and cursor-tracking behaviour.",
                    metaTitle: "Dialect Interactive Team Characters",
                    noindex: null,
                    ogImage: {
                      alt: "3D render of the Dialect team characters standing side by side",
                      asset: {
                        _id: "image-f424582a0e0b4670a6e9b5112e3a62f100292061-3840x2160-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/f424582a0e0b4670a6e9b5112e3a62f100292061-3840x2160.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "dialect-characters" },
                  summary: "Reduced to its essentials",
                  tags: null,
                  title: "Dialects Character",
                },
                {
                  _id: "e9504c7c-97c5-4e8b-ba3d-13579d6e563b",
                  _updatedAt: "2026-05-29T11:13:28Z",
                  date: "2024-10-13",
                  mainImage: {
                    alt: "3D render of sculptural water floating in mid-air for an interactive airport installation",
                    asset: {
                      _id: "image-46997b4b217e0d502221547130c4957d87ac5786-1078x1034-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/46997b4b217e0d502221547130c4957d87ac5786-1078x1034.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Heinemann",
                      "Copenhagen",
                      "water simulation",
                      "unity r&d",
                      "interactive installation",
                      "motion control",
                      "airport experience",
                      "luxury retail experience",
                      "digital water",
                      "creative technology",
                    ],
                    metaDescription:
                      "Unity water simulation R&D for Heinemann Copenhagen Airport, creating an always-on interactive installation built for motion, balance and long-term performance.",
                    metaTitle: "Heinemann Water Simulation Experience R&D",
                    noindex: null,
                    ogImage: {
                      alt: "Sculptural 3D water simulation created for the Heinemann Copenhagen Airport interactive installation",
                      asset: {
                        _id: "image-0976ece2e2a0de3c01a0a1515c4e33b5f60f8d50-1078x1034-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/0976ece2e2a0de3c01a0a1515c4e33b5f60f8d50-1078x1034.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "water-bending" },
                  summary: "Exploring hydro physics",
                  tags: null,
                  title: "Water Bending",
                },
                {
                  _id: "06aaf344-c731-418c-8c3c-e874332bf0a1",
                  _updatedAt: "2026-05-29T11:06:47Z",
                  date: "2024-09-09",
                  mainImage: {
                    alt: "3D render of an open hand with a Coca-Cola Zero glass and bottle floating above it, surrounded by swirling liquid",
                    asset: {
                      _id: "image-35a7df575299f60dc1ecba4f268ba2aa306078dd-3840x2160-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/35a7df575299f60dc1ecba4f268ba2aa306078dd-3840x2160.png",
                    },
                  },
                  seo: {
                    articleType: null,
                    canonicalOverride: null,
                    keywords: [
                      "Coca-Cola",
                      "Coke Zero",
                      "Takeataste",
                      "AR activation",
                      "3D liquid simulation",
                      "digital billboard",
                      "mobile AR",
                      "creative technology",
                    ],
                    metaDescription: null,
                    metaTitle: null,
                    noindex: null,
                    ogImage: {
                      alt: "3D render of an open hand with a Coca-Cola Zero glass and bottle floating above it, surrounded by swirling liquid",
                      asset: {
                        _id: "image-e96687c0e8bcb2d45578ba278c7b1563fbc31673-3840x2160-png",
                        url: "https://cdn.sanity.io/images/z4rfkkmu/production/e96687c0e8bcb2d45578ba278c7b1563fbc31673-3840x2160.png",
                      },
                    },
                  },
                  slug: { _type: "slug", current: "coca-cola-ar" },
                  summary: "Where flow meets fizz",
                  tags: null,
                  title: "Coke Zero AR",
                },
              ],
              siteSettings: {
                address: "73 Tib Street\nManchester\nM4 1LS",
                contactEmail: "hello@studiodialect",
                contactPhone: null,
                description:
                  "Studio Dialect is an interactive production studio intersecting culture and technology. We specialise in interactive, immersive retail, 3D, WebGL, anamorphic billboards, and emerging-tech brand work for global clients.",
                foundingYear: 2021,
                keywords: [
                  "interactive production studio",
                  "WebGL agency",
                  "3D production",
                  "immersive retail",
                  "anamorphic billboard",
                  "creative technology",
                  "experiential design",
                ],
                logo: {
                  alt: "Studio Dialect",
                  asset: {
                    _id: "image-b3b95f60408a1ede2b66b37ac84b4d7787298055-695x81-svg",
                    url: "https://cdn.sanity.io/images/z4rfkkmu/production/b3b95f60408a1ede2b66b37ac84b4d7787298055-695x81.svg",
                  },
                },
                notFoundBody:
                  "That page doesn't exist (or it's been moved). Head back to [our work](/projects), [the studio](/studio), or [Labs](/research) to find what you were looking for.",
                notFoundTitle: "Page not found",
                ogImage: {
                  alt: "Studio Dialect — interactive production studio",
                  asset: {
                    _id: "image-05cafebf2af683b0eca3f7fe0912a104220f7ba7-1200x630-png",
                    url: "https://cdn.sanity.io/images/z4rfkkmu/production/05cafebf2af683b0eca3f7fe0912a104220f7ba7-1200x630.png",
                  },
                },
                socialLinks: {
                  instagram: "https://www.instagram.com/studio_dialect",
                  linkedin: "https://www.linkedin.com/company/studio-dialect",
                },
                tagline: "Interactive production studio intersecting culture and technology",
                title: "Studio Dialect",
                twitterHandle: "studio_dialect",
              },
              studioPage: {
                _updatedAt: "2026-06-09T08:31:51Z",
                aboutText:
                  "Our work is grounded in research and experimentation. We help brands make\nsense of emerging technologies and turn them into clear, purposeful\nexperiences that stay with people. \n\nEverything we create is built in close collaboration with our clients and agency partners, working together to bring ideas to life with clarity and intention.",
                behindTheScenesImageUrl: null,
                behindTheScenesImages: null,
                behindTheScenesTitle: "behind the scenes",
                capabilitiesImageUrl:
                  "https://cdn.sanity.io/images/z4rfkkmu/production/195250563f03d6423593b63f7e35ba5d30964671-568x568.jpg",
                capabilitiesTitle: "capabilities",
                clients: null,
                clientsTitle: "our clients",
                globeMarkers: [
                  { label: "McLaren, Seoul ", latitude: 37.56521269774, longitude: 126.9774, url: null },
                  {
                    label: "Coca-Cola, London\nGoogle, London\nNike, London\nPuma, London\nMednet, Leeds",
                    latitude: 53,
                    longitude: 2.2,
                    url: null,
                  },
                  {
                    label:
                      "Heinemann, Europe\nHoka, Chamonix\nThe North Face, Chamonix\nOn Running, Zurich\nNespresso, Vienna\nGate Zero, Frankfurt",
                    latitude: 46,
                    longitude: 7,
                    url: null,
                  },
                  {
                    label: "Onava, New York\nFossil, New York\nH&M, New York",
                    latitude: 40.758,
                    longitude: -73.9855,
                    url: null,
                  },
                  { label: "Green Cubes, Amazon\n", latitude: -3.47, longitude: -62.22, url: null },
                  { label: "Intel, Dubai\nSquatwolf, Dubai", latitude: 25.2048, longitude: 55.2708, url: null },
                  { label: "Heinemann, Jeddah", latitude: 21, longitude: 39, url: null },
                  { label: "Heinemann, Keflavík ", latitude: 68, longitude: -19, url: null },
                  { label: "Hoka, Nanjing", latitude: 30, longitude: 100, url: null },
                  { label: "Hoka, California", latitude: 38, longitude: -120, url: null },
                  { label: "Rapid, Hestra\nGate Zero, Copenhagen", latitude: 59.3327, longitude: 18.0656, url: null },
                  { label: "Marshall Amplifiers, China", latitude: 35.8617, longitude: 104.1954, url: null },
                ],
                heroTitle: "intersecting culture\n& technology around the world",
                seo: {
                  articleType: null,
                  canonicalOverride: null,
                  keywords: [
                    "Studio Dialect team",
                    "interactive production studio Manchester",
                    "creative technology studio",
                    "WebGL agency",
                    "emerging technology design",
                    "immersive production team",
                  ],
                  metaDescription:
                    "Founded in 2021 by Jon and Andy, Studio Dialect is an interactive production studio in Manchester. We turn emerging technology into immersive work for global brands and agencies.",
                  metaTitle: "Manchester interactive production & design team",
                  noindex: null,
                  ogImage: {
                    alt: "The studio — Manchester interactive production team",
                    asset: {
                      _id: "image-b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630-png",
                      url: "https://cdn.sanity.io/images/z4rfkkmu/production/b8e40f674150cdb8b89a35bb3cc8150a8b60dead-1200x630.png",
                    },
                  },
                },
                teamDescription:
                  "Studio Dialect began in 2021 with a simple vision shared by Andy and Jon: meaningful experiences happen when creativity, technology and human emotion meet. From the start, the studio was built around assembling the right mix of experts for every project rather than relying on a single way of working.\n\nThat flexibility allows us to approach each brief with fresh eyes. We question, explore and test until the design and the technology feel perfectly aligned. It’s a strategic way of working, but also a deeply creative one, shaped by a genuine desire to make work that moves people or inspires them to act.",
                teamTitle: "the team",
                worldCoordinates: "x: 123  y: 124  z: 124",
                worldSectionLabel: "Global Collaborators",
                worldSectionText:
                  "We create, deliver and maintain work across the globe, around the clock. Our team is based in Manchester with collaborators across Europe, and we work worldwide with some of the most loved, desired and consumed brands.",
              },
              teamMembers: [
                {
                  _id: "7c6c4f5f-a27b-4821-8692-e2537ff3eeb0",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-d16a09ad47eeb3e47a27e818d85c32425045e19d-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/d16a09ad47eeb3e47a27e818d85c32425045e19d.glb",
                    },
                  },
                  name: "Andy Buchan",
                  order: 0,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of team member Andy Buchan with a lime green gradient background",
                    asset: { _ref: "image-aae9fa8b65b9967ef03aa508a69db3a6cf348eb0-600x800-png", _type: "reference" },
                  },
                  role: "Co-Founder & Creative Director",
                  socialLinks: null,
                },
                {
                  _id: "68e0fba3-9603-4fb2-8394-8de5999fd148",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-2df021c4c28359598c4e762329abc4ffabbe87b6-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/2df021c4c28359598c4e762329abc4ffabbe87b6.glb",
                    },
                  },
                  name: "Jon Landon",
                  order: 1,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of team member Jon Landon with a lime green gradient background",
                    asset: { _ref: "image-1068e7bcc90e0ace511f29354f899b019e4199f1-600x800-png", _type: "reference" },
                  },
                  role: "Co-Founder & Technical Director",
                  socialLinks: null,
                },
                {
                  _id: "4dd9dd15-5110-4abd-97ee-7e92827086cb",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-b0a9837276a7dee339e6638fa1fa2ff3bb87b24c-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/b0a9837276a7dee339e6638fa1fa2ff3bb87b24c.glb",
                    },
                  },
                  name: "Joe Albin-Clark",
                  order: 2,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of team member Joe Albin-Clark with a lime green gradient background",
                    asset: { _ref: "image-1ddefa6765afb59a55e12168ed3e5555560c8574-600x800-png", _type: "reference" },
                  },
                  role: "3D Artist",
                  socialLinks: null,
                },
                {
                  _id: "a62d1ab8-048c-4dba-a361-59e5870a072d",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-df93fb063ae9d090ceb13bde8387f9fe6f24419a-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/df93fb063ae9d090ceb13bde8387f9fe6f24419a.glb",
                    },
                  },
                  name: "James Betts",
                  order: 3,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of team member James Betts with a lime green gradient background",
                    asset: { _ref: "image-0642cc3073c5726846752b0dd2466bf56339d04c-600x800-png", _type: "reference" },
                  },
                  role: "Senior Art Director",
                  socialLinks: null,
                },
                {
                  _id: "9299fe15-9381-4f58-9956-9e1624edf7a5",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-7222d89c5471dbf97291bd2565e2b975def0226f-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/7222d89c5471dbf97291bd2565e2b975def0226f.glb",
                    },
                  },
                  name: "Simon Hathaway",
                  order: 7,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of team member Simon Hathaway",
                    asset: { _ref: "image-8d67daef3ec6d9dd8181087a9db7a5ef1f8fcb4e-1200x1600-png", _type: "reference" },
                  },
                  role: "Non-Exec Director ",
                  socialLinks: null,
                },
                {
                  _id: "51e5d5cf-3faa-4ba1-83f6-392ac01557e7",
                  bio: null,
                  headModel: {
                    asset: {
                      _id: "file-264f7961ba6a4136c3a670eca798e66a19b810d0-glb",
                      url: "https://cdn.sanity.io/files/z4rfkkmu/production/264f7961ba6a4136c3a670eca798e66a19b810d0.glb",
                    },
                  },
                  name: "You?",
                  order: 100,
                  photo: {
                    _type: "image",
                    alt: "White mannequin style 3D model of place holder team member with a lime green gradient background",
                    asset: { _ref: "image-39b999f35b5a3866083d7f081899cc5dcf702859-600x800-png", _type: "reference" },
                  },
                  role: "Your Next Role",
                  socialLinks: null,
                },
              ],
            },
            dataUpdateCount: 1,
            dataUpdatedAt: 1788426234478,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: false,
            status: "success",
            fetchStatus: "idle",
          },
          queryKey: ["site-data"],
          queryHash: '["site-data"]',
        },
        {
          dehydratedAt: 1788426234496,
          state: {
            data: {
              address: "73 Tib Street\nManchester\nM4 1LS",
              contactEmail: "hello@studiodialect",
              contactPhone: null,
              description:
                "Studio Dialect is an interactive production studio intersecting culture and technology. We specialise in interactive, immersive retail, 3D, WebGL, anamorphic billboards, and emerging-tech brand work for global clients.",
              foundingYear: 2021,
              keywords: [
                "interactive production studio",
                "WebGL agency",
                "3D production",
                "immersive retail",
                "anamorphic billboard",
                "creative technology",
                "experiential design",
              ],
              logo: {
                alt: "Studio Dialect",
                asset: {
                  _id: "image-b3b95f60408a1ede2b66b37ac84b4d7787298055-695x81-svg",
                  url: "https://cdn.sanity.io/images/z4rfkkmu/production/b3b95f60408a1ede2b66b37ac84b4d7787298055-695x81.svg",
                },
              },
              notFoundBody:
                "That page doesn't exist (or it's been moved). Head back to [our work](/projects), [the studio](/studio), or [Labs](/research) to find what you were looking for.",
              notFoundTitle: "Page not found",
              ogImage: {
                alt: "Studio Dialect — interactive production studio",
                asset: {
                  _id: "image-05cafebf2af683b0eca3f7fe0912a104220f7ba7-1200x630-png",
                  url: "https://cdn.sanity.io/images/z4rfkkmu/production/05cafebf2af683b0eca3f7fe0912a104220f7ba7-1200x630.png",
                },
              },
              socialLinks: {
                instagram: "https://www.instagram.com/studio_dialect",
                linkedin: "https://www.linkedin.com/company/studio-dialect",
              },
              tagline: "Interactive production studio intersecting culture and technology",
              title: "Studio Dialect",
              twitterHandle: "studio_dialect",
            },
            dataUpdateCount: 1,
            dataUpdatedAt: 1788426234478,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: false,
            status: "success",
            fetchStatus: "idle",
          },
          queryKey: ["site-settings"],
          queryHash: '["site-settings"]',
        },
      ],
    };
  } catch (error) {
    console.error(error);
  }

  /* inline script */
  try {
    (function () {
      var consent = localStorage.getItem("cookie_consent");
      if (consent === "accepted") {
        loadGA();
        document.getElementById("cookie-banner").classList.add("hidden");
      } else if (consent === "declined") {
        document.getElementById("cookie-banner").classList.add("hidden");
      }
    })();
    function loadGA() {
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=G-P1MKRXWHS9";
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-P1MKRXWHS9");
    }
    function acceptCookies() {
      localStorage.setItem("cookie_consent", "accepted");
      window.dispatchEvent(new Event("hiya:consent")); // notify hiya tracker
      var banner = document.getElementById("cookie-banner");
      banner.classList.add("hiding");
      setTimeout(function () {
        banner.classList.add("hidden");
        banner.classList.remove("hiding");
      }, 700);
      loadGA();
    }
    function declineCookies() {
      localStorage.setItem("cookie_consent", "declined");
      window.dispatchEvent(new Event("hiya:consent")); // notify hiya tracker
      var banner = document.getElementById("cookie-banner");
      banner.classList.add("hiding");
      setTimeout(function () {
        banner.classList.add("hidden");
        banner.classList.remove("hiding");
      }, 700);
    }
  } catch (error) {
    console.error(error);
  }

  if (
    __siteCloneLate &&
    typeof document.onreadystatechange === "function" &&
    document.onreadystatechange !== __siteCloneReady
  ) {
    try {
      document.onreadystatechange(new Event("readystatechange"));
    } catch (error) {
      console.error(error);
    }
  }
})();
