export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </li>
  );
}
