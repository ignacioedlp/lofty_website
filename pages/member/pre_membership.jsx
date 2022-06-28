import AboutProperties from '../../components/AboutProperties';
import Carousel from '../../components/Images/Carousel';
import Footer from '../../components/Navigation/Footer';
import Head from 'next/head';
import Map from '../../components/Map';
import Navbar from '../../components/Navigation/Navbar';
import Testimonial from '../../components/Testimonial';
import UnderTheFold from '../../components/Images/UnderTheFold';

function PreMembership({ data }) {
  return (
    <div className="divide-y-2 divide-line/75 ">
      <Head>
        <title>Membership</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Carousel title={'Process Tagline'} />
      <UnderTheFold
        title={'OUR PRODUCTS'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam'
        }
        data={data}
      />
      <Map />
      <Carousel title={'Active filter for models'} />
      <AboutProperties />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default PreMembership;

export async function getServerSideProps({ req, res }) {
  //Quiero obtener el token de las cookies para saber si tengo permiso o redirijo a login

  const token = req.cookies.session;

  if (!token) {
    res.writeHead(302, { Location: '/auth/login' });
    res.end();
  }

  return {
    props: {
      data: [
        {
          title: 'Workspaces',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
          image:
            'https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtzcGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Restaurants',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
          image:
            'https://images.unsplash.com/photo-1565895405127-481853366cf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Units',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
          image:
            'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  };
}
