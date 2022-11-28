import type { NextPage } from 'next';
import { Text } from '@fiqryq/piqui';
import Container from '@/layouts/container';

const Home: NextPage = () => {
  return (
    <Container>
      <Text as="h1">Hello World!</Text>
    </Container>
  );
};

export default Home;
