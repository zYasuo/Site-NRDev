import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md dark:bg-primary/15 bg-muted/40", className)}
      {...props}
    />
  )
}

export { Skeleton }
