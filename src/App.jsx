import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import RootRoutes from '@/router'
import { Layout } from '@/components'
import RootStyle from '@/styles/root.style'

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CONTENT_API,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Layout>
          <RootStyle />
          <RootRoutes />
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
