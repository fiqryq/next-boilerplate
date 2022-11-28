import type { NextPage } from 'next';
import Container from '@/layout/container';
import { Text } from '@fiqryq/piqui';

const Home: NextPage = () => {
  return (
    <Container>
      <Text as="h1">Hello World!</Text>
    </Container>
  );
};

export default Home;
