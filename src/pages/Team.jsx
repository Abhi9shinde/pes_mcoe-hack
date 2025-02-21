import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      // image: "https://randomuser.me/api/portraits/men/1.jpg",
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      // image: "https://randomuser.me/api/portraits/women/2.jpg",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      // image: "https://randomuser.me/api/portraits/men/3.jpg",
      linkedin: "https://linkedin.com/in/mrodriguez",
      github: "https://github.com/mrodriguez"
    },
    {
      name: "Emma Wilson",
      role: "UI/UX Lead",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
      linkedin: "https://linkedin.com/in/emmawilson",
      github: "https://github.com/emmawilson"
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    },
    {
      name: "Lisa Patel",
      role: "Frontend Developer",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
      linkedin: "https://linkedin.com/in/lisapatel",
      github: "https://github.com/lisapatel"
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      // image: "https://randomuser.me/api/portraits/men/7.jpg",
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson"
    },
    {
      name: "Nina Garcia",
      role: "Product Manager",
      // image: "https://randomuser.me/api/portraits/women/8.jpg",
      linkedin: "https://linkedin.com/in/ninagarcia",
      github: "https://github.com/ninagarcia"
    },
    {
      name: "Tom Anderson",
      role: "Security Specialist",
      // image: "https://randomuser.me/api/portraits/men/9.jpg",
      linkedin: "https://linkedin.com/in/tomanderson",
      github: "https://github.com/tomanderson"
    },
    {
      name: "Julia Zhang",
      role: "Data Scientist",
      // image: "https://randomuser.me/api/portraits/women/10.jpg",
      linkedin: "https://linkedin.com/in/juliazhang",
      github: "https://github.com/juliazhang"
    },
    {
      name: "Robert Brown",
      role: "Mobile Developer",
      // image: "https://randomuser.me/api/portraits/men/11.jpg",
      linkedin: "https://linkedin.com/in/robertbrown",
      github: "https://github.com/robertbrown"
    },
    {
      name: "Sophie Martin",
      role: "QA Engineer",
      // image: "https://randomuser.me/api/portraits/women/12.jpg",
      linkedin: "https://linkedin.com/in/sophiemartin",
      github: "https://github.com/sophiemartin"
    },
    {
      name: "Kevin Lee",
      role: "Systems Architect",
      // image: "https://randomuser.me/api/portraits/men/13.jpg",
      linkedin: "https://linkedin.com/in/kevinlee",
      github: "https://github.com/kevinlee"
    },
    {
      name: "Maria Santos",
      role: "Frontend Developer",
      // image: "https://randomuser.me/api/portraits/women/14.jpg",
      linkedin: "https://linkedin.com/in/mariasantos",
      github: "https://github.com/mariasantos"
    },
    {
      name: "Chris Taylor",
      role: "Backend Developer",
      // image: "https://randomuser.me/api/portraits/men/15.jpg",
      linkedin: "https://linkedin.com/in/christaylor",
      github: "https://github.com/christaylor"
    },
    {
      name: "Anna Kowalski",
      role: "UX Researcher",
      // image: "https://randomuser.me/api/portraits/women/16.jpg",
      linkedin: "https://linkedin.com/in/annakowalski",
      github: "https://github.com/annakowalski"
    },
    {
      name: "Daniel Park",
      role: "Full Stack Developer",
      // image: "https://randomuser.me/api/portraits/men/17.jpg",
      linkedin: "https://linkedin.com/in/danielpark",
      github: "https://github.com/danielpark"
    },
    {
      name: "Rachel Green",
      role: "Project Manager",
      // image: "https://randomuser.me/api/portraits/women/18.jpg",
      linkedin: "https://linkedin.com/in/rachelgreen",
      github: "https://github.com/rachelgreen"
    },
    {
      name: "Steve Rogers",
      role: "Cloud Engineer",
      // image: "https://randomuser.me/api/portraits/men/19.jpg",
      linkedin: "https://linkedin.com/in/steverogers",
      github: "https://github.com/steverogers"
    },
    {
      name: "Diana Prince",
      role: "Software Engineer",
      // image: "https://randomuser.me/api/portraits/women/20.jpg",
      linkedin: "https://linkedin.com/in/dianaprince",
      github: "https://github.com/dianaprince"
    },
  ];

  return (
    <div className="mt-20 w-full min-h-screen p-4">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Our Team
          </h2>
          <p className="py-6">Meet the amazing people behind our success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover h-48"
              />
              <div className="flex flex-col items-center p-4">
                <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                {/* <p className="text-gray-400 text-sm text-center">{member.role}</p> */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 