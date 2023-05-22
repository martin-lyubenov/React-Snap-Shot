import classes from "./Content.module.css";
import Image from "./Image";

function Content({ theme, images, error }) {
  const headingText = theme
    ? theme + " Pictures"
    : "Please search for pictures";

  let content;
  console.log(error);

  if (error) {
    content = <p className={classes.error}>{error}</p>;
  } else if (images.length === 0) {
    content = <p>No images found</p>;
  } else {
    const innerContent = images.map((img) => {
      const url = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`;

      return <Image key={img.id} src={url} alt={img.title} />;
    });
    content = <div className={classes.content}>{innerContent}</div>;
  }

  return (
    <>
      <h2 className={classes.heading}>{headingText}</h2>
      {content}
    </>
  );
}

export default Content;
