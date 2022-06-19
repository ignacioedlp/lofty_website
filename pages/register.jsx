import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Hero from "../components/Hero";
import CarouselImages from "../components/CarouselImages";
import ViewVideos from "../components/ViewVideos";
import RegisterForm from "../components/RegisterForm";
import SignUpNow from "../components/SignUpNow";


export default function Register() {


  return (
    <div className="divide-y-2 divide-line/75 ">
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Products />
      <CarouselImages />
      <ViewVideos />
      <SignUpNow />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  //Quiero obtener el token de las cookies para saber si tengo permiso o redirijo a login

  const token = req.cookies.session;

  if (token) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
}