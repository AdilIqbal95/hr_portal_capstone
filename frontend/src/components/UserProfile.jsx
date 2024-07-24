
function UserProfile({currentUser}) {

    return (
      <>
        <section>
            <article>
                <img src="" alt="Image of user" />
            </article>
            <article>
                <p>{currentUser.firstName}</p> 
                <p>{currentUser.email}</p>
                <p>{currentUser.team.teamName}</p>
                <p>{currentUser.location}</p>
            </article>
        </section>
        

      </>
    )
  }
  
  export default UserProfile;