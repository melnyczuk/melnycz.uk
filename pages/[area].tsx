import { useRouter } from 'next/router';
import App from '../src/components/App';
import Works from '../src/components/Works';

export default () => {
  const { area } = useRouter().query as { area: string };

  if (!area) return null;

  return (
    <App page={area}>
      <Works area={area} />
    </App>
  );
};
