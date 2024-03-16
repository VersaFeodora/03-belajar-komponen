import { MyProfile } from '../../components/myprofile';

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile 
        person= {{id: 'szV5sdG', name: 'Maria Skłodowska-Curie'}}
        size= {70}
        data= {{
            profession: 'Fisikawan dan kimiawan',
            achievement: ['Penghargaan Nobel Fisika', 'Penghargaan Nobel Kimia', 'Medali Davy', 'Medali Matteucci'],
            invention: 'Polonium (unsur kimia)'
        }}
      />
      <MyProfile 
        person= {{id: 'YfeOqp2', name: 'Katsuko Saruhashi'}}
        size= {70}
        data= {{
            profession: 'Ahli Geokimia',
            achievement: ['Penghargaan Miyake Geokimia', 'Penghargaan Tanaka'],
            invention: 'Sebuah metode untuk mengukur karbon dioksida pada air laut'
        }}
      />
    </div>
  );
}