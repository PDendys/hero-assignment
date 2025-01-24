import './main.css'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UniversalRouter } from './universal-router';

export const queryClient = new QueryClient();

export function Root(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <UniversalRouter location={props.location} />
    </QueryClientProvider>
  )
}
