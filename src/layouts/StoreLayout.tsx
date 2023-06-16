import { ReactNode } from '@site/utilities/deps';
import { HeaderSection } from '@site/sections/HeaderSection';

interface Props {
  children: ReactNode;
}

export function StoreLayout(props: Props) {
  console.log(props,'propspropspropspropspropspropspropspropspropspropsprops');
  
  return (
    <>
      <HeaderSection />
      <main className="mx-auto max-w-7xl">{props.children}</main>
    </>
  );
}
