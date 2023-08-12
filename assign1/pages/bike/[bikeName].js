// pages/bike/[bikeName].js

import { useRouter } from 'next/router';

function BikePage() {
  const router = useRouter();
  const { bikeName } = router.query;

  return (
    <div>
      <h1>{bikeName}</h1>
      </div>
  );
}

export default BikePage;


// pages/bike/[bikeName].js

// ... rest of the component

// This function determines which paths will be pre-rendered.
export async function getStaticPaths() {
    // For example, fetch all bike names from your API or database:
    const bikeNames = ['mountain-bike', 'road-bike']; // This is just a placeholder. Replace with actual API call.
  
    const paths = bikeNames.map(bikeName => ({
      params: { bikeName }
    }));
  
    return { paths, fallback: false };
  }
  
  // This function fetches data for a given path.
  export async function getStaticProps({ params }) {
    // Fetch data for this bike name. E.g., from an API or database.
    const bikeData = {}; // Replace with actual data fetching logic.
  
    return {
      props: {
        bikeData
      }
    };
  }
  
