interface H2Props {
  className?: string;
  text?: string;
  span?: string;
}

export function H2({ className, text, span }: H2Props) {
  return (
    <h2 className={className}>
      {text}
      {span && <span className="bg-gradient-to-b from-blue-600 to-primary text-transparent bg-clip-text dark:from-primary dark:to-sky-500">{span}</span>}
    </h2>
  );
}
