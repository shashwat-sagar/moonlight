import "../styles/About.scss";
import aboutus from "../assets/images/aboutus.jpeg";
const About = () => {
  return (
    <div className="about-Main-Ctn">
      <div className="h-60 "></div>
      <h1 className="about-heading">About Us</h1>
      <div className="about-card">
        <p className="text-center text-4xl">
          Welcome to <strong>Moonlight</strong>,
          <span> your one-stop destination for exquisite catering and stunning event décor!</span>
        </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <img src={aboutus} alt="About Us" className="about-image" />
          </div>
          <div className="col-span-6">
            <p>
              With a passion for creating unforgettable memories, we specialize in providing delectable cuisine and breathtaking decorations for all kinds of events, including weddings, corporate gatherings, and private celebrations. Our team is dedicated to making your special day truly extraordinary, offering personalized services that reflect your unique style and taste.
            </p>
            <h2 className="font-bold">Catering Excellence:</h2>
            <p>
              Our culinary team crafts delicious, high-quality dishes using the freshest ingredients to ensure a delightful dining experience for you and your guests. From traditional favorites to modern gourmet creations, we tailor our menus to suit every occasion and dietary preference.
            </p>
            <h2 className="font-bold">Event Décor:</h2>
            <p>
              We believe that every event deserves to be beautiful. Our expert decorators work with you to design stunning setups that match your theme and vision, whether it's a grand wedding, a cozy celebration, or a formal corporate event.
            </p>
            <p>
              At <strong>Moonlight</strong>, we pride ourselves on attention to detail, exceptional service, and a commitment to excellence. Let us take care of the food and décor so you can focus on enjoying your special moments.
            </p>
            <p className="font-bold">
              Contact us today to start planning your dream event!
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="About-Ctn">About</div> */}
        <div className="Founder-Msg-Ctn">
          <h1>Founder</h1>
          <span>
            <p>Ejaz Sharif Khan</p>
            <p>( Founder and Director of Moonlight Caterer )</p>
          </span>
          <h2>
            Ejaz Sharif Khan is the founder and Director of Moonlight Caterer.
          </h2>
          <p className="Founder-Msg-Para">
            While doing his study he was engaged in part time jobs , he worked
            with different hotels, where he gained a lot of experience in food
            and beverage services, it all started from the city of dreams (
            Mumbai ). After graduating from Mumbai University in 2014, he
            started his journey from ITC hotels and then went to 2 countries
            where he worked in Fairmont hotels and resorts (1600 Rooms hotel
            with 11 Outlets). At Moonlight Caterer, he combines his business
            ideas and discipline which makes work more effective and efficient
            which brings clients at a satisfaction point.
          </p>
          <p>
            "If you're passionate about something and you work hard, then I
            think you will be successful." - Ejaz Sharif Khan
          </p>
        </div>
         
      </div>
    </div>
  );
};

export default About;
