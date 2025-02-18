import '../../app.css';

/** Primary UI component for user interaction */
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = true,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'bg-primary text-on-background' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['py-2 px-3 uppercase leading-[16px] font-medium', 'storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
