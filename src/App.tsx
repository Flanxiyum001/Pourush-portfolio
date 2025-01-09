import { Github, Linkedin, Mail, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50"></div>
        </div>

        <div className="max-w-5xl mx-auto z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Pourush Nair</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              title="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              title="Email Me"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a full-stack developer with a passion for building modern web applications.
                With expertise in React, Node.js, and cloud technologies, I create scalable
                solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-lg font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[ 
              {
                title: 'E-commerce Platform',
                description: 'A full-stack e-commerce solution built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-lg text-white">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
