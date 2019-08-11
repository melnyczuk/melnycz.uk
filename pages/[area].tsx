import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';
import Works from '../src/components/Works';

export default () => {
  const { area } = useRouter().query as { area: string };

  if(!area) return null;

  return (
    <Layout page={area}>
      <Works area={area}/>
    </Layout>
  )
};
