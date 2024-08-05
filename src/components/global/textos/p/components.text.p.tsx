interface ParagraphProps {
  className?: string;
  text?: string;
}

export function Paragraph({ className, text }: ParagraphProps) {
  return (
    <p className={className}>{text}</p>
  );
}