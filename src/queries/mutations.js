import gql from 'graphql-tag';

const NEW_ROUTE = gql`
    mutation newRoute($origin: String!, $destination: String!){
        newRoute(origin: $origin, destination: $destination){
            id
            origin
            destination
        }
    }
`

export {
    NEW_ROUTE,
}