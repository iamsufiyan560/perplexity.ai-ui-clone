import Search from "./Search";
import { Button } from "@/components/ui/button";
import { Bookmark, GitFork, Link2, Share } from "lucide-react";
import { useState, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Clock, Eye } from "lucide-react";
const NewsDetails = () => {
  return (
    <div className="flex w-full flex-col ">
      <nav className="sticky top-0  w-full backdrop-blur  border-b z-50">
        <div className="container mx-auto px-4 h-14 flex justify-end items-center">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="bg-[#00C2CB] hover:bg-[#00A2AB] text-black"
              size="icon"
            >
              <Link2 className="h-5 w-5" />
            </Button>
            <Button className="bg-[#00C2CB] hover:bg-[#00A2AB] text-black">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </nav>
      <DetailsNewsLayout />
      <div className="flex mx-4 lg:ml-40  md:items-center">
        <Search />
      </div>
    </div>
  );
};

export default NewsDetails;

function DetailsNewsLayout() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrollbar-hide flex flex-col md:items-center mx-4">
      <div className="relative mt-8 h-[380px]">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/t_limit/v1728181218/getty_uploads/870140864.jpg"
          alt="Pink Floyd"
          className="rounded-xl md:w-[550px] lg:w-[900px] h-full object-cover object-center"
        />
      </div>

      {/* Adjust this container */}
      <div className="flex  lg:mx-48 ">
        {/* Text Content */}
        <div className="text-wrap mt-8 md:mr-8 flex flex-col gap-2">
          <section id="introduction" className="scroll-mt-24 text-wrap">
            <h1 className="text-4xl font-bold mb-8">
              David Lynch's Interview Project
            </h1>

            <div className="flex justify-between">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-10 h-10">
                  <img
                    src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail"
                    alt="elymc"
                  />
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span>Curated by elymc</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>2 min read</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-2 items-center ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>13 Hours ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>4,266</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>105</span>
                </div>
              </div>
            </div>

            {/* Introduction Content */}
            <div className="text-gray-300 space-y-4">
              <p className="text-xl leading-relaxed">
                David Lynch's Interview Project, a compelling documentary series
                directed by Austin Lynch and Jason S, chronicles a 20,000-mile
                journey across America through 121 short interviews with
                individuals from small towns and rural areas. Set for an HD
                re-release on YouTube in summer 2024, this series offers an
                intimate glimpse into the diverse and unfiltered stories of
                everyday Americans, capturing the richness of their personal
                experiences and reflections on life.
              </p>
            </div>
          </section>

          {/* Project Overview */}
          <section id="project-overview" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <img
                  src="https://welcometotwinpeaks.com/wp-content/uploads/david-lynch-interview-project-2024-1.jpg"
                  alt="David Lynch"
                  className="w-full rounded-lg mb-4"
                />
              </div>
              <p className="leading-relaxed">
                Conceived by David Lynch but directed by his son Austin Lynch
                and collaborator Jason S, this unique documentary series
                captures the essence of American life through 121 short
                interviews12. The project, which spanned a 20,000-mile journey
                across the United States over 70 days, features randomly
                selected individuals from small towns and rural areas3. Subjects
                were discovered in various locations, from bars to roadsides,
                and encouraged to share their personal stories, dreams, and
                reflections on life24. Each 3-4 minute episode offers an
                intimate glimpse into the diverse experiences of everyday
                Americans, covering topics ranging from childhood aspirations to
                profound life changes13.
              </p>
            </div>
          </section>

          {/* Production Journey */}
          <section id="production-journey" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Production Journey</h2>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                The Interview Project's production journey was an ambitious
                undertaking, spanning 70 days and covering 20,000 miles across
                the United States. The team, led by Austin Lynch and Jason S,
                embarked on this extensive road trip with no predetermined plan,
                allowing for spontaneous encounters and authentic storytelling.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  The production process was characterized by its organic
                  nature, with the team adapting to each new location and
                  interviewee they encountered.
                </li>
                <li>
                  Interviews were conducted in a variety of settings, from hotel
                  rooms to outdoor locations, adding visual diversity to the
                  series.
                </li>
                <li>
                  The project's raw authenticity was preserved by David Lynch to
                  maintain the true essence of each individual's story.
                </li>
              </ul>
            </div>
          </section>

          <section id="content-and-significance" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">
              Content and Significance
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                David Lynch's Interview Project offers a unique and intimate
                portrait of American life, capturing the diverse experiences and
                perspectives of ordinary people across the country. The series'
                content and significance can be summarized as follows:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  Each 3-4 minute episode features a single interviewee sharing
                  personal stories, dreams, and reflections on life.
                </li>
                <li>
                  Interviewees come from various backgrounds and locations,
                  including small towns and rural areas often overlooked by
                  mainstream media
                </li>
                <li>
                  By presenting these stories without judgment or commentary,
                  the project allows viewers to connect directly with the
                  interviewees and their experiences.
                </li>
              </ul>
            </div>
          </section>

          {/* HD Collection */}
          <section id="hd-remastered-collection" className="scroll-mt-24 mb-24">
            <h2 className="text-3xl font-bold mb-6">
              HD Remastered Collection
            </h2>
            <div>
              <img
                src="https://img.youtube.com/vi/P_vbYmPm_zU/hqdefault.jpg"
                alt="David Lynch"
                className="w-full object-contain  rounded-lg mb-4"
              />
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                The Interview Project is set for a remarkable revival in 2024,
                marking its 15th anniversary with a high-definition re-release
                of all 121 episodes on YouTube12 . This remastered version
                offers viewers a chance to experience the raw, unfiltered
                stories of American life with enhanced visual quality,
                preserving the authenticity and emotional depth of each
                interview
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  Each 3-4 minute episode features a single interviewee sharing
                  personal stories, dreams, and reflections on life.
                </li>
                <li>
                  Interviewees come from various backgrounds and locations,
                  including small towns and rural areas often overlooked by
                  mainstream media
                </li>
                <li>
                  By presenting these stories without judgment or commentary,
                  the project allows viewers to connect directly with the
                  interviewees and their experiences.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block relative mt-8 lg:mr-12 md:mr-8">
          <div className="sticky top-24">
            <nav className="flex flex-col items-start space-y-4">
              {[
                "Introduction",
                "Project Overview",
                "Production Journey",
                "Content and Significance",
                "HD Remastered Collection",
              ].map((title) => {
                const id = title.toLowerCase().replace(/ /g, "-");
                return (
                  <div key={id} className="flex items-center gap-3">
                    <div
                      className={`w-[2px] h-5 transition-colors duration-200 ${
                        activeSection === id ? "bg-white" : "bg-gray-800"
                      }`}
                    />
                    <a
                      href={`#${id}`}
                      className={`text-sm transition-colors duration-200 ${
                        activeSection === id ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {title}
                    </a>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
