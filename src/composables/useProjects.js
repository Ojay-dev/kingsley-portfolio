import ActivityIcon from '@/components/icons/IconActivity.vue';
import BookmarkIcon from '@/components/icons/IconBookmark.vue';
import CategoryIcon from '@/components/icons/IconCategory.vue';
import GraphIcon from '@/components/icons/IconGraph.vue';
import HeartIcon from '@/components/icons/IconHeart.vue';

import LaddaApp from '@/assets/svgs/LaddaApp.svg';
import LaddaAppThumbnail from '@/assets/svgs/LaddaAppThumbnail.svg';
import LetshegoApp from '@/assets/svgs/LetshegoApp.svg';
import LetshegoAppThumbnail from '@/assets/svgs/LetshegoAppThumbnail.svg';
import PrestmitApp from '@/assets/svgs/PrestmitApp.svg';
import PrestmitAppThumbnail from '@/assets/svgs/PrestmitAppThumbnail.svg';
import DryvaApp from '@/assets/svgs/DryvaApp.svg';
import DryvaAppThumbnail from '@/assets/svgs/DryvaAppThumbnail.svg';
import SavologyApp from '@/assets/svgs/SavologyApp.svg';
import SavologyAppThumbnail from '@/assets/svgs/SavologyAppThumbnail.svg';
import { shallowRef } from 'vue';

// Project data
const projects = [
  {
    id: 'c3d90575',
    name: 'Ladda - A one stop investments platform',
    description:
      'Ladda enables everyday people to invest and save towards their goals and build a financial safety net.',
    icon: GraphIcon,
    bgColor: 'bg-[#EBFAFF]',
    appThumbnail: LaddaAppThumbnail,
    appImage: LaddaApp,
    alignRight: true,
    about: `Ladda is a fintech product of Money Africa that allows users to invest in mutual funds, stocks (both global & local), purchase gift cards, and save from the comfort of their homes. Ladda makes investment and stock trading easily accessible by making it available on everyday devices (web & mobile).`,
    challenge: `Prior to the last 5 -10 years, investments in stocks and mutual funds for the everyday man was a tedious process of finding a broker, having a certain amount of investment capital, filling out lengthy forms and a non-transparent process. <br />
    Fast-forward a few years with uncertainties on the rise, demand for financial freedom utilizing savings and investment products has been on the increase as well, which has led to innovations and disruptions in the financial technology sector in Nigeria and globally.
    <br /><br />
    Ladda’s position in the market is to simplify this process and educate its customers while creating opportunities for Africans to invest in local and global assets.`,
    goal: [
      'The goal was to design a product that is user-friendly, not intimidating for new users, and easy to use and understand by more experienced users.',
      'Design a smooth and delightful product that users love.',
      'Design a platform that hepls users kickstart their financial independence.'
    ]
  },
  {
    id: 'd7370aa2',
    name: 'Letshego - An SMS API hub',
    description:
      'An SMS hub containing different SMS API providers, which routes SMS based on the effective SMS provider in the receiver’s country.',
    icon: ActivityIcon,
    bgColor: 'bg-[#FEF8EF]',
    appThumbnail: LetshegoAppThumbnail,
    appImage: LetshegoApp,
    alignRight: true,
    about: `Letshego SMS Hub is an SMS platform configured to send SMS based on the most reliable SMS
    provider at a particular time in a country. <br />
    Different SMS providers are configured into the system, the system performs some algorithm
    to determine the best SMS provider to use based on certain criteria in sending SMS in a
    particular period of time. <br />
    The system has no limit to the number of SMS providers it can accommodate, and it is also
    configured to accept a large number of SMS requests within a short period.
    <br /><br />
    The overall scope of this project is for LetSheGo applications to send cost-effective SMS to
    clients and customers within seconds at a very zero failure and fast delivery rate.`,
    challenge: `The challenge was to design a system that can accommodate multiple SMS providers and give real-time visibility of SMS status and also help coup time spend on SMS delivery and minimize failure rate. <br />
    This system was to help automate the process of sending SMS to customers on different letshego’s products seamlessly and also help provide data for better decision making.`,
    goal: [
      'The goal was to design a system that gives real-time visibility of SMS status and also provide data.',
      'Design a well-crafted SMS hub that can send SMS via the effective SMS API provider in the receiver’s country.',
      'Create an easy and understandable onboarding process to onboard the SMS provider’s API.',
      'Design a well-crafted product with accessiblility in mind.'
    ]
  },
  {
    id: '458a0248',
    name: 'Prestmit - Mobile app redesign',
    description:
      'Prestmit is a fintech product that allows users to trade, buy and sell various digital assets including gift cards, bitcoins, USDT, litecoins, dogecoins, etc.',
    icon: CategoryIcon,
    bgColor: 'bg-[#FBF3F6]',
    appThumbnail: PrestmitAppThumbnail,
    appImage: PrestmitApp,
    about:
      'Prestmit is a fintech product that allows users to trade, buy and sell various digital assets including gift cards, bitcoins, USDT, litecoins, dogecoins, airtime and data top-up. ',
    challenge:
      'The challenge was to offer a seamless design solution that improves the overall user experience (UX) of the Prestmit mobile app and design visually appealing user interfaces that will help users to achieve set goals.',
    goal: [
      'The goal was to design a more user Centric product that would help users achieve their set goals.',
      'Design prestmit in a way that educates its customers on the various services offered on the platform and how to trade gift cards and cryptocurrency.',
      'Design a seamless onboarding and transactions flow to increase signup and retention rate.'
    ]
  },
  {
    id: 'f56c24fe',
    name: 'Dryva - Connecting car owners with drivers',
    description:
      'Dryva is a professional hiring service that connects trusted drivers to clients who already own vehicles but require drivers.',
    icon: BookmarkIcon,
    bgColor: 'bg-[#E5F5FE]',
    appThumbnail: DryvaAppThumbnail,
    appImage: DryvaApp,
    about: `While existing ride-hailing platforms are serving the market of non-car owners, there also exists a market for individual car owners who prefer being driven around in their cars — as a means of coping with the stressful lifestyle associated with large urban cities, such as traffic congestion, and long commute times.
    <br /><br />
    Most times, people don’t intend to hire a driver for an extended period, they need one for a few days or weeks, and neither do they want to become dependent on ride-hailing services for all their transportation needs. Thus, a platform that provided for this demographic in particular was necessary.`,
    challenge: `A city like Lagos needs a ride-hailing app to help ease daily commuting, but how about individual car owners who prefer to be driven sometimes by a driver due to the stressful lifestyle associated with big cities, such as traffic congestion, busy schedules that eats into one’s valuable time. Most times people don’t intend to hire a driver for a long period, they just need one for a few days or weeks.`,
    goal: [
      'To help improve a user’s lifestyle by taking away the stress of finding short-term drivers.',
      'Easy and flexible hiring process',
      'Minimal UI designs with easy navigation and fewer user actions.'
    ]
  },
  {
    id: 'e8f66421',
    name: 'Savology - Case study',
    description:
      'Savology is a mobile application that enables parents and guardians to save money specifically for their children’s university education.',
    icon: HeartIcon,
    bgColor: 'bg-[#F4F6FE]',
    appThumbnail: SavologyAppThumbnail,
    appImage: SavologyApp,
    about: ``,
    challenge: `The costs of higher education all over the world continue to rise while the possibilities of affording this education continue to decrease. Even with help from parents or guardians many Nigerians still struggle to meet the financial demands of world-class universities. Meaningful university education now seems to be within the reach of only individuals from highly privileged backgrounds or those fortunate enough to attain scholarships. <br />
    The primary goal of this project is to empower parents and guardians to be in a much better position to afford university. We figured that if they had the option to start saving towards this goal. as early as possible then their chances of meeting the financial requirements would improve exponentially. Ultimately we want anyone responsible for any amount of children to be able to prudently save towards their university education.`,
    goal: [
      'To help parents plan for their children’s university education.',
      'To re-install confidence and ease some of the problems that come with parenting.',
      'To achieve a product with minimal UI designs, easy navigation and fewer user actions.'
    ]
  }
];

// Create a ref to make the projects data reactive
const projectsData = shallowRef(projects);

// Function to get the projects
const getProject = (id) => {
  return projectsData.value.find((project) => project.id === id);
};

export default function useProjects() {
  return {
    projects: projectsData,
    getProject
  };
}
