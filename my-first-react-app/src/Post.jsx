import { VscBug, VscGlobe } from 'react-icons/vsc'

const users = [
  {
    id: 1,
    name: 'Piero',
    image: null
  },
  {
    id: 2,
    name: 'Ivan',
    image: 'http://robohash.org/user2'
  },
  {
    id: 3,
    name: 'Ronald',
    image: 'http://robohash.org/user3'
  }
]

function Post() {
  return (
    <>
      {users.map( (user) => {
        return(
          <div key={user.id}>
            <h1>{user.name}</h1>
              {!user.image ? <span>Image Not Found</span> : <img src={user.image} alt={`${user.name + 'Cop'}`}/>}
          </div>
        )
      })}
    </>
  );
}

export default Post;
