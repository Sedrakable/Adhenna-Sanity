import { hero, homeHero } from "./ref components/hero";
import fancyText from "./reuse components/fancyText";
import externalLink, { trippleCtas } from "./reuse components/cta";
import homePage from "./pages/homePage";
import history from "./blocks/history";
import review from "./reuse components/review";
import bigCta from "./blocks/bigCTA";
import {
  canvasProject,
  flashProject,
  hennaProject,
  tattooProject,
} from "./ref components/project";
import work from "./blocks/work";
import workPage from "./pages/workPage";
import pricePlan from "./reuse components/pricePlan";
import description from "./reuse components/description";
import collapsible from "./reuse components/collapsible";
import customImage from "./reuse components/customImage";
import video from "./reuse components/video";
import language from "./reuse components/language";
import tattooServicePage from "./pages/tattooServicePage";
import localLink from "./reuse components/localLink";
import localPath from "./reuse components/localPath";
import workType, {
  bodyParts,
  year,
  hennaColor,
  flashStyle,
} from "./reuse components/workType";
import seo from "./reuse components/seo";
import display from "./ref components/display";
import portfolioPage from "./pages/portfolioPage";
import testTattooServicePage from "./pages/testTattooServicePage";
import hennaServicePage from "./pages/hennaServicePage";
import onlineCoursePage from "./pages/onlineCoursePage";
import inPersonCoursePage from "./pages/inPersonCoursePage";
import boutiquePage from "./pages/boutiquePage";
import product from "./ref components/product";
import cartPage from "./pages/cartPage";
import { cartForm, flashForm, contactForm } from "./ref components/forms";
import contactPage from "./pages/contactPage";

export const schemaTypes = [
  homePage,
  tattooServicePage,
  hennaServicePage,
  testTattooServicePage,
  onlineCoursePage,
  inPersonCoursePage,
  portfolioPage,
  boutiquePage,
  contactPage,
  cartForm,
  flashForm,
  contactForm,
  hero,
  homeHero,
  workPage,
  cartPage,
  work,
  flashProject,
  tattooProject,
  hennaProject,
  canvasProject,
  display,
  product,
  bigCta,
  history,
  review,
  fancyText,
  externalLink,
  trippleCtas,
  customImage,
  video,
  language,
  localLink,
  localPath,
  workType,
  pricePlan,
  description,
  collapsible,
  bodyParts,
  year,
  hennaColor,
  flashStyle,
  seo,
];
