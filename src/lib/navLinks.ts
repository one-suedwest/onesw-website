export interface NavLink {
    key: string;
    title: string;
    text: string;
    href: string;
    highlight: boolean;
}

export const navLinks: NavLink[] = [
    {
        text: "Startseite",
        title: "Zur Startseite",
        href: "/",
        key: "startseite",
        highlight: false,
    },
    {
        text: "Faschingsfreizeit",
        title: "Die JCSquad Faischingsfreizeit 2025",
        href: "/jcsquad",
        key: "faschi",
        highlight: true,
    },
    {
        text: "Lead",
        title: "Die ONE Lead im Frühjahr 2025",
        href: "/lead",
        key: "lead",
        highlight: true,
    },
    // {
    //   text: "Teamboost",
    //   title: "Der ONE Südwest Teamboost im Herbst 2023",
    //   href: "https://yarps.church.tools/publicgroup/269",
    //   key: "teamboost",
    // },
    {
        text: "Downloads",
        title: "Downloads",
        href: "/downloads",
        key: "downloads",
        highlight: false,
    },
    {
        text: "Juleica",
        title: "Wofür braucht man eine Juleica?",
        href: "/warum-juleica",
        key: "juleica",
        highlight: false,
    },
    {
        text: "Leadership",
        title: "Möglichkeiten sich und sein Team zu Equippen",
        href: "https://www.cvents.eu/de/one-leadership-academy-nuernberg-20102024/",
        key: "leadership",
        highlight: false,
    },
    {
        text: "Spenden",
        title: "Über Paypal an uns spenden",
        href: "https://www.paypal.com/paypalme/onesw",
        key: "spenden",
        highlight: false,
    },
    {
        text: "Instagram",
        title: "Unsere Instagram Seite",
        href: "https://www.instagram.com/onesudwest/",
        key: "instagram",
        highlight: false,
    },
    {
        text: "Youtube",
        title: "Unser YouTube-Kanal",
        href: "https://www.youtube.com/channel/UCLFN65oYHbCQB-mkya-DTKA",
        key: "youtube",
        highlight: false
    },
];
