

interface H1Props {
  className?: string;
  text?: string;
}

export function H1({ className, text }: H1Props) {
  return (
    <h1 className={className}>{text}</h1>
  );
}
