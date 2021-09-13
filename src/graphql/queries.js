/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const getCarId = /* GraphQL */ `
    query GetCar($id: ID!) {
        getCar(id: $id) {
            id
        }
    }
`;


export const getCar = /* GraphQL */ `
    query GetCar($id: ID!) {
        getCar(id: $id) {
            id
            type
            latitude
            longitude
            heading
            isActive
            userId
            user {
                id
                username
                email
                
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;

export const listOrders = /* GraphQL */ `
    query ListOrders(
        $filter: ModelOrderFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                createdAt
                type
                status
                originLatitude
                originLongitude
                destLatitude
                destLongitude
                userId
                user {
                    id
                    username
                    email
                    createdAt
                    updatedAt
                }
                carId
                car {
                    id
                    type
                    latitude
                    longitude
                    heading
                    isActive
                    userId
                    createdAt
                    updatedAt
                }
                updatedAt
            }
            nextToken
        }
    }
`;

