import { expect, test } from 'vitest';
import { cn } from '../utils';

test(cn('bg-white-500', 'bg-red-500'), () => {
  expect('bg-red-500');
});
