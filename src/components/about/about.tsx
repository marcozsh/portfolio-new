export default function About() {
  return (
    <section
      id="about-me"
      className="flex justify-center lg:justify-between my-32 text-center m-4 text-pretty pb-10 md:text-start xl:m-0"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold flex flex-col gap-3">
          <span className="text-custom_purple">Sobre mí</span>
        </h1>
        <div className="text-custom_gray mt-5 max-w-[600px] text-pretty [&>p>strong]:text-custom_purple">
          <p>
            Me llamo Marco Peña, chileno graduado de Ingeniería de software, cuento con
            <strong> +2 años de experiencia </strong>en desarrollo web. A lo
            largo de mi camino desarrollando software, me he dado cuenta de lo
            importante que es la tecnología y cómo puede mejorar la calidad de
            vida de las personas. Me encanta aprender cosas nuevas y compartir
            mis conocimientos con los demás.
          </p>
          <br />
          <p>
            Mi principal objetivo <strong>ayudarte</strong> a crear un producto
            único y de calidad que cumpla con tus expectativas y necesidades.
          </p>
          <br />
          <p>
            Siéntete libre de contactarme si tienes alguna pregunta o si quieres
            trabajar conmigo.
          </p>
        </div>
      </div>
      <div className="lg:flex flex-col gap-3 hidden">
        <img loading="lazy" src="/img-2.webp" className="w-[550px]" alt="about me image"/>
      </div>
    </section>
  );
}
