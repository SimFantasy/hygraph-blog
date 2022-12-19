import { gql } from '@apollo/client'

const GET_AUTHOR = gql`
  query GetAuthor($id: ID!) {
    author(where: { id: $id }) {
      bio
      name
      avatar {
        url
      }
    }
  }
`

const GET_HOME_POSTS = gql`
  query GetHomePosts($first: Int!) {
    posts(first: $first, orderBy: createdAt_DESC, where: { featuredPost: true }) {
      description
      slug
      title
      id
      createdAt
      categories {
        name
      }
      featuredPost
    }
  }
`

const GET_HOME_PORTFOLIOS = gql`
  query GetHomePortfolios($first: Int!) {
    portfolios(where: { isFeatrue: true }, first: $first) {
      image
      isFeatrue
      name
      slug
      id
    }
  }
`

const GET_POSTS_CATEGORIES = gql`
  query GetPostCategory {
    postCategories {
      name
      slug
    }
  }
`

const GET_POSTS = gql`
  query GetPosts($first: Int!, $skip: Int!, $slug: String = "") {
    postsConnection(
      first: $first
      skip: $skip
      where: { categories_every: { slug_contains: $slug } }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          createdAt
          description
          featuredImage
          slug
          title
          categories {
            slug
            name
          }
        }
      }
    }
  }
`

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      slug
      title
      featuredImage
      createdAt
      tags
      categories {
        name
        slug
      }
      content {
        markdown
      }
    }
  }
`

const GET_PORTFOLIOS_CATEGORIES = gql`
  query GetPortfolioCategories {
    portfolioCategories {
      name
      slug
    }
  }
`
const GET_PORTFOLIOS = gql`
  query GetPortfolios($first: Int!, $skip: Int!, $slug: String = "") {
    portfoliosConnection(
      skip: $skip
      first: $first
      where: { portfolioCategories_every: { slug_contains: $slug } }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          image
          name
          slug
        }
      }
    }
  }
`

const GET_PORTFOLIO = gql`
  query GetPortfolio($slug: String!) {
    portfolio(where: { slug: $slug }) {
      content
      createdAt
      image
      link
      name
      portfolioCategories {
        name
      }
      gallery {
        image
        title
      }
    }
  }
`

const GET_PAGE = gql`
  query GetPage($slug: String!) {
    page(where: { slug: $slug }) {
      image
      title
      content
    }
  }
`

export default {
  GET_HOME_POSTS,
  GET_AUTHOR,
  GET_HOME_PORTFOLIOS,
  GET_POSTS_CATEGORIES,
  GET_POSTS,
  GET_POST,
  GET_PORTFOLIOS_CATEGORIES,
  GET_PORTFOLIOS,
  GET_PORTFOLIO,
  GET_PAGE
}
