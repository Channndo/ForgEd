import { Hero } from "@/components/home/Hero";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { SkillCategories } from "@/components/home/SkillCategories";
import { WhyForgEd } from "@/components/home/WhyForgEd";
import { LearningPath } from "@/components/home/LearningPath";
import { Roadmap } from "@/components/home/Roadmap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <SkillCategories />
      <WhyForgEd />
      <LearningPath />
      <Roadmap />
    </>
  );
}
