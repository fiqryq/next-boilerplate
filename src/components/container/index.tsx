import { merge } from '@/lib';
import React from 'react';

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return <div className={merge(className)} ref={ref} {...props} />;
  }
);

Container.displayName = 'Container';

export { Container };
