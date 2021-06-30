import classes from './hero.module.css';
import Image from 'next/image';

function Hero(){
    return(
        <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
            src='/image/site/Yuti.jpg'
            alt='picture of Yuti'
            width={300}
            height={300} />
        </div>
        <h1>
            Hi, I am Yuti!
        </h1>
        <p>I am trying to learn React.js and Next.js rightnow</p>
        </section>
    );
}

export default Hero;