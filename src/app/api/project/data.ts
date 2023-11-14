import { ProjectInfo, Publisher } from "./model";

export const projects: ProjectInfo[] = [
  {
    title: "Beramee",
    contributedAs: "Full Stack",
    description:
      "Invitation wedding website and video generator platform. This platform seamlessly integrates advanced features to create dynamic and visually stunning wedding invitations. Leveraging cutting-edge technology, the system automates the video generation process, allowing users to easily customize and generate high-quality invitation videos to be shared on social media.",
    repositoryUrl: "https://github.com/beramee-apps/beramee-apps",
    allowRequestAccess: true,
    startedAt: new Date("2023-09-06"),
    tags: [
      { title: "GraphQL", url: "https://graphql.org/" },
      { title: "NX Workspace", url: "https://nx.dev/" },
      { title: "Prisma", url: "https://prisma.io/" },
      { title: "ReactJS", url: "https://reactjs.org/" },
      { title: "Remotion", url: "https://remotion.dev/" },
    ],
  },
  {
    title: "Chrysaule",
    description:
      "Chrysaule stands as a cutting-edge trading platform specializing in the physical precious metals market. Crafted with NextJS and fortified by GraphQL for seamless API interactions, the platform goes a step further by incorporating live market data from a third-party source through the dynamic capabilities of websockets.",
    startedAt: new Date("2023-03-03"),
    finishedAt: new Date("2023-08-15"),
    contributedAs: "Back End Developer",
    company: "Slash",
    tags: [
      { title: "AWS", url: "https://aws.amazon.com/documentation/" },
      { title: "Express", url: "https://expressjs.com/" },
      { title: "GraphQL", url: "https://graphql.org/" },
      { title: "PostgreSQL", url: "https://www.postgresql.org/docs/" },
      { title: "Prisma ORM", url: "https://www.prisma.io/docs/" },
      { title: "Sendgrid", url: "https://sendgrid.com/docs/" },
      { title: "Twilio", url: "https://www.twilio.com/docs/" },
      {
        title: "Websocket",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      },
    ],
  },
  {
    title: "Tanaku",
    description:
      "Tanaku is a home mortgage application created using Flutter. Its primary objective is to aid prospective homebuyers in obtaining discounts on their down payments. The app is integrated with third-party services for tasks such as identity verification and payment processing.",
    contributedAs: "Flutter Developer",
    startedAt: new Date("2022-04-01"),
    finishedAt: new Date("2023-03-06"),
    company: "Slash",
    productUrl: [
      {
        publisher: Publisher.PlayStore,
        url: "https://play.google.com/store/apps/details?id=co.tanaku.mobile",
      },
    ],
    tags: [
      { title: "Flutter", url: "https://flutter.dev/" },
      { title: "BLOC", url: "https://bloclibrary.dev/" },
      {
        title: "Clean Architecture",
        url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
      },
      { title: "Codemagic", url: "https://docs.codemagic.io/" },
      { title: "Firebase", url: "https://firebase.google.com/docs" },
      { title: "Graphql", url: "https://graphql.org/" },
    ],
    imageSrc: "/assets/tanaku.png",
  },
  {
    title: "HiApp",
    contributedAs: "Flutter Developer",
    description:
      "HiApp is a chat application crafted with Flutter, seamlessly integrating XMPP for real-time communication. Focused on code maintainability, the project adopts a clean architecture approach. Additionally, the backend is powered by GraphQL, providing a flexible and efficient data management system.",
    startedAt: new Date("2021-10-01"),
    finishedAt: new Date("2022-03-01"),
    company: "Slash",
    imageSrc: "/assets/hiapp.png",
    tags: [
      { title: "Flutter", url: "https://flutter.dev/" },
      {
        title: "Clean Architecture",
        url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
      },
      { title: "BLOC", url: "https://bloclibrary.dev/" },
      { title: "GraphQL", url: "https://graphql.org/" },
      { title: "MongooseIM", url: "https://mongooseim.readthedocs.io/" },
      { title: "XMPP", url: "https://xmpp.org/" },
    ],
  },
  {
    title: "Cisea",
    contributedAs: "Lead Flutter Developer",
    allowRequestAccess: false,
    imageSrc: "/assets/cisea.png",
    description:
      "CISEA is a specialized application designed to enhance operational efficiency in the coal mining industry. The application encompasses attendance management, production monitoring, performance reporting, logistics management, and integration with the human resources (HR) system. With CISEA, companies can streamline operational processes, boost productivity, and make informed decisions based on accurate data analysis.",
    startedAt: new Date("2019-10-01"),
    finishedAt: new Date("2020-12-20"),
    tags: [
      { title: "Flutter", url: "https://flutter.dev/" },
      { title: "MVC", url: "#" },
      { title: "GeoLocator", url: "https://pub.dev/packages/geolocator" },
      { title: "Hive", url: "https://pub.dev/packages/hive" },
      { title: "Rest API", url: "https://restfulapi.net/" },
      { title: "Socket.IO", url: "https://socket.io/" },
    ],
    company: "PT.Bukit Asam TBK",
    productUrl: [
      {
        url: "https://play.google.com/store/apps/details?id=com.bukitasam.dev.cisea_mobile",
        publisher: Publisher.PlayStore,
      },
      {
        url: "https://apps.apple.com/id/app/cisea/id1505094639",
        publisher: Publisher.AppStore,
      },
      {
        url: "https://cisea.bukitasam.co.id/",
        publisher: Publisher.Website,
      },
    ],
  },
];
