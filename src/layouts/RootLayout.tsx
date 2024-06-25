import { FC, PropsWithChildren, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { useAppSelector } from '@/redux/hooks';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const error = useAppSelector((state) => state.error);

  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: error,
        colorScheme: 'red',
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <Box>
      <Box as="main" display="flex" flexDirection="column" paddingBottom="50px">
        {children}
      </Box>
    </Box>
  );
};
