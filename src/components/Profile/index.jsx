import { Banner } from '../Banner';
import { Heading } from '../Heading';
import { Playlist } from '../Playlist';
import { Highlight } from '../Highlight';

import './styles.css';

const Profile = () => (
  <section className="profile">
    <Banner
      url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
      description="Featured album"
      artist="Kendrick Lamar"
      title="Mr. Morale And The Big Steppers"
    />
    <section className="section">
      <Heading>Good Evening</Heading>
      <div className="grid highlight-grid">
        <Highlight
          url="https://images.unsplash.com/photo-1620578077783-33e254311182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
          quantity="11"
          title="Release Radar"
          subtitle="Updates every day"
        />
        <Highlight
          url="https://images.unsplash.com/photo-1593359863503-f598684c806f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          quantity="11"
          title="Release Radar"
          subtitle="Updates every day"
        />
        <Highlight
          url="https://images.unsplash.com/photo-1557315360-6a350ab4eccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          quantity="11"
          title="Release Radar"
          subtitle="Updates every day"
        />
        <Highlight
          url="https://images.unsplash.com/photo-1612225724707-5a23808bc075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          quantity="11"
          title="Release Radar"
          subtitle="Updates every day"
        />
      </div>
    </section>
    <section className="section playlist-grid">
      <Heading weight="medium">Made For You</Heading>

      <div className="grid playlist-grid">
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
      </div>
    </section>

    <section className="section playlist-grid">
      <Heading weight="medium">Recently played</Heading>

      <div className="grid playlist-grid">
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
      </div>
    </section>

    <section className="section playlist-grid">
      <Heading weight="medium">For the fashionistas</Heading>

      <div className="grid playlist-grid">
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
        <Playlist
          url="https://media.pitchfork.com/photos/627c1048f65ae0efbf5a4b2b/16:9/w_2656,h_1494,c_limit/Kendrick-Lamar.jpg"
          title="Mr. Morale And The Big Steppers"
          description="Kendrick Lamar"
        />
      </div>
    </section>
  </section>
);

export { Profile };
