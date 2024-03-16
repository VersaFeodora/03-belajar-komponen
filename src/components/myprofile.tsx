import { getImageUrl } from '@/utils/utils';
export function MyProfile( {person,size,data}:any ) {
  return (
    <section className='profile'>
        <h2>{person.name}</h2>
        <img
            className="avatar"
            src={getImageUrl(person.id)}
            alt={person.name}
            width={size}
            height={size}
        />
        <ul>
          <li>
            <b>Profesi: </b> 
            {data.profession}
          </li>
          <li>
            <b>Penghargaan: {data.achievement.length} </b>
            <ul>
                {data.achievement.map((item:any) => (
                    <li>{item}</li>
                ))}
            </ul>
          </li>
          <li>
            <b>Telah Menemukan: </b>
            {data.invention}
          </li>
        </ul>
    </section>
  );
}

function makeList(array:Array<any>){
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    return list;
}