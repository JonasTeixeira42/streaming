import { Banner } from '../Banner';
import { Heading } from '../Heading';

import './styles.css';

const Profile = () => (
  <section class="profile">
    <Banner
      url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
      description="Featured album"
      artist="Kendrick Lamar"
      title="Mr. Morale And The Big Steppers"
    />
    <section className="recommendation-wrapper">
      <Heading>Good Evening</Heading>
      hello
    </section>
  </section>
);

export { Profile };
