/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCar = /* GraphQL */ `
    mutation CreateCar(
        $input: CreateCarInput!
        $condition: ModelCarConditionInput
    ) {
        createCar(input: $input, condition: $condition) {
            id
            type
            latitude
            longitude
            heading
            isActive
            orders {
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
                    carId
                    updatedAt
                }
                nextToken
            }
            userId
            user {
                id
                username
                email
                orders {
                    nextToken
                }
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
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
