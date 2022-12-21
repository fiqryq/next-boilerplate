export interface ProgressProps {
  value: number;
  color?: 'blue' | 'green' | 'red';
  testID?: string;
}

const Progress = ({ value, color = 'blue', testID }: ProgressProps) => {
  const fillColor = {
    blue: '#10A8E5',
    green: '#6CCA51',
    red: '#DA336B'
  };

  const getWidth = () => {
    if (value > 100) return 100;
    if (value < 0) return 0;
    return value;
  };

  const ariaLabel = `progress ${getWidth()}%`;

  return (
    <div
      data-testid={testID}
      aria-label="progress"
      className="h-[5px] w-full rounded-full bg-[#E8E8E8]"
    >
      <div
        aria-aria-describedby={ariaLabel}
        className={`h-[5px] w-[${getWidth()}%] rounded-full bg-[${
          fillColor[color]
        }]`}
      />
    </div>
  );
};

export default Progress;
