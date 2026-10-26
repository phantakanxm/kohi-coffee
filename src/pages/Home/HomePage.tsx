import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { BrandIntro } from './BrandIntro.tsx'
import { ClosingCampaign } from './ClosingCampaign.tsx'
import { CoffeePastry } from './CoffeePastry.tsx'
import { CraftSection } from './CraftSection.tsx'
import { HomeHero } from './HomeHero.tsx'
import { SignatureCoffee } from './SignatureCoffee.tsx'
import { SpacePreview } from './SpacePreview.tsx'

export default function HomePage() {
  return (
    <>
      <PageMeta page="home" />
      <HomeHero />
      <BrandIntro />
      <SignatureCoffee />
      <CoffeePastry />
      <SpacePreview />
      <CraftSection />
      <ClosingCampaign />
    </>
  )
}
