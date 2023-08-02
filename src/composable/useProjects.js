import ActivityIcon from '../components/icons/IconActivity.vue';
import BookmarkIcon from '../components/icons/IconBookmark.vue';
import CategoryIcon from '../components/icons/IconCategory.vue';
import GraphIcon from '../components/icons/IconGraph.vue';
import HeartIcon from '../components/icons/IconHeart.vue';

import LaddaApp from '@/assets/LaddaApp.svg';
import LaddaAppThumbnail from '@/assets/LaddaAppThumbnail.svg';
import LetshegoApp from '@/assets/LetshegoApp.svg';
import PrestmitApp from '@/assets/PrestmitApp.svg';
import DryvaApp from '@/assets/DryvaApp.svg';
import SavologyApp from '@/assets/SavologyApp.svg';
import SavologyAppThumbnail from '@/assets/SavologyAppThumbnail.svg';
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
    alignRight: true
  },
  {
    id: 'd7370aa2',
    name: 'Letshego - An SMS API hub',
    description:
      'An SMS hub containing different SMS API providers, which routes SMS based on the effective SMS provider in the receiver’s country.',
    icon: ActivityIcon,
    bgColor: 'bg-[#FEF8EF]',
    appImage: LetshegoApp,
    alignRight: true
  },
  {
    id: '458a0248',
    name: 'Prestmit - Mobile app redesign',
    description:
      'Prestmit is a fintech product that allows users to trade, buy and sell various digital assets including gift cards, bitcoins, USDT, litecoins, dogecoins, etc.',
    icon: CategoryIcon,
    bgColor: 'bg-[#FBF3F6]',
    appImage: PrestmitApp
  },
  {
    id: 'f56c24fe',
    name: 'Dryva - Connecting car owners with drivers',
    description:
      'Dryva is a professional hiring service that connects trusted drivers to clients who already own vehicles but require drivers.',
    icon: BookmarkIcon,
    bgColor: 'bg-[#E5F5FE]',
    appImage: DryvaApp
  },
  {
    id: 'e8f66421',
    name: 'Savology - Case study',
    description:
      'Savology is a mobile application that enables parents and guardians to save money specifically for their children’s university education.',
    icon: HeartIcon,
    bgColor: 'bg-[#F4F6FE]',
    appThumbnail: SavologyAppThumbnail,
    appImage: SavologyApp
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
