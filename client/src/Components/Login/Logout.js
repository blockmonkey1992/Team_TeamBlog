import React from 'react'

function Logout() {
    return (
        <div>
              const LogoutHandler = () => {
    axios.post("api/users/logout")
    .then(response => {
      console.log(response)
    })
  }
                <button onClick={LogoutHandler}>로그아웃</button>
        </div>
    )
}

export default Logout
