import { createContext, useContext } from 'react';
import { WhoopState } from 'components/Whoop/types';

export const WhoopContext = createContext<WhoopState | undefined>(undefined);

export const useWhoop = (): WhoopState => {
  const context = useContext(WhoopContext);

  if (context === undefined) {
    throw new Error('useWhoopContext must be used within a WhoopProvider');
  }

  return context;
}; 
