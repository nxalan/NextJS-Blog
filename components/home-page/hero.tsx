import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alan.png"
          alt="An image showing Alan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Alan</h1>
      <p>
        I blog about web development, especially frontend frameworks like NextJS
        or ReactJS
      </p>
    </section>
  );
}

export default Hero;
