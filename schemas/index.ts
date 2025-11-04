// ============================================
// PAGES - Documents with lang field
// ============================================
import homePage from "./pages/homePage";
import workPage from "./pages/workPage";
import tattooServicePage from "./pages/tattooServicePage";
import hennaServicePage from "./pages/hennaServicePage";
import testTattooServicePage from "./pages/testTattooServicePage";
import onlineCoursePage from "./pages/onlineCoursePage";
import inPersonCoursePage from "./pages/inPersonCoursePage";
import portfolioPage from "./pages/portfolioPage";
import boutiquePage from "./pages/boutiquePage";
import cartPage from "./pages/cartPage";
import contactPage from "./pages/contactPage";
import blogPage from "./pages/blogPage";
import articlePage from "./pages/articlePage";
import legalPage from "./pages/legalPage";
import notFoundPage from "./pages/notFoundPage";
import policiesPage from "./pages/policiesPage";

// ============================================
// REF COMPONENTS - Documents without lang field
// ============================================
import { hero, homeHero } from "./ref components/hero";
import {
  toilesProject,
  flashProject,
  hennaProject,
  tattooProject,
} from "./ref components/project";
import {
  cartForm,
  flashForm,
  contactForm,
  approxForm,
} from "./ref components/forms";
import display from "./ref components/display";
import product from "./ref components/product";
import collapsible from "./ref components/collapsible";
import openingHours from "./ref components/openingHours";
import socials from "./ref components/socials";

// ============================================
// BLOCKS - Appear to be ref components
// ============================================
import history from "./blocks/history";
import work from "./blocks/work";
import bigCta from "./blocks/bigCTA";
import blog from "./blocks/blog";

// ============================================
// REUSE COMPONENTS - Type objects (not documents)
// ============================================
import fancyText from "./reuse components/fancyText";
import externalLink, { trippleCtas } from "./reuse components/cta";
import review from "./reuse components/review";
import pricePlan from "./reuse components/pricePlan";
import description, { customDescription } from "./reuse components/description";
import customImage from "./reuse components/customImage";
import customParagraph from "./reuse components/customParagraph";
import video from "./reuse components/video";
import language from "./reuse components/language";
import localLink from "./reuse components/localLink";
import localPath from "./reuse components/localPath";
import workType, {
  bodyParts,
  year,
  hennaColor,
  tattooColor,
  flashStyle,
} from "./reuse components/workType";
import seo from "./reuse components/seo";

// ============================================
// SCHEMA EXPORT
// ============================================
export const schemaTypes = [
  // Pages (with lang field)
  homePage,
  workPage,
  tattooServicePage,
  hennaServicePage,
  testTattooServicePage,
  onlineCoursePage,
  inPersonCoursePage,
  portfolioPage,
  boutiquePage,
  cartPage,
  contactPage,
  blogPage,
  articlePage,
  legalPage,
  notFoundPage,
  policiesPage,

  // Ref Components (documents without lang)
  hero,
  homeHero,
  flashProject,
  tattooProject,
  hennaProject,
  toilesProject,
  display,
  product,
  cartForm,
  flashForm,
  contactForm,
  approxForm,
  collapsible,
  openingHours,
  socials,

  // Blocks
  history,
  work,
  bigCta,
  blog,

  // Reuse Components (type objects)
  fancyText,
  externalLink,
  trippleCtas,
  review,
  pricePlan,
  description,
  customDescription,
  customImage,
  customParagraph,
  video,
  language,
  localLink,
  localPath,
  workType,
  bodyParts,
  year,
  hennaColor,
  tattooColor,
  flashStyle,
  seo,
];
