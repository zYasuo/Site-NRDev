import { usePathname } from 'next/navigation';
import { SlashIcon } from '@radix-ui/react-icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function BreadCrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  // Remove the first segment if it exists
  const friendlyPathSegments = pathSegments.slice(1);

  const generateBreadcrumbs = () => {
    const breadcrumbs = friendlyPathSegments.map((segment, index) => {
      const href = '/' + friendlyPathSegments.slice(0, index + 1).join('/');
      const isLast = index === friendlyPathSegments.length - 1;
      const title = segment.charAt(0).toUpperCase() + segment.slice(1);
      return (
        <BreadcrumbItem key={href}>
          {isLast ? (
            <BreadcrumbPage>{title}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
          )}
          {!isLast && (
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
          )}
        </BreadcrumbItem>
      );
    });
    return breadcrumbs;
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        {friendlyPathSegments.length > 0 && (
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
        )}
        {generateBreadcrumbs()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
