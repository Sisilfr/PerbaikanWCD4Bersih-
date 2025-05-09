import User from "./User";
interface CardTestimonialProps {
  image: string;
  name: string;
  position: string;
}
export default function CardTestimonial({
  image,
  name,
  position,
}: CardTestimonialProps) {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="mb-3 text-xl">
         "Collaborating with Brightscout & Ayush has been a fantastic experience. She combines a strong technical foundation with great communication skills, making every project smoother and more successful. Her work always exceeds expectations."
        </h1>
        <User image={image} name={name} position={position} />
      </div>
    </>
  );
}
