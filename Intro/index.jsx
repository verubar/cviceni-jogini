import './index.css';

export const Intro = (props) => {
      return (
          <>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </>
      )
    }
