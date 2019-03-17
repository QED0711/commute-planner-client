import gql from 'graphql-tag';

const GET_ROUTE = gql`
    query($id: ID!){
        route(id: $id){
            origin
            destination
            times
        }
    }
`

const GET_ROUTES = gql`
    {
        routes{
            id
            origin
            destination
        }
    }
`



export {
    GET_ROUTE,
    GET_ROUTES,
}
