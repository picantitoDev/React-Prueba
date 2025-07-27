import { getImageUrl } from "./utils.js";

function Profile({scientistName, imageID, profession, awards, discovery, imageSize=70}){
  return(
    <section className="profile">
        <h2>{scientistName}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageID)}
          alt={scientistName}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            ({awards.join(',')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  const scientists = [
    {
      scientistName: "Katsuko Saruhashi",
      imageID: "YfeOqp2",
      profession: "geochemist",
      awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
      discovery: "a method for measuring carbon dioxide in seawater"  
    },
    {
      // Puedes agregar otro científico aquí si lo deseas
      scientistName: "Marie Curie",
      imageID: "yBXx9ar",
      profession: "physicist and chemist",
      awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry"],
      discovery: "radioactivity"
    }
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile {...scientists[0]}></Profile>
    </div>
  );
}
