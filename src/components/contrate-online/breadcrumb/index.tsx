"use client"
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SlashIcon } from '@radix-ui/react-icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import useBreadcrumbStore from '@/hooks/contrate-online/breadcrumbs/useBreadcrumb';


export function BreadcrumbWithCustomSeparator() {
  const pathname = usePathname();
  const setPath = useBreadcrumbStore((state) => state.setPath);
  const path = useBreadcrumbStore((state) => state.path);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  const basePath = '/contrate-online/cliente-nr/nossos-servicos';

  if (!path.startsWith(basePath)) {
    return null;
  }

  const remainingPath = path.replace(basePath, '').split('/').filter((crumb) => crumb);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={basePath}>Nossos Serviços</BreadcrumbLink>
        </BreadcrumbItem>
        {remainingPath.length > 0 && (
          <>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            {remainingPath.map((crumb, index) => {
              const href = `${basePath}/${remainingPath.slice(0, index + 1).join('/')}`;
              const isLast = index === remainingPath.length - 1;
              return (
                <BreadcrumbItem key={href}>
                  {isLast ? (
                    <BreadcrumbPage>{crumb}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink href={href}>{crumb}</BreadcrumbLink>
                      <BreadcrumbSeparator>
                        <SlashIcon />
                      </BreadcrumbSeparator>
                    </>
                  )}
                </BreadcrumbItem>
              );
            })}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}