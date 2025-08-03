import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ProShop Ecom",
    description: "A full-featured MERN + Redux e-commerce app with JWT auth, admin dashboard, PayPal integration, and Docker support.",
    image: "/projects/project1.png",
    tags: ["MERN", "Redux", "Docker"],
    demoUrl: "https://proshopecom-1.onrender.com/",
    githubUrl: "https://github.com/rishu192003/ProshopEcom",
  },
  {
    id: 2,
    title: "Terraform S3 Static Site",
    description:
    "Infrastructure-as-Code project to deploy a static website on AWS S3 with VPC and public access configured via Terraform.",
    image: "/projects/project4.png",
    tags: ["Terraform", "S3"],
    demoUrl: "http://myterraformproject2343.s3-website-us-east-1.amazonaws.com/",
    githubUrl: "https://github.com/rishu192003/Terraform-S3-Automation",
  },
  
  {
    id: 3,
    title: "Grafana DashBoard",
    description:
      "Fully Real-Time Dashboard For Analyzing Servers and Alerting ",
    image: "/projects/project3.png",
    tags: ["Prometheus", "Grafana", "Docker"],
    demoUrl: "http://35.174.106.218:3000/public-dashboards/6fee0f243ee7437f910d57e1adf84d7e",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Django Blogwebsite",
    description:
      "A minimal Django-based blog with admin panel for CRUD posts and Bootstrap frontend, deployable via Render",
    image: "/projects/project2.png",
    tags: ["Django", "Html", "Css"],
    demoUrl: "https://django-blog-site-1.onrender.com/",
    githubUrl: "https://github.com/rishu192003/Django-Blog-Site",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key="xx" className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rishu192003"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
