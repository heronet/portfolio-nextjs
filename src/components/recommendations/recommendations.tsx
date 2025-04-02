import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import tuhinvai from "@/assets/recommendations/tuhinvai.jpg";
import noman from "@/assets/recommendations/noman.jpg";
import rakebul from "@/assets/recommendations/rakebul.jpg";
import SectionHeader from "../common/section-header";

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Sirat on our software engineering team at Hackules Inc. . Sirat's dedication and expertise have been invaluable to our projects. His attention to detail, problem-solving skills, and proactive approach have consistently delivered high-quality results. He is not only a skilled developer but also a great team player, always willing to collaborate and share his knowledge with others. \n Sirat's positive attitude and professionalism make him an asset to any team, and I highly recommend him for his commitment to excellence in software engineering.",
    name: "Tahuruzzoha Tuhin",
    title: "Senior Software Engineer @ Hackules Inc.",
    image: tuhinvai,
  },
  {
    quote:
      "Sirat's talent is extraordinarily but his dedications are more than this. I had a great time working with time. He will obviously create some positive values in a team.",
    name: "Abdullah All Noman",
    title: "Data Analyst Intern @ Excelarate",
    image: noman,
  },
  {
    quote:
      "I had the pleasure of working with Siratul Islam on a project and in our college club, and I can say they are hardworking and a great team player. They always showed a lot of dedication and were eager to help the team reach our goals. \n During the project, He was creative and proactive, often coming up with smart solutions to problems. They were reliable and always made sure their part of the work was done well and on time.\n In our college club, He was full of energy and always brought new ideas to the table. They helped organize events and got other members involved, making the club more engaging for everyone. \n I highly recommend Siratul Islam, they're not only skilled but also a great person to work with.",
    name: "Rakebul Hassan",
    title: "Data Analyst || Student @ AIUB",
    image: rakebul,
  },
];

export default function Recommendations() {
  return (
    <div
      id="recommendations"
      className="h-fit max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <SectionHeader
        title="Words From My Coworkers"
        subtitle="Here are a few words from people I have worked with"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
