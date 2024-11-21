export interface NavigationItem {
  id: string; // Assuming IDs are always strings
  title: string; // Title of the navigation item
  url: string; // URL or anchor for navigation
  onlyMobile?: boolean; // Optional property to indicate mobile-only visibility
}

export interface Article {
  srNo: number;
  nameOfArticle: string;
  heading: string;
  link: string;
};

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About Us",
    url: "#about",
  },
  {
    id: "2",
    title: "Problem",
    url: "#problem",
  },
  {
    id: "3",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "4",
    title: "Get App",
    url: "#getapp",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "6",
    title: "Sign In",
    url: "#signin",
    onlyMobile: true,
  },
];


 export const articles1: Article[] = [
  {
    srNo: 1,
    nameOfArticle: "NPD",
    heading: "Significant data breach in National Public",
    link: "https://economictimes.indiatimes.com/news/international/us/a-significant-data-breach-that-occurred-last-week-at-national-public-data/articleshow/112660389.cms",
  },
  {
    srNo: 2,
    nameOfArticle: "Coforge",
    heading: "$11 million notice over data breach",
    link: "https://economictimes.indiatimes.com/tech/information-tech/coforge-gets-11-million-notice-over-data-breach/articleshow/112352658.cms",
  },
  {
    srNo: 3,
    nameOfArticle: "Hijacks",
    heading: "Security Flaws in ML Toolkit",
    link: "https://thehackernews.com/2024/11/security-flaws-in-popular-ml-toolkits.html",
  },
  {
    srNo: 4,
    nameOfArticle: "Nokia",
    heading: "Hacker Claims to Leak Nokia Source Code",
    link: "https://www.databreachtoday.com/hacker-claims-to-leak-nokia-source-code-a-26761",
  },
  {
    srNo: 5,
    nameOfArticle: "Thomson Coburn",
    heading: "Law Firm Hack Compromises Health System's Patient Data",
    link: "https://www.databreachtoday.com/law-firm-hack-compromises-health-systems-patient-data-a-26756",
  },
  {
    srNo: 6,
    nameOfArticle: "Cybercrime",
    heading: "Microsoft Reports 600 Million Cyberattacks per Day",
    link: "https://www.databreachtoday.com/microsoft-reports-600-million-cyberattacks-per-day-a-26747",
  },
  {
    srNo: 7,
    nameOfArticle: "VBU",
    heading: "Hack of Defense",
    link: "https://therecord.media/hungary-defense-procurement-agency-hacked",
  },
  {
    srNo: 8,
    nameOfArticle: "AT&T",
    heading: "Data Breach Exposes 50 Billion Records",
    link: "https://www.benzinga.com/media/24/11/41941228/att-data-breach-exposes-50-billion-records-hackers-identified-ransom-paid",
  },
  {
    srNo: 9,
    nameOfArticle: "Amazon",
    heading: "Data breach exposed in third-party data breach: What we know",
    link: "https://www.indiatoday.in/technology/news/story/amazon-confirms-employee-data-exposed-in-third-party-data-breach-what-we-know-2631983-2024-11-12",
  },
  {
    srNo: 10,
    nameOfArticle: "Facebook",
    heading: "German court opens door for compensation",
    link: "https://www.law.com/international-edition/2024/11/13/facebook-data-breach-german-court-opens-door-for-compensation/?slreturn=20241114142014",
  },
];

export const articles2: Article[] = [
  {
    srNo: 1,
    nameOfArticle: "NPD",
    heading: "Significant data breach in National Public",
    link: "https://economictimes.indiatimes.com/news/international/us/a-significant-data-breach-that-occurred-last-week-at-national-public-data/articleshow/112660389.cms",
  },
  {
    srNo: 2,
    nameOfArticle: "Coforge",
    heading: "$11 million notice over data breach",
    link: "https://economictimes.indiatimes.com/tech/information-tech/coforge-gets-11-million-notice-over-data-breach/articleshow/112352658.cms",
  },
  {
    srNo: 3,
    nameOfArticle: "Hijacks",
    heading: "Security Flaws in ML Toolkit",
    link: "https://thehackernews.com/2024/11/security-flaws-in-popular-ml-toolkits.html",
  },
  {
    srNo: 4,
    nameOfArticle: "Nokia",
    heading: "Hacker Claims to Leak Nokia Source Code",
    link: "https://www.databreachtoday.com/hacker-claims-to-leak-nokia-source-code-a-26761",
  },
  {
    srNo: 5,
    nameOfArticle: "Thomson Coburn",
    heading: "Law Firm Hack Compromises Health System's Patient Data",
    link: "https://www.databreachtoday.com/law-firm-hack-compromises-health-systems-patient-data-a-26756",
  },
  {
    srNo: 6,
    nameOfArticle: "Cybercrime",
    heading: "Microsoft Reports 600 Million Cyberattacks per Day",
    link: "https://www.databreachtoday.com/microsoft-reports-600-million-cyberattacks-per-day-a-26747",
  },
  {
    srNo: 7,
    nameOfArticle: "VBU",
    heading: "Hack of Defense",
    link: "https://therecord.media/hungary-defense-procurement-agency-hacked",
  },
  {
    srNo: 8,
    nameOfArticle: "AT&T",
    heading: "Data Breach Exposes 50 Billion Records",
    link: "https://www.benzinga.com/media/24/11/41941228/att-data-breach-exposes-50-billion-records-hackers-identified-ransom-paid",
  },
  {
    srNo: 9,
    nameOfArticle: "Amazon",
    heading: "Data breach exposed in third-party data breach: What we know",
    link: "https://www.indiatoday.in/technology/news/story/amazon-confirms-employee-data-exposed-in-third-party-data-breach-what-we-know-2631983-2024-11-12",
  },
  {
    srNo: 10,
    nameOfArticle: "Facebook",
    heading: "German court opens door for compensation",
    link: "https://www.law.com/international-edition/2024/11/13/facebook-data-breach-german-court-opens-door-for-compensation/?slreturn=20241114142014",
  },
  {
    srNo: 11,
    nameOfArticle: "Eagle Bank",
    heading: "Customer notified of potential data breach",
    link: "https://www.teiss.co.uk/news/eagle-bank-notifies-customers-of-potential-data-breach-compromising-mastercard-accounts-14940",
  },
  {
    srNo: 12,
    nameOfArticle: "Ireland",
    heading: "Ireland fines LinkedIn data breach",
    link: "https://economictimes.indiatimes.com/tech/technology/ireland-fines-linkedin-310-million-euros-over-eu-data-breach/articleshow/114548060.cms",
  },
  {
    srNo: 13,
    nameOfArticle: "PwC Report",
    heading: "Masked Aadhaar",
    link: "https://economictimes.indiatimes.com/tech/technology/75-consumers-unaware-of-masked-aadhaar-as-identity-proof-survey/articleshow/114469899.cms",
  },
  {
    srNo: 14,
    nameOfArticle: "PwC India",
    heading: "Data Breach",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/consumers-worried-about-data-breaches-says-pwc-india-survey/articleshow/114463457.cms",
  },
  {
    srNo: 15,
    nameOfArticle: "Cyberattacks",
    heading: "Hackers target biggest brands",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/hackers-target-indias-biggest-brands-how-major-firms-like-tata-and-reliance-are-strengthening-cyber-defences/articleshow/114402967.cms",
  },
  {
    srNo: 16,
    nameOfArticle: "Data Breach",
    heading: "Internet Archive reels",
    link: "https://economictimes.indiatimes.com/tech/technology/internet-archive-reels-from-catastrophic-cyberattack-data-breach/articleshow/114162396.cms",
  },
  {
    srNo: 17,
    nameOfArticle: "Star Health",
    heading: "Personal Data Leak",
    link: "https://www.figma.com/design/3C9PVqAUsK7V5f6mXTJc0X/Haawks?node-id=602-1399&node-type=frame&t=qEBQl4TbvVxVTels-0",
  },
  {
    srNo: 18,
    nameOfArticle: "Comcast",
    heading: "Data Breach",
    link: "https://economictimes.indiatimes.com/news/international/world-news/comcast-data-breach-over-237000-customers-affected-by-ransomware-attack/articleshow/114032112.cms",
  },
  {
    srNo: 19,
    nameOfArticle: "Cyberattack",
    heading: "Education and Healthcare under cyberattack",
    link: "https://economictimes.indiatimes.com/tech/technology/education-and-healthcare-bear-brunt-of-cyberattacks-report/articleshow/113722042.cms",
  },
];
