import TestimonialCard from "./components/TestimonialCard";
import profileThumbnail from "../img/profile-thumbnail.png";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 font-sans">
      <TestimonialCard
        name="Sarah Dole"
        username="sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        avatarUrl={profileThumbnail}
        avatarAlt="Sarah Dole's profile photo"
      />
    </main>
  );
}

export default App;
