import { render } from '@testing-library/react';
import { SidebarProvider } from '~/providers';

export const renderWithContext = (children: React.ReactNode) => {
  return render(
    <SidebarProvider.Provider value={{}}>{children}</SidebarProvider.Provider>
  );
};
