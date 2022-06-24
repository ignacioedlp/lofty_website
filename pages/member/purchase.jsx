import Carousel from '../../components/Images/Carousel';
import Footer from '../../components/Navigation/Footer';
import Head from 'next/head';
import Navbar from '../../components/Navigation/Navbar';
import UnderTheFold from '../../components/Images/UnderTheFold';
import UploadDocuments from '../../components/Purchase/UploadDocuments';
import DownloadDocuments from '../../components/Purchase/DownloadDocuments';
import PurchaseProfile from '../../components/Purchase/PurchaseProfile';

const data = [
  {
    title: 'First name Last name',
    rol: 'Rol',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
    image:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80',
  },
  {
    title: 'Restaurants',
    rol: 'Rol',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Units',
    rol: 'Rol',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error officia earum dolor voluptatum delectus corporis, recusandae!',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
  },
];

function Purchase() {
  return (
    <div className="divide-y-2 divide-line/75 ">
      <Head>
        <title>Membership</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Carousel title={'Purchase Process'} />
      <PurchaseProfile />
      <UploadDocuments />
      <DownloadDocuments />
      <UnderTheFold
        title={'Contact center'}
        description={'Identify the key contacts for the person'}
        data={data}
      />
      <Footer />
    </div>
  );
}

export default Purchase;

export async function getServerSideProps({ req, res }) {
  //Quiero obtener el token de las cookies para saber si tengo permiso o redirijo a login

  const token = req.cookies.session;

  if (!token) {
    res.writeHead(302, { Location: '/auth/login' });
    res.end();
  }

  return {
    props: {},
  };
}