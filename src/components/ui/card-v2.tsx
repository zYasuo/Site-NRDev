import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface CardBodyProps {
  title: string;
  description: string;
  className?: string;
}

const CardBody = ({ title, description, className = "p-4" }: CardBodyProps) => (
  <div className={cn("text-left", className)}>
    <h3 className="text-lg font-regular font-regular font-semibold font-sans mb-1 ">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 font-regular font-regular font-sans">
      {description}
    </p>
  </div>
);

interface SimpleCard_V2Props {
  title: string;
  description: string;
}

export const SimpleCard_V2: React.FC<SimpleCard_V2Props> = ({
  title,
  description,
}) => {
  const Line = ({ className = "" }) => (
    <div
      className={cn(
        "h-px w-full  absolute -z-0 primary/15 from-primary/40 to-primary/5",
        className
      )}
    />
  );
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8">
      <Line className="bg-gradient-to-l left-0 top-2 sm:top-4 md:top-6" />
      <Line className="bg-gradient-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />
      <Line className="w-px bg-gradient-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
      <Line className="w-px bg-gradient-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0" />
      <div className="relative z-20 mx-auto py-8">{children}</div>
    </div>
  );

  return (
    <Container>
      <div className="p-4 w-full center">
        <CardBody title={title} description={description} />
      </div>
    </Container>
  );
};

export const Line = ({ className = "" }) => (
  <div
    className={cn(
      "h-px w-full  absolute -z-0 primary/15 from-primary/40 to-primary/5",
      className
    )}
  />
);
export const Container = ({ children }: { children: React.ReactNode }) => (
  <Card className="relative mx-auto w-full px-4 sm:px-6 md:px-8 bg-background  z-20">
    <Line className="bg-gradient-to-l left-0 top-2 sm:top-4 md:top-6" />
    <Line className="bg-gradient-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />
    <Line className="w-px bg-gradient-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
    <Line className="w-px bg-gradient-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0" />
    <div className="relative z-20 mx-auto py-8">{children}</div>
  </Card>
);
