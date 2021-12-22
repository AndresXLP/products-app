import './style.scss';
export const About = () => {
  return (
    <div className="product">
      <div className="aboutCard">
        <h1 className="aboutCard__name">Andres Alfonso Puello Chavez</h1>
        <img
          className="aboutCard__img"
          src="./assets/photo_perfil.jpg"
          alt="Andres Puello Img"
        />
        <p className="aboutCard__description">
          <strong>Description:</strong>Page created to demonstrate the skills
          acquired in the Make It Real Bootcamp
        </p>
        <div className="aboutCard__skills">
          <p>
            <strong>Learned skills:</strong>
          </p>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </div>
        <div className="aboutCard__other">
          <spam>email: apuello1025@gmail.com</spam>
          <a className="aboutCard__button" href="https://github.com/AndresXLP/">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
