import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// User list: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [inviteList, setInviteList] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickInvite = (id) => {
    if (inviteList.includes(id)) {
      setInviteList((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInviteList((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
   setSuccess(true)
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert('Error fetching users');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      {success ? (
        <Success count={inviteList.length} />
      ) : (
        <Users
          onClickInvite={onClickInvite}
          inviteList={inviteList}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          isLoading={isLoading}
          items={users}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
