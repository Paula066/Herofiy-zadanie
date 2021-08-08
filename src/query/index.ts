export const usersData = `
        query {
  users {
    data {
      id,
      name,
      username,
      email,
      phone,
      website,
      address {
        street,
        city
      },
      phone,
      company {
      name
      },
      todos {
        data {
          id,
          title,
          completed,
          user {
            id
          }
        }
      }
    }
  }
}
    `
