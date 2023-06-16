import { StoreLayout } from '@site/layouts/StoreLayout';
import { HeroSection } from '@site/sections/HeroSection';
import NewProductSlider from '@site/sections/NewProductSlider';
import SliderSection from '@site/sections/SliderSection';

export default function Page() {
  return (

      <StoreLayout>
      <HeroSection />
      <SliderSection />
      <NewProductSlider />
    </StoreLayout>

  );
}
