import gql from 'graphql-tag';

export const LIST_INTERPRETERS = gql`
    query List {
        listInterpreters {
            items {
                id
                name
                skills {
                    name
                    level
                }
                available
                email
                videoLink
            }
        }
    }
`