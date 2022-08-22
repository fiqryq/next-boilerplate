import type { NextPage } from 'next';
import Container from '@/layout/container';
import { Text } from '@/components';

const Home: NextPage = () => {
  return (
    <Container>
      <Text as='h1'>Hello</Text>
      <Text as='a' href=''>Hello</Text>
    </Container>
  )
};

export default Home;
