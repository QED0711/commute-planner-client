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

const RUN_ALL_COMMUTES = gql`
    mutation runAllCommutes($currentMinute: String!){
        runAllCommutes(currentMinute: $currentMinute){
            id
            origin
            destination
        }
    }
`

export {
    NEW_ROUTE,
    RUN_ALL_COMMUTES,
}