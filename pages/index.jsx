import Footer from '../components/Navigation/Footer';
import Head from 'next/head';
import InformerForm from '../components/Auth/InformerForm';
import Navbar from '../components/Navigation/Navbar';
import TopBanner from '../components/Images/TopBanner';
import UnderTheFold from '../components/Images/UnderTheFold';

const data = [
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
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lofty home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-auto divide-y-2 scrollbar-hide divide-line/75 ">
        <Navbar />
        <TopBanner urlVideo={'videoIndexPage.mp4'} />
        <UnderTheFold
          title={'OUR PRODUCTS'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam'
          }
          data={data}
        />
        <InformerForm />

        <Footer />
      </div>
    </div>
  );
}
