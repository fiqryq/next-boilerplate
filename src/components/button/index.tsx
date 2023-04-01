import { merge } from '@/lib';
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const styles = tv({
  base: 'text-mine-shaft-500 px-4 py-1 rounded-sm',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
      warning: 'bg-yellow-500 text-white',
      success: 'bg-green-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'px-3 py-1 text-base',
      lg: 'px-4 py-1 text-lg',
      xl: 'px-6 py-1 text-xl'
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    },
    border: {
      true: 'border gray-500'
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    border: false
  }
});

type ButtonVariantProps = VariantProps<typeof styles>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps
  extends Omit<NativeProps, keyof ButtonVariantProps>,
    ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, color, radius, border, className, ...buttonAttributes }, ref) => {
    return (
      <button
        className={merge(
          styles({
            color: color,
            size: size,
            radius: radius,
            border: border
          }),
          className
        )}
        ref={ref}
        {...buttonAttributes}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
