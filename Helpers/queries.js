import gql from 'graphql-tag'

// export const GET_DEPARTMENTS = gql`
// {
//   Department {
//     name
//     departmentId
//   }
// }`

// export const GET_POLICY_AREAS = gql`
// {
//   PolicyArea{
//     policyAreaId
//     name
//   }
// }`

// export const GET_ISSUES = gql`
// {
//   Issue{
//     issueId
//     name
//   }
// }`

// export const CREATE_ISSUE  = gql`
//   mutation CreateIssue($name: String!) {
//     CreateIssue(name: $name) {
//       name
//     }
//   }
// `;

// export const ADD_DEPARTMENT  = gql`
//   mutation AddPersonPDepartments($personId: ID!, $departmentId:ID!) {
//     AddPersonDepartments(from:{personId:$personId}, to:{departmentId: $departmentId} ){
//     	from{
//     		personId
//     	}
//     	to{
//     		departmentId
//     	}

//     }
//   }
// `;

// export const GET_PARTIES = gql`
// {
//   Party {
//     name
//     partyId
//     color
//     logo
//   }
// }`


// export const ADD_PERSON_PARTY  = gql`
//   mutation AddPersonParty($personId: ID!, $partyId:ID!) {
//     AddPersonParty(from:{personId:$personId}, to:{partyId: $partyId} ){
//       from{
//         personId
//       }
//       to{
//         partyId
//       }

//     }
//   }
// `;


// export const ADD_PERSON  = gql`
//   mutation CreatePerson($name: String!,  $id:ID!, $jobTitle: String!, $twitter: String!, $image:String!) {
//     CreatePerson(name: $name, personId: $id, jobTitle:$jobTitle, twitter:$twitter, image:$image) {
//       name
//       personId
//       jobTitle
//       twitter
//       image
      
//     }
//   }
// `;

// export const UPDATE_PERSON  = gql`
//   mutation UpdatePerson($name: String!, $id: ID!, $jobTitle: String!, $twitter: String!, $image:String!) {
//     UpdatePerson(name: $name, personId: $id, jobTitle:$jobTitle, twitter:$twitter, image:$image) {
//       name
//       personId  
//       jobTitle
//       twitter
//       image
//     }
//   }
// `;
// export const DELETE_PERSON  = gql`
//   mutation DeletePerson($personId: ID!) {
//     DeletePerson(personId: $personId) {
//       personId
//     }
//   }
// `;

// export const CREATE_ARTICLE  = gql`
//  mutation CreateArticle($lastEdited: Float, $type: String, $image: String, $title: String, $policyAreas:[String], $issues:[String], $description: String, $reactions: Boolean, $voteId: String) {
//   CreateArticle(lastEdited: $lastEdited, type: $type, title: $title, image: $image, policyAreas:$policyAreas, issues:$issues, description:$description, reactions:$reactions, voteId:$voteId) {
//       image
//       title
//       type
//       policyAreas
//       issues
//       description
//       reactions
//       voteId
//     }
//   }
// `;


// export const UPDATE_ARTICLE  = gql`
//   mutation UpdateArticle($articleId: ID!, $lastEdited: Float, $type: String, $image: String, $title: String, $policyAreas:[String], $issues:[String], $description: String, $reactions: Boolean, $voteId: String) {
//   UpdateArticle(articleId: $articleId, lastEdited: $lastEdited, type: $type, title: $title, image: $image, policyAreas:$policyAreas, issues:$issues, description:$description, reactions:$reactions, voteId:$voteId) {
//       image
//       title
//       type
//       policyAreas
//       issues
//       description
//       reactions
//       voteId
//     }
//   }
// `;

// export const DELETE_ARTICLE  = gql`
//   mutation DeleteArticle($articleId: ID!) {
//     DeleteArticle(articleId: $articleId) {
//       articleId
//     }
//   }
// `;

export const GET_ARTICLES = gql`
{
  Article {
    articleId
    image
    title
    type
    policyAreas
    issues
    description
    reactions
    voteId
    
  }
}`


