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
            userId
            createdAt
            updatedAt
        }
    }
`;
