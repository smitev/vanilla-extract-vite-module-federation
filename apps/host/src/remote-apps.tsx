import React from 'react';

const erorrMessage = 'Failed to load remote app';

const Fallback = () => erorrMessage;

const handleError = (error: any, remoteName: string) => {
  console.error(`${erorrMessage}:`, remoteName, error);
  return { default: Fallback };
};

export const RemoteApp = React.lazy(() =>
  import('remoteApp/RemoteApp').catch((error) => {
    return handleError(error, 'RemoteApp');
  })
);
