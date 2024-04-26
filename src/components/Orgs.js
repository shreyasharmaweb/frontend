import React from 'react';

export default function Orgs() {
  const organizationsData = [
    {
      "org_name": "Organization A",
      "org_id": "org_a_id",
      "users": [
        {
          "user_id": "user_a1_id",
          "name": "User A1"
        },
        {
          "user_id": "user_a2_id",
          "name": "User A2"
        }
      ]
    },
    {
      "org_name": "Organization B",
      "org_id": "org_b_id",
      "users": [
        {
          "user_id": "user_b1_id",
          "name": "User B1"
        },
        {
          "user_id": "user_b2_id",
          "name": "User B2"
        }
      ]
    }
  ];

  return (
    <div >
      <button className='btn_org'>Add more org</button>
      {organizationsData.map((e) => (
        <div className='Org'>
        <li key={e.org_id}>
          <h2>{e.org_name}</h2>
          <ul>
            {e.users.map((user) => (
              <li key={user.user_id}>{user.name}</li>
            ))}
          </ul>
          <button>Deactivate</button>
        </li>
        </div>
      ))}
    </div>
  );
}
