
import classes from './Image.module.css'

function Image({ src, alt }) {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={src} alt={alt} />
    </div>
  );
}

export default Image;
