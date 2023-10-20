// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function ServPage() {
//   const { id } = useParams();

//   useEffect(() => {
//     // Make the request to ServPage.php
//     const requestUrl = `ServPage.php?id=${id}`;

//     // Use the appropriate method to make the request (e.g., fetch or Axios)
//     fetch(requestUrl)
//       .then(response => response.text())
//       .then(data => {
//         // Handle the response data here
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors here
//         console.error(error);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>Serv Page</h1>
//       <p>ID: {id}</p>
//     </div>
//   );
// }

// export default ServPage;

import React from 'react';
import { useParams } from 'react-router-dom';

// const Serv: React.FC = () => {
//     const { id } = useParams();
//   return (
//     <div>
//       <h1>My Video Player</h1>
//       <iframe src={`https://multiembed.mov/?video_id=${id}&tmdb=1`} frameBorder="0" allowFullScreen></iframe>
//     </div>
//   );
// };


// const Serv: React.FC = () => {
//     const { id } = useParams();
//     return (
//       <div className="video-page">
//         <div className="video-container">
//           <iframe className="video-player" src={`https://multiembed.mov/?video_id=${id}&tmdb=1`} frameBorder="0" allowFullScreen></iframe>
//         </div>
//         <div className="video-details">
//           <h1 className="video-title">Hitman's Wife's Bodyguard</h1>
//           <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         </div>
//       </div>
//     );
//   };


const Serv: React.FC = () => {
    const { id } = useParams();
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full h-full rounded-t-lg" src={`https://multiembed.mov/?video_id=${id}&tmdb=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">Hitman's Wife's Bodyguard</h1>
         </div>
        </div>
      </div>
    );
  };
export default Serv;