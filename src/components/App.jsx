import { Profile } from "./task_1/Profile";
import user from './task_1/user.json';
import { Statistics } from "./task_2/statistics";
import data from './task_2/data.json';
import { FriendList } from "./task_3/FriendList";
import friends from './task_3/friends.json'
import { TransactionHistory } from "./task_4/TransactionHistory";
import transactions from './task_4/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
{/* <Statistics stats={data} /> */}

<FriendList friends={friends} />;

<TransactionHistory items={transactions} />;

    </div>
  );
};


